<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentRequest extends FormRequest
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
            "first_name" => "required|string|max:10|alpha", 
            "last_name" => "required|string|max:15|alpha", 
            "email" => "required|email|max:255|email", 
            "phone" => "required|string|regex:/^[0-9]{10,15}$/", 
            "password" => [
                "required",
                "string",
                "min:8", 
                "regex:/[a-z]/", 
                "regex:/[A-Z]/", 
                "regex:/[0-9]/", 
                "regex:/[@$!%*?&#]/" 
            ]
        ];
    }
    public function messages()
{
    return [
        // First Name
        "first_name.required" => "The first name is required.",
        "first_name.max" => "The first name must not exceed 10 characters.",
        "first_name.alpha" => "The first name must only contain letters.",
        
        // Last Name
        "last_name.required" => "The last name is required.",
        "last_name.max" => "The last name must not exceed 15 characters.",
        "last_name.alpha" => "The last name must only contain letters.",
        
        // Email
        "email.required" => "The email address is required.",
        "email.email" => "Please provide a valid email address.",
        "email.max" => "The email address must not exceed 255 characters.",
        "email.unique" => "This email address is already registered.",
        
        // Phone
        "phone.required" => "The phone number is required.",
        "phone.regex" => "The phone number must be a valid number with 10-15 digits.",
        
        // Password
        "password.required" => "A password is required.",
        "password.min" => "The password must be at least 8 characters.",
        "password.regex" => [
            "The password must include at least one lowercase letter.",
            "The password must include at least one uppercase letter.",
            "The password must include at least one number.",
            "The password must include at least one special character (@, $, !, %, *, ?, &, #).",
        ],
    ];
}
}
