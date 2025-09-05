export interface Movie {
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