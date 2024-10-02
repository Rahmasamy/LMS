<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $reviews = [
            ['student_id' => 1, 'course_id' => 1, 'review' => 'Great Angular course! Very detailed and clear.'],
            ['student_id' => 2, 'course_id' => 1, 'review' => 'Loved the Angular project. Good hands-on experience.'],

            ['student_id' => 1, 'course_id' => 2, 'review' => 'React fundamentals are well explained.'],
            ['student_id' => 2, 'course_id' => 2, 'review' => 'React course was okay, could have included more advanced topics.'],

            ['student_id' => 1, 'course_id' => 3, 'review' => 'Advanced React course, helpful for experienced developers.'],
            ['student_id' => 2, 'course_id' => 3, 'review' => 'React hooks are explained clearly in this course.'],

            ['student_id' => 1, 'course_id' => 4, 'review' => 'Python course was well structured and easy to follow.'],
            ['student_id' => 2, 'course_id' => 4, 'review' => 'Loved the Python assignments. They were practical and challenging.'],

            ['student_id' => 1, 'course_id' => 5, 'review' => 'Python course gave me a solid foundation.'],
            ['student_id' => 2, 'course_id' => 5, 'review' => 'Good Python course, but could use more project work.'],

            ['student_id' => 1, 'course_id' => 6, 'review' => 'Great introduction to Vue. Simple and clear examples.'],
            ['student_id' => 2, 'course_id' => 6, 'review' => 'The Vue course made learning fun and easy.'],

            ['student_id' => 1, 'course_id' => 7, 'review' => 'Vue course is great for beginners.'],
            ['student_id' => 2, 'course_id' => 7, 'review' => 'Good Vue course, but the pace was a little fast.'],

            ['student_id' => 1, 'course_id' => 8, 'review' => 'The advanced React course really helped me in my job.'],
            ['student_id' => 2, 'course_id' => 8, 'review' => 'Loved the hands-on React projects in this course.'],

            ['student_id' => 1, 'course_id' => 9, 'review' => 'React course was informative and had great examples.'],
            ['student_id' => 2, 'course_id' => 9, 'review' => 'The React course was good, but could have been more in-depth.'],

            ['student_id' => 1, 'course_id' => 10, 'review' => 'React course was detailed and comprehensive.'],
            ['student_id' => 2, 'course_id' => 10, 'review' => 'Good React course with clear explanations.'],
        ];

        // Insert the reviews into the database
        DB::table('reviews')->insert($reviews);
    }
}
