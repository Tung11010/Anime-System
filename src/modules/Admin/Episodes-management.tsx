import React, { useEffect, useState } from "react";
import { Sidebar } from "@/components/Sidebar/SidebarAdmin";
import { Header } from "@/components/Headers/HeaderAdmin";

interface Episode {
  id: number;
  episode_no: number;
  title: string;
  video_url: string;
}

interface Movie {
  id: number;
  title: string;
  description: string;
  episodeCount?: number;
  episodes?: Episode[];
}

const API_URL = "http://localhost:3000";

const EpisodesManagement: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [formData, setFormData] = useState<Partial<Episode>>({});
  const [isEditing, setIsEditing] = useState(false);
  const [dark, setDark] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const loadMovies = async () => {
    try {
      const res = await fetch(`${API_URL}/movie`);
      const data = await res.json();
      if (Array.isArray(data)) setMovies(data);
      else if (Array.isArray(data.data)) setMovies(data.data);
      else setMovies([]);
    } catch (err) {
      console.error(err);
    }
  };

  const loadMovieDetail = async (id: number) => {
    try {
      const res = await fetch(`${API_URL}/movie/${id}`);
      const data = await res.json();
      setSelectedMovie(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveEpisode = async () => {
    if (!selectedMovie) return;

    const payload = { ...formData, movie_id: selectedMovie.id };

    try {
      if (isEditing && formData.id) {
        await fetch(`${API_URL}/episodes/${formData.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch(`${API_URL}/episodes`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      setFormData({});
      setIsEditing(false);
      loadMovieDetail(selectedMovie.id);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteEpisode = async (episodeNo: number) => {
    if (!selectedMovie) return;
    try {
      await fetch(`${API_URL}/episodes/${selectedMovie.id}/${episodeNo}`, {
        method: "DELETE",
      });
      loadMovieDetail(selectedMovie.id);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className={`flex min-h-screen ${dark ? "dark" : ""} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
      <Sidebar
        onLogout={() => alert("Đăng xuất")}
        onToggle={() => setSidebarCollapsed((prev) => !prev)}
      />
      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? "ml-20" : "ml-64"}`}>
        <Header dark={dark} setDark={setDark} title="Quản lý tập phim" />
        <div className="pt-16 flex h-[calc(100vh-4rem)] overflow-hidden">
          <div className="w-1/3 border-r border-gray-300 dark:border-gray-700 p-4 overflow-y-auto">
            <h2 className="text-xl font-bold mb-2 dark:text-white">Danh sách phim</h2>
            <ul className="space-y-2">
              {movies.map((m) => (
                <li
                  key={m.id}
                  className={`p-2 border rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 ${
                    selectedMovie?.id === m.id ? "bg-gray-300 dark:bg-gray-600" : ""
                  }`}
                  onClick={() => loadMovieDetail(m.id)}
                >
                  {m.title} - {m.episodeCount ?? 0} tập
                </li>
              ))}
            </ul>
          </div>
          <div className="w-2/3 p-4 overflow-y-auto">
            {selectedMovie ? (
              <>
                <h2 className="text-2xl font-bold mb-2 dark:text-white">{selectedMovie.title}</h2>
                <p className="mb-4 dark:text-gray-300">{selectedMovie.description}</p>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Danh sách tập</h3>
                <ul className="space-y-2 mb-4">
                  {selectedMovie.episodes?.map((e) => (
                    <li
                      key={e.id}
                      className="flex justify-between items-center p-2 border rounded bg-white dark:bg-gray-800"
                    >
                      <span>
                        Tập {e.episode_no}: {e.title}
                      </span>
                      <div className="space-x-2">
                        <button
                          onClick={() => {
                            setFormData(e);
                            setIsEditing(true);
                          }}
                          className="px-2 py-1 text-sm bg-yellow-500 text-white rounded"
                        >
                          Sửa
                        </button>
                        <button
                          onClick={() => handleDeleteEpisode(e.episode_no)}
                          className="px-2 py-1 text-sm bg-red-500 text-white rounded"
                        >
                          Xoá
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="border p-4 rounded bg-white dark:bg-gray-800">
                  <h3 className="font-bold mb-2 dark:text-white">
                    {isEditing ? "Sửa tập phim" : "Thêm tập mới"}
                  </h3>
                  <input
                    type="number"
                    placeholder="Số tập"
                    value={formData.episode_no || ""}
                    onChange={(e) => setFormData({ ...formData, episode_no: +e.target.value })}
                    className="border p-2 w-full mb-2 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Tiêu đề"
                    value={formData.title || ""}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="border p-2 w-full mb-2 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Video URL"
                    value={formData.video_url || ""}
                    onChange={(e) => setFormData({ ...formData, video_url: e.target.value })}
                    className="border p-2 w-full mb-2 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 rounded"
                  />
                  <button
                    onClick={handleSaveEpisode}
                    className="px-4 py-2 bg-blue-500 text-white dark:bg-blue-600 rounded"
                  >
                    {isEditing ? "Cập nhật" : "Thêm"}
                  </button>
                </div>
              </>
            ) : (
              <p>Chọn 1 phim để xem chi tiết</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodesManagement;