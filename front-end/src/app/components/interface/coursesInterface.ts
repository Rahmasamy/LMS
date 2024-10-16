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
  plan:string,
  price:string
}
export interface Question {
  id: number;
  quize_id: number;
  question: string;
  correct_answer: string;
  options: string[];
  created_at: string;
  updated_at: string;
}
export interface Quiz {
  id: number;
  course_id: number;
  title: string;
  total_marks: number;
  duration: string;
  created_at: string;
  updated_at: string;
  description: string | null;
  questions_count: number;
  is_active: number;
  questions: Question[];
}
