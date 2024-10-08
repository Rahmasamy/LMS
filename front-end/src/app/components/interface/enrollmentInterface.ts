export interface Enrollment {
  id: number;
  student_id: number;
  course_id: number;
  payment_status: string;
  date_enrolled: Date;
  progress: number;
  grade: string;
  created_at: Date;
  updated_at: Date;
}
