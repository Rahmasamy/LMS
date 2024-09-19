<?php 
namespace App\Http\Requests;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

trait GenrelValidator {
  
    protected function failedValidation(Validator $validator)
    {
        $response = response()->json([
            'data' => null,
            'msg' => $validator->errors()->all(),
            'status' => 422
        ], 422);

        throw new HttpResponseException($response);
    }
}