<?php

namespace App\Http\Controllers;

use App\Http\Requests\QuestioneRequest;
use App\Models\Question;
use App\Models\Quiz;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    //
    use apiResponseTrait,checkApi,AuthStudentInstAdmin;
    public function index(Request $request)
    {
        //
        $this->authorizeRole($request);
            $Lessons=Question::all();
    
            return $this->checkRequest($Lessons,200); 
        
        
       
    }
    public function show(Request $request,$id){
        $this->authorizeRole($request);
        $lesson=Question::find($id);

        return $this->checkRequest($lesson,200); 
    }


    public function Store(QuestioneRequest $request){
       $this->authAdminInst($request);
       $validatedData = $request->validated();
       $lesson=Question::create($validatedData);
      
       return $this->checkRequest($lesson,201); 
    }
    public function update(QuestioneRequest $request,$id){
        $this->authAdminInst($request);
        $validatedData = $request->validated();
        $lesson=Question::find($id);
        if($lesson){
            $lesson->update($validatedData);
            return $this->apiResponce($lesson, "ok", 201);
        }
       
        return $this->apiResponce(null, "No question with this id ", statusCode: 400); 

    }
    public function destroy(Request $request,$id){
        $this->authAdmint($request);
        $lesson=Question::find($id);
        if($lesson){
            Question::destroy($id);
            return $this->apiResponce("","question deleted succesfully",200);
        }
        return $this->apiResponce(null, "No question with that Id",404);
      
    }
    public function getQuestionsByQuizId($id){
        $quiz = Quiz::find($id);
    if (!$quiz) {
        return response()->json(['message' => 'Quiz not found'], 404);
    }

   
    $questions = $quiz->questions; 

    return response()->json($questions, 200);
    }
}
