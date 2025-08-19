export interface User {
  username: string;
  avatar: string;
}

export interface Episode {
  id: number;
  episode_no: string;
  video_url: string;
}

export interface Comment {
  user: User;
  content: string;
  timeAgo: string;
}