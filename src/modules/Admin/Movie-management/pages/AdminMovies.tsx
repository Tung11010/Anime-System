import { useState, useEffect } from 'react';
import axios from 'axios';
import { Sidebar } from '@/components/Sidebar/SidebarAdmin';
import { Button } from '@/components/Button/ButtonAdmin';
import { MovieTable } from '../components/MovieTable';
import { MovieFormModal } from '../components/MovieFormModal';
import { Movie } from '../types';
import { containerStyles, mainContentStyles } from '../styled';

const initialMovie: Movie = {
  title: '',
  description: '',
  release_date: '',
  type: '',
  status: 'Đang chiếu',
  studio: '',
  rating: 0,
  img_url: '',
  duration: '',
  quality: '',
  created_at: new Date(),
  updated_at: new Date(),
  slug: '',
  score: '',
  original_title: '',
};

export default function AdminMovies() {
  const [dark, setDark] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [formData, setFormData] = useState<Movie>(initialMovie);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    document.body.style.transition = 'background-color 0.3s';
  }, [dark]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get<Movie[]>('http://localhost:3000/movie');
        setMovies(response.data);
      } catch (err: unknown) {
        console.error('Lỗi khi lấy danh sách phim:', err);
        setError('Không thể tải danh sách phim. Vui lòng thử lại.');
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleToggleDark = () => setDark((d) => !d);
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: Number(value) || 0 }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      setError(null);
      if (!formData.title || !formData.release_date) {
        setError('Tiêu đề và ngày phát hành là bắt buộc.');
        return;
      }

      const payload = { ...formData };
      delete (payload as Partial<Movie>).id;

      if (selectedMovie) {
        const response = await axios.put<Movie>(
          `http://localhost:3000/movie/${selectedMovie.id}`,
          payload
        );
        setMovies((prev) =>
          prev.map((m) => (m.id === selectedMovie.id ? { ...m, ...response.data } : m))
        );
      } else {
        const response = await axios.post<Movie>('http://localhost:3000/movie', payload);
        setMovies((prev) => [
          ...prev,
          {
            ...payload,
            id: response.data.id,
            created_at: new Date(),
            updated_at: new Date(),
            slug: response.data.slug,
          } as Movie,
        ]);
      }

      setShowModal(false);
      setSelectedMovie(null);
      setFormData(initialMovie);
    } catch (err: unknown) {
      console.error('Lỗi khi lưu phim:', err);
      if (axios.isAxiosError(err)) {
        if (err.response) {
          setError(`Lỗi từ server: ${err.response.data.message || err.response.statusText}`);
        } else if (err.request) {
          setError('Không thể kết nối đến server. Vui lòng kiểm tra mạng.');
        } else {
          setError('Lỗi không xác định: ' + err.message);
        }
      } else {
        setError('Lỗi không xác định.');
      }
    }
  };

  const handleEdit = (movie: Movie) => {
    setSelectedMovie(movie);
    setFormData({
      ...movie,
      release_date:
        movie.release_date instanceof Date
          ? movie.release_date.toISOString().split('T')[0]
          : movie.release_date,
    });
    setShowModal(true);
  };

  const handleDelete = async (id: number | undefined) => {
    if (!id || !window.confirm('Bạn có chắc muốn xóa phim này?')) return;
    try {
      setError(null);
      await axios.delete(`http://localhost:3000/movie/${id}`);
      setMovies((prev) => prev.filter((m) => m.id !== id));
    } catch (err: unknown) {
      console.error('Lỗi khi xóa phim:', err);
      if (axios.isAxiosError(err)) {
        if (err.response) {
          setError(`Lỗi từ server: ${err.response.data.message || err.response.statusText}`);
        } else if (err.request) {
          setError('Không thể kết nối đến server. Vui lòng kiểm tra mạng.');
        } else {
          setError('Lỗi không xác định: ' + err.message);
        }
      } else {
        setError('Lỗi không xác định.');
      }
    }
  };

  if (loading) return <div className="flex justify-center p-8 dark:text-white">Đang tải...</div>;

  return (
    <div className={containerStyles}>
      <Sidebar onLogout={handleLogout} onToggle={handleToggleDark} />
      <div className={`${mainContentStyles} ml-64 transition-all duration-300`}>
        <header className="h-16 bg-white dark:bg-gray-800 shadow flex items-center justify-between px-8">
          <h1 className="text-xl font-bold dark:text-white">Quản lý phim</h1>
          <div className="flex items-center space-x-4">
            <button
              className="focus:outline-none"
              onClick={handleToggleDark}
              title={dark ? 'Chế độ sáng' : 'Chế độ tối'}
            >
              {dark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.657 17.657l1.061 1.061M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M17.657 6.343l1.061-1.061M12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0 1 12 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.136 2.635-7.64 6.348-9.123a.75.75 0 0 1 .908.325.75.75 0 0 1-.082.976A7.501 7.501 0 0 0 12 19.5a7.48 7.48 0 0 0 6.072-3.075.75.75 0 0 1 .976-.082.75.75 0 0 1 .325.908z"
                  />
                </svg>
              )}
            </button>
            <span className="text-gray-600 dark:text-gray-200">admin@example.com</span>
            <img src="https://i.pravatar.cc/40" alt="avatar" className="rounded-full w-10 h-10" />
          </div>
        </header>
        <main className="p-8">
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold dark:text-white">Danh sách phim</h2>
            <Button
              variant="primary"
              onClick={() => {
                setSelectedMovie(null);
                setFormData(initialMovie);
                setShowModal(true);
              }}
            >
              + Thêm phim
            </Button>
          </div>
          <MovieTable movies={movies} onEdit={handleEdit} onDelete={handleDelete} />
          <MovieFormModal
            showModal={showModal}
            selectedMovie={selectedMovie}
            formData={formData}
            onClose={() => {
              setShowModal(false);
              setSelectedMovie(null);
              setFormData(initialMovie);
            }}
            onSave={handleSave}
            onInputChange={handleInputChange}
            onNumberChange={handleNumberChange}
            onDateChange={handleDateChange}
            error={error}
          />
        </main>
      </div>
    </div>
  );
}
