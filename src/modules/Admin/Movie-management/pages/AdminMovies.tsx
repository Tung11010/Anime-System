import { useState, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar/SidebarAdmin";
import { Button } from "@/components/Button/ButtonAdmin";
import { MovieTable } from "../components/MovieTable";
import { MovieFormModal } from "../components/MovieFormModal";
import { Movie } from "../types";
import { containerStyles, mainContentStyles } from "../styled";
import { useMovies } from "../queryHooks/useMovieQueries";
import { Header } from "@/components/Headers/HeaderAdmin"; // ✅ import Header

const initialMovie: Movie = {
  title: "",
  description: "",
  release_date: "",
  type: "",
  status: "Đang chiếu",
  studio: "",
  rating: 0,
  img_url: "",
  duration: "",
  quality: "",
  created_at: new Date(),
  updated_at: new Date(),
  slug: "",
  score: "",
  original_title: "",
};

export default function AdminMovies() {
  const { movies, loading, error, createMovie, updateMovie, deleteMovie } =
    useMovies();
  const [dark, setDark] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [formData, setFormData] = useState<Movie>(initialMovie);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    document.body.style.transition = "background-color 0.3s";
  }, [dark]);

  const handleToggleDark = () => setDark((d) => !d);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
    if (!formData.title || !formData.release_date) return;

    if (selectedMovie) {
      await updateMovie(selectedMovie.id!, formData);
    } else {
      await createMovie(formData);
    }

    handleCloseModal();
  };

  const handleEdit = (movie: Movie) => {
    setSelectedMovie(movie);
    setFormData({
      ...movie,
      release_date:
        movie.release_date instanceof Date
          ? movie.release_date.toISOString().split("T")[0]
          : movie.release_date,
    });
    setShowModal(true);
  };

  const handleDelete = async (id: number | undefined) => {
    if (!id || !window.confirm("Bạn có chắc muốn xóa phim này?")) return;
    await deleteMovie(id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
    setFormData(initialMovie);
  };

  if (loading) {
    return (
      <div className="flex justify-center p-8 dark:text-white">Đang tải...</div>
    );
  }

  return (
    <div className={containerStyles}>
      <Sidebar onLogout={handleLogout} onToggle={handleToggleDark} />
      <div className={`${mainContentStyles} ml-64 transition-all duration-300 pt-16`}>
        
        {/* ✅ Sử dụng Header component */}
        <Header dark={dark} setDark={setDark} title="Quản Lý Phim" />

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

          <MovieTable
            movies={movies}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

          <MovieFormModal
            showModal={showModal}
            selectedMovie={selectedMovie}
            formData={formData}
            onClose={handleCloseModal}
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
