<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EnrollmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'student_id' => [
            'required',
            'exists:students,id',
            'unique:enrollments,student_id,NULL,id,course_id,' . $this->course_id,
        ],
            'course_id' => 'required|exists:courses,id',   
            'date_enrolled' => 'nullable|date',    
            'progress' => 'numeric|min:0|max:100',         
            'grade' => 'nullable|numeric|min:0|max:100',  
        ];
    }


    public function messages(): array
    {
        return [
            'student_id.unique' => 'You are already enrolled in this course.',
            'student_id.required' => 'The student field is required.',
            'student_id.exists' => 'The selected student does not exist.',
            'course_id.required' => 'The course field is required.'
        ];
    }



}
