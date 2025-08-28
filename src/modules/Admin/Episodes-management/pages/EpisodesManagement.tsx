import React, { useState } from "react";
import { Sidebar } from "@/components/Sidebar/SidebarAdmin";
import { Header } from "@/components/Headers/HeaderAdmin";
import { useMovies } from "../queryHooks/useMovies";
import { useEpisodes } from "../queryHooks/useEpisodes";
import { EpisodeForm } from "../components/EpisodeForm";
import { EpisodeList } from "../components/EpisodeList";

const EpisodesManagement: React.FC = () => {
  const { movies } = useMovies();
  const {
    selectedMovie,
    formData,
    setFormData,
    isEditing,
    setIsEditing,
    loadMovieDetail,
    saveEpisode,
    deleteEpisode,
  } = useEpisodes();

  const [dark, setDark] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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
                <EpisodeList
                  episodes={selectedMovie.episodes}
                  onEdit={(e) => {
                    setFormData(e);
                    setIsEditing(true);
                  }}
                  onDelete={deleteEpisode}
                />
                <EpisodeForm
                  formData={formData}
                  setFormData={setFormData}
                  isEditing={isEditing}
                  onSave={saveEpisode}
                />
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
