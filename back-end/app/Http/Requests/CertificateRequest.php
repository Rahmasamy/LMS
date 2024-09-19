<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class CertificateRequest extends FormRequest
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

              "course_id"=>	"required|max:15",
              "student_id"=>"required|max:15",
              "issue_date"=>"required|date"
        ];
    }
    public function messages()
    {
        return [
            'category_name.required' => 'The category is required.', 
        ];
    }
  
}
