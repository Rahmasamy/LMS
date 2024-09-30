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
  first_name: string;
  last_name: string;
  email: string;
  email_verified_at: string | null; // Can be null if not verified
  phone_number: string;
  image_path: string; // URL to the user's profile image
  created_at: string; // ISO 8601 format
  updated_at: string; // ISO 8601 format
}
