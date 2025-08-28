import React from "react";
import { Episode } from "../types";

interface EpisodeListProps {
  episodes?: Episode[];
  onEdit: (ep: Episode) => void;
  onDelete: (episodeNo: number) => void;
}

export const EpisodeList: React.FC<EpisodeListProps> = ({ episodes, onEdit, onDelete }) => {
  return (
    <ul className="space-y-2 mb-4">
      {episodes?.map((e) => (
        <li
          key={e.id}
          className="flex justify-between items-center p-2 border rounded bg-white dark:bg-gray-800"
        >
          <span>
            Tập {e.episode_no}: {e.title}
          </span>
          <div className="space-x-2">
            <button
              onClick={() => onEdit(e)}
              className="px-2 py-1 text-sm bg-yellow-500 text-white rounded"
            >
              Sửa
            </button>
            <button
              onClick={() => onDelete(e.episode_no)}
              className="px-2 py-1 text-sm bg-red-500 text-white rounded"
            >
              Xoá
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
