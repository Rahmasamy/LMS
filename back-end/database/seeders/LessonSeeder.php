<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LessonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
{
    // List of course IDs
    $courseIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

    foreach ($courseIds as $courseId) {
        // For each course, get the associated sections
        $sectionIds = DB::table('sections')->where('course_id', $courseId)->pluck('id');

        foreach ($sectionIds as $sectionId) {
            for ($lessonIndex = 1; $lessonIndex <= 3; $lessonIndex++) {
                // Insert lessons for each section of the course
                DB::table('lessons')->insert([
                    'title' => "Lesson {$lessonIndex} for Course {$courseId} Section {$sectionId}",
                    'descrption' => "This is the description for Lesson {$lessonIndex} of Course {$courseId}, Section {$sectionId}.",
                    'video_path' => "section_{$sectionId}_lesson_{$lessonIndex}.mp4",
                    'course_id' => $courseId,  // Correctly linking course_id
                    'section_id' => $sectionId, // Correctly linking section_id
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
}
