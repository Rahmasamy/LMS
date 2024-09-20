<?php
namespace App\Http\Controllers;

trait apiResponseTrait{
   
     public function apiResponce($data=null,$msg=null,$statusCode=null){
        
        $array=[
            "data" => $data,
            "msg" => $msg,
            'status' => $statusCode
        ];
       
        return response($array,$statusCode,[$msg]);
     }
}