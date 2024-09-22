<?php

namespace App\Http\Controllers;

use App\Models\Category;

use App\Models\Review as ModelsReview;
use Illuminate\Http\Request;

class Review extends Controller
{
    //
    use apiResponseTrait,checkApi,AuthStudentInstAdmin;
    public function index(Request $request)
    {
        //
            $this->authorizeRole($request);
            $Reviews=ModelsReview::all();
    
            return $this->checkRequest($Reviews,200); 
        
        
       
    }
}
