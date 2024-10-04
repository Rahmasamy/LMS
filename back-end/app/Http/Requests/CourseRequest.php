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
            'title' => 'required|string|max:40|unique:courses,title',
            'description' => 'required|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'category_id' => 'required|integer',
            'status' => 'required|boolean',
            'instructor_id' => 'required|integer',
            'benefits' => 'required|string|max:255',
            'requirements' => 'required|string|max:255',
            'plan' => 'required|string|max:255',
            'durations' => 'required|string',
            'level' => 'required|string',

        ];
    }
    public function messages()
    {
        return [
            'title.required' => 'The course title is required.',
            'title.unique' => 'This course already exists',
            'title.max' => 'The course title must not exceed 40 characters.',
            'description.required' => 'The course description is required and must not exceed 255 characters.',
            'status.required' => 'The course status is required.',
            'instructor_id.required' => 'The instructor ID is required.',
            'benefits.required' => 'You must enter the benefits of the course',
            'requirements.required' => 'You must enter the requirment',
            'plan.required' => 'You must enter the plan of the course',
            'durations.required' => 'You must enter the duration of the course',
            'description.max' => 'The course description must not exceed 255 characters.',
            'level.required' => 'The course level status is required.',

        ];
    }

}
