<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class QuestioneRequest extends FormRequest
{
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
            'question' => 'required|string|max:255',
            'correct_answer' => 'required|string|max:255',
            'options' => 'required', 
            'quize_id' => 'required', 

        ];
    }
    public function messages(): array
{
    return [
        'question.required' => 'The question field is required.',
        'question.string' => 'The question must be a valid string.',
        'question.max' => 'The question cannot exceed 255 characters.',
        'correct_answer.required' => 'The correct answer field is required.',
        'correct_answer.string' => 'The correct answer must be a valid string.',
        'correct_answer.max' => 'The correct answer cannot exceed 255 characters.',
        'options.required' => 'You must provide at least two options.',
        'quize_id.required' => 'The quiz ID is required.',
        
    ];
}

}
