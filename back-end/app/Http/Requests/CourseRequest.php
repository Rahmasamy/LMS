<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
class CourseRequest extends FormRequest
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
            //
            'title' => 'required|string|max:40',
            'description' => 'required|string|max:255',
            'category_id' => 'required',
            'status' => 'required|boolean',
            'instructor_id' => 'required',

        ];
    }
    public function messages()
    {
        return [
            'title.required' => 'The course title is required.',
            'title.max' => 'The course title must not exceed 40 characters.',
            'description.required' => 'The course description is required and must not exceed 255 characters.',
            'status.required' => 'The course status is required.',
            'instructor_id.required' => 'The instructor ID is required.',
            
        ];
    }
 
}
