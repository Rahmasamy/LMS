<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SectionRequest extends FormRequest
{
    use GenrelValidator;
    /**
     * Determine if the user is authorized to make this request.
     */
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
            'title' => 'required',
            'description' => 'required|string',
            'course_id' => 'required',
        ];
    }

    public function messages()
    {
        return [
            "title.required" => "The title is required.",
            "description.required" => "The description is required.",
            "course_id.required" => "The course_id is required.",
        ];
    }
}
