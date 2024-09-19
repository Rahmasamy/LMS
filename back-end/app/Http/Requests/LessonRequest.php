<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class LessonRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    use GenrelValidator;
    public function rules(): array
    {
        return [
            //
        
            'title' => 'required|string|max:40',
            'descrption' => 'required|string|max:255',
            'video_path' => 'required',
            'section_id' => 'required',
            

        ];
    }
    public function messages()
    {
        return [
            'title.required' => 'The lesson title is required.',
            'title.max' => 'The lesson title must not exceed 40 characters.',
            'descrption.required' => 'The lesson description is required and must not exceed 255 characters.',
            'section_id.required' => 'The section is required.',
           
            
        ];
    }
   
}
