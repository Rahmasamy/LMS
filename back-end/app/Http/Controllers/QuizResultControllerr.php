<?php

namespace App\Http\Controllers;

use App\Models\QuizResult;
use Illuminate\Http\Request;

class QuizResultControllerr extends Controller
{
    
    public function setResult(Request $request)
    {
        
        $validatedData = $request->validate([
            'quize_id' => 'required', 
            'student_id' => 'required', 
            'score' => 'required', 
           
        ]);
    
        
        $quizResult = QuizResult::create($validatedData);
    
        
        return response()->json($quizResult, 201);
    }
}
