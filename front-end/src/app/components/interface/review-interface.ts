export interface Review {
  id: number;
  student_id: number;
  course_id: number;
  review: string;
  created_at: Date | null;
  updated_at: Date | null;
}
