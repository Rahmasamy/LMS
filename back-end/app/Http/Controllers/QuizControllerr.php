<?php

namespace App\Http\Controllers;

use App\Http\Requests\QuizeRequest;
use App\Models\Quiz;
use App\Models\QuizResult;
use Illuminate\Http\Request;

class QuizControllerr extends Controller
{
    //
    use apiResponseTrait,checkApi,AuthStudentInstAdmin;
    public function index(Request $request)
    {
        //
        $this->authorizeRole($request);
            $Lessons=Quiz::all();
    
            return $this->checkRequest($Lessons,200); 
        
        
       
    }
    public function show(Request $request,$id){
        $this->authorizeRole($request);
        $lesson=Quiz::find($id);

        return $this->checkRequest($lesson,200); 
    }


    public function Store(QuizeRequest $request){
       $this->authAdminInst($request);
       $validatedData = $request->validated();
       $lesson=Quiz::create($validatedData);
      
       return $this->checkRequest($lesson,201); 
    }
    public function update(QuizeRequest $request,$id){
        $this->authAdminInst($request);
        $validatedData = $request->validated();
        $lesson=Quiz::find($id);
        if($lesson){
            $lesson->update($validatedData);
            return $this->apiResponce($lesson, "ok", 201);
        }
       
        return $this->apiResponce(null, "No lesson with this id ", statusCode: 400); 

    }
    public function destroy(Request $request,$id){
        $this->authAdmint($request);
        $lesson=Quiz::find($id);
        if($lesson){
            Quiz::destroy($id);
            return $this->apiResponce("","lesson deleted succesfully",200);
        }
        return $this->apiResponce(null,"No lesson with that Id",404);
      
    }
    
}
