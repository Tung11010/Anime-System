export interface User {
  username: string;
  avatar: string;
}

export interface Comment {
  user: User;
  content: string;
  timeAgo: string;
}