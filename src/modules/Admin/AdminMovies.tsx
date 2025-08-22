import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

interface Movie {
  id?: number;
  title: string;
  description: string;
  release_date: Date | string;
  type: string;
  status: string;
  studio: string;
  rating: number;
  img_url: string;
  duration: string;
  quality: string;
  created_at: Date | string;
  updated_at: Date | string;
  slug: string;
  score: string;
  original_title: string;
}

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

const movieTypes = ['Movie', 'Series', 'Documentary'];
const statuses = ['Đang chiếu', 'Sắp chiếu', 'Kết thúc'];
const qualities = ['HD', 'FHD', '4K'];

export default function AdminMovies() {
  const [collapsed, setCollapsed] = useState(false);
  const [dark, setDark] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [formData, setFormData] = useState<Movie>(initialMovie);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
      document.body.style.transition = 'background-color 0.3s';
    } else {
      document.body.classList.remove('dark');
      document.body.style.transition = 'background-color 0.3s';
    }
  }, [dark]);

  // Lấy danh sách phim từ API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/movie');
        setMovies(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách phim:', error);
        setError('Không thể tải danh sách phim. Vui lòng thử lại.');
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleToggle = () => setCollapsed((c) => !c);
  const handleToggleDark = () => setDark((d) => !d);
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      setError(null); // Xóa lỗi cũ
      // Kiểm tra dữ liệu cơ bản
      if (!formData.title || !formData.release_date) {
        setError('Tiêu đề và ngày phát hành là bắt buộc.');
        return;
      }

      const payload = { ...formData };
      
      delete payload.id; // Loại bỏ id khi thêm mới

      console.log('Payload gửi đi:', payload); // Debug: Xem dữ liệu gửi

      if (selectedMovie) {
        // Cập nhật phim
        const response = await axios.put(`http://localhost:3000/movie/${selectedMovie.id}`, payload);
        setMovies((prev) =>
          prev.map((m) => (m.id === selectedMovie.id ? { ...m, ...response.data } : m))
        );
      } else {
        // Thêm phim mới
        const response = await axios.post('http://localhost:3000/movie', payload);
        setMovies((prev) => [
          ...prev,
          { ...payload, id: response.data.id, created_at: new Date(), updated_at: new Date(), slug: response.data.slug },
        ]);
      }
      setShowModal(false);
      setSelectedMovie(null);
      setFormData(initialMovie);
    } catch (error: any) {
      console.error('Lỗi khi lưu phim:', error);
      if (error.response) {
        setError(`Lỗi từ server: ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        setError('Không thể kết nối đến server. Vui lòng kiểm tra mạng.');
      } else {
        setError('Lỗi không xác định: ' + error.message);
      }
    }
  };

  const handleEdit = (movie: Movie) => {
    setSelectedMovie(movie);
    setFormData({
      ...movie,
      release_date: new Date(movie.release_date).toISOString().split('T')[0],
    });
    setShowModal(true);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Bạn có chắc muốn xóa phim này?')) {
      try {
        setError(null);
        await axios.delete(`http://localhost:3000/movie/${id}`);
        setMovies((prev) => prev.filter((m) => m.id !== id));
      } catch (error) {
        console.error('Lỗi khi xóa phim:', error);
        setError('Không thể xóa phim. Vui lòng thử lại.');
      }
    }
  };

  if (loading) return <div className="flex justify-center p-8 dark:text-white">Đang tải...</div>;

  return (
    <div className={`flex min-h-screen ${dark ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white flex flex-col justify-between fixed top-0 left-0 h-screen transition-all duration-300 ${
          collapsed ? 'w-20' : 'w-64 md:w-64'
        }`}
      >
        <div>
          <div className="h-16 flex items-center border-b border-gray-800 relative">
            <button
              className="absolute left-4 focus:outline-none"
              onClick={handleToggle}
              title={collapsed ? 'Mở rộng' : 'Thu gọn'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                />
              </svg>
            </button>
            <span
              className={`text-2xl font-bold mx-auto transition-opacity ${
                collapsed ? 'opacity-0 w-0' : ''
              }`}
            >
              Admin
            </span>
          </div>
          <nav className="flex-1 px-2 py-6 space-y-2">
            <Link
              to="/admin"
              className={`flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-800 ${
                !collapsed ? '' : 'justify-center'
              }`}
            >
              {collapsed ? <span className="text-lg">🏠</span> : 'Dashboard'}
            </Link>
            <Link
              to="/admin/users"
              className={`flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-800 ${
                !collapsed ? '' : 'justify-center'
              }`}
            >
              {collapsed ? <span className="text-lg">🎬</span> : 'Users'}
            </Link>
            <Link
              to="/admin/movies"
              className={`flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-800 ${
                collapsed ? 'justify-center' : 'bg-gray-800 font-semibold'
              }`}
            >
              {collapsed ? <span className="text-lg">👤</span> : 'Movies'}
            </Link>
            <Link
              to="/admin/episodes"
              className={`flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-800 ${
                collapsed ? 'justify-center' : ''
              }`}
            >
              {collapsed ? <span className="text-lg">📝</span> : 'Episodes'}
            </Link>
            <Link
              to="/admin/blogs"
              className={`flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-800 ${
                collapsed ? 'justify-center' : ''
              }`}
            >
              {collapsed ? <span className="text-lg">📝</span> : 'Blogs'}
            </Link>
          </nav>
        </div>
        <button
          className={`m-4 py-2 ${collapsed ? 'px-2 text-xs' : 'px-4'} bg-red-600 hover:bg-red-700 rounded text-white font-semibold w-auto`}
          onClick={handleLogout}
        >
          {collapsed ? <span className="text-lg">⏻</span> : 'Logout'}
        </button>
      </aside>

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col ml-${collapsed ? '20' : '64'} md:ml-${
          collapsed ? '20' : '64'
        } transition-all duration-300`}
      >
        {/* Header */}
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
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="rounded-full w-10 h-10"
            />
          </div>
        </header>

        {/* Main content */}
        <div className="p-8">
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold dark:text-white">Danh sách phim</h2>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => {
                setSelectedMovie(null);
                setFormData(initialMovie);
                setShowModal(true);
              }}
            >
              + Thêm phim
            </button>
          </div>

          {/* Movie Table */}
          <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Tiêu đề
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Loại
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Trạng thái
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Đánh giá
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Ngày phát hành
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {movies.map((movie) => (
                  <tr key={movie.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {movie.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-300">
                        {movie.type}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                        {movie.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-300">
                        {movie.rating}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-300">
                        {new Date(movie.release_date).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 mr-2"
                        onClick={() => handleEdit(movie)}
                      >
                        Sửa
                      </button>
                      <button
                        className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                        onClick={() => handleDelete(movie.id!)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modal */}
          {showModal && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md max-h-[80vh] overflow-y-auto">
                <h3 className="text-xl font-bold mb-4 dark:text-white">
                  {selectedMovie ? 'Sửa phim' : 'Thêm phim'}
                </h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      name="title"
                      placeholder="Tiêu đề"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                    />
                    <input
                      type="text"
                      name="original_title"
                      placeholder="Tiêu đề gốc"
                      value={formData.original_title}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <textarea
                    name="description"
                    placeholder="Mô tả"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded h-24 dark:bg-gray-700 dark:text-white"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      name="release_date"
                      placeholder="Ngày phát hành"
                      value={formData.release_date instanceof Date ? formData.release_date.toISOString().split('T')[0] : formData.release_date}
                      onChange={handleDateChange}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                    />
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Chọn loại</option>
                      {movieTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Chọn trạng thái</option>
                      {statuses.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      name="studio"
                      placeholder="Studio"
                      value={formData.studio}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      name="rating"
                      placeholder="Đánh giá"
                      value={formData.rating}
                      onChange={handleNumberChange}
                      min={0}
                      max={10}
                      step={0.1}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                    />
                    <input
                      type="text"
                      name="img_url"
                      placeholder="URL Hình ảnh"
                      value={formData.img_url}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      name="duration"
                      placeholder="Thời lượng (ví dụ: 2h 30m)"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                    />
                    <select
                      name="quality"
                      value={formData.quality}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Chọn chất lượng</option>
                      {qualities.map((q) => (
                        <option key={q} value={q}>
                          {q}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="text"
                    name="score"
                    placeholder="Điểm số (ví dụ: 8.5/10)"
                    value={formData.score}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                  />
                  <div className="flex justify-end gap-2 mt-4">
                    <button
                      className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                      onClick={() => {
                        setShowModal(false);
                        setSelectedMovie(null);
                        setFormData(initialMovie);
                      }}
                    >
                      Hủy
                    </button>
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                      onClick={handleSave}
                    >
                      Lưu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}