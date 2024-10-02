<?php

namespace App\Http\Controllers;

use App\Http\Requests\StudentRequest;
use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\User;

class StudentController extends Controller
{
    use apiResponseTrait,checkApi,AuthStudentInstAdmin;
    public function index(Request $request)
    {
        //
            $this->authorizeRole($request);
            $Lessons=Student::all();
    
            return $this->checkRequest($Lessons,200); 
        
        
       
    }
    public function show(Request $request,$id){
        $this->authorizeRole($request);
        $lesson=Student::find($id);

        return $this->checkRequest($lesson,200); 
    }


    public function Store(StudentRequest $request){
    
       $validatedData = $request->validated();
       $student=Student::create($validatedData);
      
       return $this->checkRequest($student,201); 
    }
    public function update(StudentRequest $request,$id){
        $validatedData = $request->validated();
        $lesson=Student::find($id);
        if($lesson){
            $lesson->update($validatedData);
            return $this->apiResponce($lesson, "ok", 201);
        }
       
        return $this->apiResponce(null, "No Student with this id ", statusCode: 400); 

    }
    public function destroy($id){
        $lesson=Student::find($id);
        if($lesson){
            Student::destroy($id);
            return $this->apiResponce("","Student deleted succesfully",200);
        }
        return $this->apiResponce(null,"No Student with that Id",404);
      
    }
    
  
 
}
