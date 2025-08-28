import React from "react";
import { Episode } from "../types";

interface EpisodeFormProps {
  formData: Partial<Episode>;
  setFormData: (data: Partial<Episode>) => void;
  isEditing: boolean;
  onSave: () => void;
}

export const EpisodeForm: React.FC<EpisodeFormProps> = ({ formData, setFormData, isEditing, onSave }) => {
  return (
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
        onClick={onSave}
        className="px-4 py-2 bg-blue-500 text-white dark:bg-blue-600 rounded"
      >
        {isEditing ? "Cập nhật" : "Thêm"}
      </button>
    </div>
  );
};
