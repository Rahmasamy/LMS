<?php

namespace App\Http\Controllers;

use App\Http\Requests\CourseRequest;
use App\Http\Requests\InstructorRequest;
use App\Models\Category;
use App\Models\Course;
use App\Models\Instructor;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;

class InstructorController extends Controller
{
    //
    use apiResponseTrait,checkApi,AuthStudentInstAdmin;
    
    public function index(Request $request){
        
       
        // $this->authorizeRole($request);
        $courses=Instructor::all();


        return $this->checkRequest($courses,200); 
      
    }
   
    public function show(Request $request,$id){
        // $this->authorizeRole($request);
        $course=Instructor::find($id);

        return $this->checkRequest($course,200); 
    }


    public function Store(  InstructorRequest $request){
        $this->authAdminInst($request);
       $validatedData = $request->validated();
       $course=Instructor::create($validatedData);
       return $this->checkRequest($course,201); 
    }
    public function update(InstructorRequest $request,$id){
        $this->authAdminInst($request);
        $validatedData = $request->validated();
        $course=Instructor::find($id);
        if($course){
            $course->update($validatedData);
            return $this->apiResponce($course, "ok", 201);
        }
       
        return $this->apiResponce(null, "No Course with this id ", statusCode: 400); 

    }
    public function destroy(Request $request,$id){
        $this->authAdmin($request);
        $course=Instructor::find($id);
        if($course){
            Instructor::destroy($id);
            return $this->apiResponce("","course deleted succesfully",200);
        }
        return $this->apiResponce(null,"No course with that Id",404);
      
    }
    public function categories($instructor_id){
    
     // Get the instructor
     $instructor = Instructor::findOrFail($instructor_id);

     // Get the categories associated with the instructor's courses
     $categories = Category::whereHas('courses', function ($query) use ($instructor_id) {
         $query->where('instructor_id', $instructor_id);
     })->get();

     return response()->json($categories);
    }
    public function courses($instructor_id){
         
        $instructor = Instructor::findOrFail($instructor_id);

      
        $courses = $instructor->courses;

        return response()->json($courses);
    
    }
    public function InstructorByCourseID($course_id){
         
        $course = Course::findOrFail($course_id);
        $Instructor = $course->Instructor;
        return response()->json($Instructor);
    
    }
    public function getEnrolledCourseForInstructor($instructorId){
        $courses = Course::where('instructor_id', $instructorId)
          ->whereHas(relation: 'enrollments') 
          ->get();
        return $this->apiResponce($courses, "ok", 201);
     
    }
    public function showInstructorByUserId($userId)
    {
        $instructor = DB::table('instructors')->where('user_id', $userId)->first();
    
        if (!$instructor) {
            return response()->json(['message' => 'Instructor not found'], 404);
        }
    
        return response()->json($instructor, 200);
    }
//     public function getUserWithInstructor()
// {

//     Log::info('Inside getUserWithInstructor function');
//     $user = auth()->user();
  
  
//     if (!$user) {
//         return response()->json(['message' => 'No authenticated user found'], 401);
//     }
//     $userWithInstructor = User::with(['instructor' => function($query) {
//         $query->where('role_id', 2);
//     }])->find($user->id);

   
//     if (!$userWithInstructor) {
//         return response()->json(['message' => 'User not found'], 404);
//     }

   
//     if (!$userWithInstructor->Withinstructor) {
//         return response()->json(['message' => 'No instructor data available for this user'], 404);
//     }

//     return response()->json($userWithInstructor, 200);
// }

  
    // public function sections(Request $request,$id){
    //     $this->authAdminInst($request);
    //     $section=Course::find($id);
      
    //     return response()->json($section->sections);
    // }
    // public function Reviews(Request $request,$id){
    //     $this->authAdminInst($request);
    //     $course = Course::find($id);
       
       
    //     return response()->json($course->Reviews);
    // }
    // public function quizes(Request $request,$id){
    //     $this->authAdminInst($request);
    //     $course = Course::find($id);
       
       
    //     return response()->json($course->Quizes);
    // }
    // public function Assigments(Request $request,$id){
    //     $this->authAdminInst($request);
    //     $course = Course::find($id);
       
       
    //     return response()->json($course->Assigments);
    // }
    // public function Certificate(Request $request,$id){
    //     $this->authAdminInst($request);
    //     $course = Course::find($id);
       
    //     return response()->json($course->Certificats);
    // }
}