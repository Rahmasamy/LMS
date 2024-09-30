<?php

namespace Database\Seeders;

use App\Models\Course;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    // Course 1
    Course::create([
      'title' => 'Learning Angular from zero to hero',
      'description' => 'Learning Angular from zero to hero multiple times...',
      'plan' => 'free',
      'benefits' => 'Gain practical skills in Angular development, Build dynamic web applications, Improve coding proficiency.',
      'requirements' => 'Basic knowledge of HTML, CSS, and JavaScript.',
      'durations' => '9.10 m',
      'start_date' => '2024-09-01',
      'end_date' => '2025-02-28', // Adjusted to a valid date
      'status' => '1',
      'category_id' => 1,
      'instructor_id' => 2,
      'image_path' => 'https://www.freecodecamp.org/news/content/images/2022/09/angular.png',
      'rating' => 3.5
    ]);

    // Course 2
    Course::create([
      'title' => 'Master React',
      'description' => 'Learning React from zero to hero multiple times...',
      'plan' => 'payment',
      'benefits' => 'Understand React concepts deeply, Build interactive user interfaces, Enhance job prospects.',
      'requirements' => 'Familiarity with JavaScript and ES6 features.',
      'durations' => '9.10 m',
      'start_date' => '2024-01-01',
      'end_date' => '2025-05-02',
      'status' => '1',
      'category_id' => 2,
      'instructor_id' => 1,
      'image_path' => 'https://i.ytimg.com/vi/I6tbhNUU96Y/maxresdefault.jpg',
      'rating' => 3.5
    ]);

    // Course 3
    Course::create([
      'title' => 'Learning React from zero to hero',
      'description' => 'Learning React from zero to hero multiple times...',
      'plan' => 'free',
      'benefits' => 'Create reusable components, Manage application state effectively, Improve problem-solving skills.',
      'requirements' => 'Basic understanding of JavaScript and web development.',
      'durations' => '9.10 m',
      'start_date' => '2024-05-01',
      'end_date' => '2025-08-30',
      'status' => '1',
      'category_id' => 2,
      'instructor_id' => 2,
      'image_path' => 'https://hackr.io/blog/react-courses/thumbnail/large',
      'rating' => 3.5
    ]);

    // Course 4
    Course::create([
      'title' => 'Learning Python',
      'description' => 'Learning Python from zero to hero multiple times...',
      'plan' => 'payment',
      'benefits' => 'Master Python programming, Work with data manipulation, Build web applications.',
      'requirements' => 'No prior programming experience required, A computer with internet access.',
      'durations' => '9.10 m',
      'start_date' => '2024-01-01',
      'end_date' => '2025-06-30',
      'status' => '1',
      'category_id' => 5,
      'instructor_id' => 1,
      'image_path' => 'https://i.ytimg.com/vi/m0LdKZ-prto/maxresdefault.jpg',
      'rating' => 3.5
    ]);

    // Course 5
    Course::create([
      'title' => 'Python from zero to hero',
      'description' => 'Learning Python from zero to hero multiple times...',
      'plan' => 'free',
      'benefits' => 'Get hands-on experience with Python projects, Understand data structures and algorithms.',
      'requirements' => 'Basic computer skills, Desire to learn programming.',
      'durations' => '9.10 m',
      'start_date' => '2024-05-01',
      'end_date' => '2025-08-30',
      'status' => '1',
      'category_id' => 5,
      'instructor_id' => 2,
      'image_path' => 'https://tse4.mm.bing.net/th?id=OIP.RhDrd7hb5KcpK-f9FgKbtgHaE7&pid=Api&P=0&h=220',
      'rating' => 3.5
    ]);

    // Course 6
    Course::create([
      'title' => 'Learning Vue from zero to hero',
      'description' => 'Learning Vue from zero to hero multiple times...',
      'plan' => 'payment',
      'benefits' => 'Develop single-page applications, Understand Vue ecosystem, Enhance frontend development skills.',
      'requirements' => 'Basic knowledge of HTML, CSS, and JavaScript.',
      'durations' => '9.10 m',
      'start_date' => '2024-09-01',
      'end_date' => '2025-02-28',
      'status' => '1',
      'category_id' => 4,
      'instructor_id' => 1,
      'image_path' => 'https://cdn-media-1.freecodecamp.org/ghost/2019/03/vueart.png',
      'rating' => 3.5
    ]);

    // Course 7
    Course::create([
      'title' => 'Vue course',
      'description' => 'Learning Vue from zero to hero multiple times...',
      'plan' => 'free',
      'benefits' => 'Create interactive UIs, Work with Vue Router, Master state management with Vuex.',
      'requirements' => 'Familiarity with JavaScript, Basic understanding of frontend frameworks.',
      'durations' => '9.10 m',
      'start_date' => '2024-09-01',
      'end_date' => '2025-02-28',
      'status' => '1',
      'category_id' => 4,
      'instructor_id' => 2,
      'image_path' => 'https://jacklyons.me/images/vue-mastery-screenshot.png',
      'rating' => 3.5
    ]);

    // Course 8
    Course::create([
      'title' => 'Learning Laravel',
      'description' => 'Learning Laravel from zero to hero multiple times...',
      'plan' => 'payment',
      'benefits' => 'Build robust web applications, Learn MVC architecture, Work with Eloquent ORM.',
      'requirements' => 'Basic understanding of PHP and web development.',
      'durations' => '9.10 m',
      'start_date' => '2024-02-09',
      'end_date' => '2025-09-05',
      'status' => '1',
      'category_id' => 3,
      'instructor_id' => 1,
      'image_path' => 'https://i.ytimg.com/vi/EcYXsp78Xy8/maxresdefault.jpg',
      'rating' => 3.5
    ]);

    // Course 9
    Course::create([
      'title' => 'Mastering Laravel',
      'description' => 'Learning Laravel from zero to hero multiple times...',
      'plan' => 'free',
      'benefits' => 'Understand advanced Laravel features, Build APIs and web services, Improve code organization.',
      'requirements' => 'Familiarity with PHP and basic web application development.',
      'durations' => '9.10 m',
      'start_date' => '2024-04-01',
      'end_date' => '2025-11-30',
      'status' => '1',
      'category_id' => 3,
      'instructor_id' => 2,
      'image_path' => 'https://www.sipexe.com/assets/courses/Laravel.png',
      'rating' => 3.5
    ]);

    // Course 10
    Course::create([
      'title' => 'Laravel course',
      'description' => 'Learning Laravel from zero to hero multiple times...',
      'plan' => 'payment',
      'benefits' => 'Develop full-featured applications, Understand routing and middleware, Master database migrations.',
      'requirements' => 'Basic knowledge of PHP and OOP concepts.',
      'durations' => '9.10 m',
      'start_date' => '2024-03-01',
      'end_date' => '2025-08-30',
      'status' => '1',
      'category_id' => 3,
      'instructor_id' => 1,
      'image_path' => 'https://coursesfree.org/wp-content/uploads/2019/11/maxresdefault-33.jpg',
      'rating' => 3.5
    ]);
  }
}
