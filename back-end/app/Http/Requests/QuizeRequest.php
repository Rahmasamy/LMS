<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class QuizeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    use GenrelValidator;

    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "course_id" =>"required|max:15",
            "title"	=>"required|max:55",
            "total_marks"=>"required",
            "duration"=>"required"
            //
        ];
    }
    public function messages()
    {
        return [
            'title.required' => 'The quize title is required.',
            'title.max' => 'The quize title must not exceed 55 characters.',
            'total_marks.required' => 'The total marks is required ',
            'duration.required' => 'The section is required.',
           
            
        ];
    }
   
}
