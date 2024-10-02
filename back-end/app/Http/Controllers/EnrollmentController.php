<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use Illuminate\Http\Request;
use Carbon\Carbon;

class EnrollmentController extends Controller
{
    //
    public function enroll(Request $request)
    {
        // Validate the incoming request
       
            // Validate the incoming request
            $request->validate([
                'student_id' => 'required|exists:students,id',
                'course_id' => 'required|exists:courses,id',
                'payment_status' => 'required|string',
            ]);
    
            // Create the enrollment
            $enrollment = Enrollment::create([
                'student_id' => $request->student_id,
                'course_id' => $request->course_id,
                'payment_status' => $request->payment_status,
                'date_enrolled' => Carbon::now(), // Set current date and time
                'progress' => 0, // You can set a default progress if needed
                'grade' => null, // Initially set grade to null
            ]);
    
            return response()->json(['message' => 'Enrollment successful', 'enrollment' => $enrollment], 201);
        
    }
}
