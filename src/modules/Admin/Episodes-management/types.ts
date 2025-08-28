export interface Episode {
  id: number;
  episode_no: number;
  title: string;
  video_url: string;
}

export interface Movie {
  id: number;
  title: string;
  description: string;
  episodeCount?: number;
  episodes?: Episode[];
}
