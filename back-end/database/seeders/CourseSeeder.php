<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Course;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

    	 $cours1=Course::create([
            'title' => 'Learning Angular from zero to hero',
            'description' => 'Learning Angular from zero to hero multiple times...',
            'start_date' => '2024-09-01',  // Use a consistent date format
            'end_date' => '2025-02-30',   // Adjust the date format
            'status' => '1',
            'category_id' => 1,
            'instructor_id' => 5,
            'image_path' => 'https://media.licdn.com/dms/image/D4D12AQH5WGa2Z9Ieiw/article-cover_image-shrink_720_1280/0/1690880909231?e=2147483647&v=beta&t=N0FOuFcdoa21wLDsvF0-Ydx4gQXtZ4RqxcptVQRb9vI',
            'rating' => 3.5
        ]);
        
    	 $cours2=Course::create([
            'title' => 'Master React',
            'description' => 'Learning react from zero to hero multiple times...',
            'start_date' => '2024-010-01',  // Use a consistent date format
            'end_date' => '2025-5-2',   // Adjust the date format
            'status' => '1',
            'category_id' => 2,
            'instructor_id' => 3,
            'image_path' => 'https://media.licdn.com/dms/image/D4D12AQH5WGa2Z9Ieiw/article-cover_image-shrink_720_1280/0/1690880909231?e=2147483647&v=beta&t=N0FOuFcdoa21wLDsvF0-Ydx4gQXtZ4RqxcptVQRb9vI',
            'rating' => 3.5
        ]);
        
    	 $cours3=Course::create([
            'title' => 'Learning react from zero to hero',
            'description' => 'Learning Angular from zero to hero multiple times...',
            'start_date' => '2024-05-01',  // Use a consistent date format
            'end_date' => '2025-08-30',   // Adjust the date format
            'status' => '1',
            'category_id' => 2,
            'instructor_id' => 2,
            'image_path' => 'https://media.licdn.com/dms/image/D4D12AQH5WGa2Z9Ieiw/article-cover_image-shrink_720_1280/0/1690880909231?e=2147483647&v=beta&t=N0FOuFcdoa21wLDsvF0-Ydx4gQXtZ4RqxcptVQRb9vI',
            'rating' => 3.5
        ]);
        
    	 $cours4=Course::create([
            'title' => 'Learning Python',
            'description' => 'Learning Python from zero to hero multiple times...',
            'start_date' => '2024-01-01',  // Use a consistent date format
            'end_date' => '2025-06-30',   // Adjust the date format
            'status' => '1',
            'category_id' => 5,
            'instructor_id' => 2,
            'image_path' => 'https://media.licdn.com/dms/image/D4D12AQH5WGa2Z9Ieiw/article-cover_image-shrink_720_1280/0/1690880909231?e=2147483647&v=beta&t=N0FOuFcdoa21wLDsvF0-Ydx4gQXtZ4RqxcptVQRb9vI',
            'rating' => 3.5
        ]);
        
    	 $cours5=Course::create([
            'title' => 'Python from zero to hero',
            'description' => 'Learning Python from zero to hero multiple times...',
            'start_date' => '2024-05-01',  // Use a consistent date format
            'end_date' => '2025-08-30',   // Adjust the date format
            'status' => '1',
            'category_id' => 5,
            'instructor_id' => 3,
            'image_path' => 'https://media.licdn.com/dms/image/D4D12AQH5WGa2Z9Ieiw/article-cover_image-shrink_720_1280/0/1690880909231?e=2147483647&v=beta&t=N0FOuFcdoa21wLDsvF0-Ydx4gQXtZ4RqxcptVQRb9vI',
            'rating' => 3.5
        ]);
        
    	 $cours6=Course::create([
            'title' => 'Learning vue from zero to hero',
            'description' => 'Learning vue from zero to hero multiple times...',
            'start_date' => '2024-09-01',  // Use a consistent date format
            'end_date' => '2025-02-30',   // Adjust the date format
            'status' => '1',
            'category_id' => 4,
            'instructor_id' => 10,
            'image_path' => 'https://media.licdn.com/dms/image/D4D12AQH5WGa2Z9Ieiw/article-cover_image-shrink_720_1280/0/1690880909231?e=2147483647&v=beta&t=N0FOuFcdoa21wLDsvF0-Ydx4gQXtZ4RqxcptVQRb9vI',
            'rating' => 3.5
        ]);
        
    	 $cours7=Course::create([
            'title' => 'Vue course',
            'description' => 'Learning vue from zero to hero multiple times...',
            'start_date' => '2024-09-01',  // Use a consistent date format
            'end_date' => '2025-02-30',   // Adjust the date format
            'status' => '1',
            'category_id' => 4,
            'instructor_id' => 9,
            'image_path' => 'https://media.licdn.com/dms/image/D4D12AQH5WGa2Z9Ieiw/article-cover_image-shrink_720_1280/0/1690880909231?e=2147483647&v=beta&t=N0FOuFcdoa21wLDsvF0-Ydx4gQXtZ4RqxcptVQRb9vI',
            'rating' => 3.5
        ]);
        
    	 $cours8=Course::create([
            'title' => 'Learning Laravel',
            'description' => 'Learning laravel from zero to hero multiple times...',
            'start_date' => '2024-02-09',  // Use a consistent date format
            'end_date' => '2025-09-05',   // Adjust the date format
            'status' => '1',
            'category_id' => 3,
            'instructor_id' => 6,
            'image_path' => 'https://media.licdn.com/dms/image/D4D12AQH5WGa2Z9Ieiw/article-cover_image-shrink_720_1280/0/1690880909231?e=2147483647&v=beta&t=N0FOuFcdoa21wLDsvF0-Ydx4gQXtZ4RqxcptVQRb9vI',
            'rating' => 3.5
        ]);
        
    	 $cours9=Course::create([
            'title' => 'Mastering Laravel',
            'description' => 'Learning laravel from zero to hero multiple times...',
            'start_date' => '2024-04-01',  // Use a consistent date format
            'end_date' => '2025-11-30',   // Adjust the date format
            'status' => '1',
            'category_id' => 3,
            'instructor_id' => 7,
            'image_path' => 'https://media.licdn.com/dms/image/D4D12AQH5WGa2Z9Ieiw/article-cover_image-shrink_720_1280/0/1690880909231?e=2147483647&v=beta&t=N0FOuFcdoa21wLDsvF0-Ydx4gQXtZ4RqxcptVQRb9vI',
            'rating' => 3.5
        ]);
        
    	 $cours10=Course::create([
            'title' => 'Laravel course',
            'description' => 'Learning laravel from zero to hero multiple times...',
            'start_date' => '2024-03-01',  // Use a consistent date format
            'end_date' => '2025-08-30',   // Adjust the date format
            'status' => '1',
            'category_id' => 3,
            'instructor_id' => 8,
            'image_path' => 'https://media.licdn.com/dms/image/D4D12AQH5WGa2Z9Ieiw/article-cover_image-shrink_720_1280/0/1690880909231?e=2147483647&v=beta&t=N0FOuFcdoa21wLDsvF0-Ydx4gQXtZ4RqxcptVQRb9vI',
            'rating' => 3.5
        ]);
        
    }
}
