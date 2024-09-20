<?php

namespace App\Http\Controllers;

use App\Http\Requests\LessonRequest;
use App\Models\Lesson as ModelsLesson;
use Illuminate\Http\Request;

class Lesson extends Controller
{
    //
    use apiResponseTrait;
    use checkApi;
    public function index()
    {
        //
      
            $Lessons=ModelsLesson::all();
    
            return $this->checkRequest($Lessons,200); 
        
        
       
    }
    public function show($id){
        $lesson=ModelsLesson::find($id);

        return $this->checkRequest($lesson,200); 
    }


    public function Store(LessonRequest $request){
       $validatedData = $request->validated();
       $lesson=ModelsLesson::create($validatedData);
      
       return $this->checkRequest($lesson,201); 
    }
    public function update(LessonRequest $request,$id){
        $validatedData = $request->validated();
        $lesson=ModelsLesson::find($id);
        if($lesson){
            $lesson->update($validatedData);
            return $this->apiResponce($lesson, "ok", 201);
        }
       
        return $this->apiResponce(null, "No lesson with this id ", statusCode: 400); 

    }
    public function destroy($id){
        $lesson=ModelsLesson::find($id);
        if($lesson){
            ModelsLesson::destroy($id);
            return $this->apiResponce("","lesson deleted succesfully",200);
        }
        return $this->apiResponce(null,"No lesson with that Id",404);
      
    }
}
