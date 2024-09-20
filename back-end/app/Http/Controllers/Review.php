<?php

namespace App\Http\Controllers;

use App\Models\Category;

use App\Models\Review as ModelsReview;
use Illuminate\Http\Request;

class Review extends Controller
{
    //
    use apiResponseTrait;
    use checkApi;
    public function index()
    {
        //
      
            $Reviews=ModelsReview::all();
    
            return $this->checkRequest($Reviews,200); 
        
        
       
    }
}
