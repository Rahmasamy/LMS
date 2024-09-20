<?php

namespace App\Http\Controllers;

use App\Http\Requests\CourseRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Course;

class CourseControllerr extends Controller
{
    //
    use apiResponseTrait;
    use checkApi;
    public function index()
    {
        //
        $student = Student::find(1);
       
         return $student->courses()->get();
      
       
       
    }
    public function all(){
      
        $courses=Course::all();

        return $this->checkRequest($courses,200); 
      
    }
    public function show($id){
        $course=Course::find($id);

        return $this->checkRequest($course,200); 
    }


    public function Store(CourseRequest $request){
       $validatedData = $request->validated();
       $course=Course::create($validatedData);
       echo $course;
       return $this->checkRequest($course,201); 
    }
    public function update(CourseRequest $request,$id){
        $validatedData = $request->validated();
        $course=Course::find($id);
        if($course){
            $course->update($validatedData);
            return $this->apiResponce($course, "ok", 201);
        }
       
        return $this->apiResponce(null, "No Course with this id ", statusCode: 400); 

    }
    public function destroy($id){
        $course=Course::find($id);
        if($course){
            Course::destroy($id);
            return $this->apiResponce("","course deleted succesfully",200);
        }
        return $this->apiResponce(null,"No course with that Id",404);
      
    }
    public function sections($id){
        $section=Course::find($id);
      
        return response()->json($section->sections);
    }
    public function Reviews($id){
        $course = Course::find($id);
       
       
        return response()->json($course->Reviews);
    }
    public function quizes($id){
        $course = Course::find($id);
       
       
        return response()->json($course->Quizes);
    }
    public function Assigments($id){
        $course = Course::find($id);
       
       
        return response()->json($course->Assigments);
    }
    public function Certificate($id){
        $course = Course::find($id);
       
        return response()->json($course->Certificats);
    }
}
