export interface Instructor {
  id: number;
  rating: string;
  role_id: number;
  user_id: number;
  created_at: string; // ISO 8601 format
  updated_at: string; // ISO 8601 format
}

export interface User {
  id: number;
  first_name: string | null;
  last_name: string |null;
  email: string | null;
  email_verified_at: string | null;
  phone_number: string |null;
  image_path: string |null;
  created_at: string |null;
  updated_at: string | null;
}
