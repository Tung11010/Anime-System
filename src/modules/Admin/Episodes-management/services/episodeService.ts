import { API_URL } from "../constants/api";
import { Episode } from "../types";

export const episodeService = {
  async createEpisode(payload: Partial<Episode> & { movie_id: number }) {
    return fetch(`${API_URL}/episodes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  },

  async updateEpisode(id: number, payload: Partial<Episode> & { movie_id: number }) {
    return fetch(`${API_URL}/episodes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  },

  async deleteEpisode(movieId: number, episodeNo: number) {
    return fetch(`${API_URL}/episodes/${movieId}/${episodeNo}`, {
      method: "DELETE",
    });
  },
};
