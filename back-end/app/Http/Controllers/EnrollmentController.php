<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Http\Requests\EnrollmentRequest;
use App\Models\Course;


class EnrollmentController extends Controller
{
    public function enroll(EnrollmentRequest $request)
    {
        // Data is already validated at this point
        $validatedData = $request->validated();

        // Create the enrollment
        $enrollment = Enrollment::create([
            'student_id' => $validatedData['student_id'],
            'course_id' => $validatedData['course_id'],
            'date_enrolled' => Carbon::now(), 
            'progress' => 0,
            'grade' => null,
        ]);

        return response()->json([
            'message' => 'Enrollment successful',
            'enrollment' => $enrollment
        ], 201);
    }
}
