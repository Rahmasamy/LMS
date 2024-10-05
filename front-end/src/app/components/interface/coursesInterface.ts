export interface Course {
  id: number;
  title: string;
  description: string;
  image_path: string;
  start_date: string;
  end_date: string;
  rating: string;
  status: string;
  category_id: number;
  instructor_id: number;
  created_at: string | null;
  updated_at: string | null;
  durations:string;
  plan:string
}
