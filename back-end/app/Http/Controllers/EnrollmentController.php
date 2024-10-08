<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use App\Models\Student;
use Illuminate\Http\Request;
use Carbon\Carbon;

class EnrollmentController extends Controller
{
    //
    public function enroll(Request $request)
    {
        
            $request->validate([
                'student_id' => 'required',
                'course_id' => 'required',
                'payment_status' => 'required|string',
            ]);
    
          
            $enrollment = Enrollment::create([
                'student_id' => $request->student_id,
                'course_id' => $request->course_id,
                'payment_status' => $request->payment_status,
                'date_enrolled' => Carbon::now(), 
                'progress' => 0,
                'grade' => null, 
            ]);
    
            return response()->json(['message' => 'Enrollment successful', 'enrollment' => $enrollment], 201);
        
    }
    public function getEnrollmentsByStudentId($student_id)
    {
       
        $enrollments = Enrollment::where('student_id', $student_id)->get();

      
        if ($enrollments->isEmpty()) {
            return response()->json([
                'message' => 'No enrollments found for this student.',
                'enrollments' => []
            ], 404);
        }
        return response()->json([
            'message' => 'Enrollments retrieved successfully.',
            'enrollments' => $enrollments
        ], 200);
    }
  
}
