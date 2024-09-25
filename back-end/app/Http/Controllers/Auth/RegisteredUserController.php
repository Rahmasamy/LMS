<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
     public function store(Request $request): JsonResponse
    {

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'image_path' => ['nullable', 'mimes:png,jpg,jpeg', 'max:10048'],  // Allow image to be nullable
        ]);
    

        if ($request->hasFile('image_path')) {
            $newUserImage = time() . '-' . $request->name . '.' . $request->image_path->extension();
            $request->image_path->move(public_path('images'), $newUserImage);
        } else {
            $newUserImage = 'default.jpg'; 
        }
    

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'image_path' => $newUserImage,
        ]);
    
        event(new Registered($user));
    
        Auth::login($user);
    
        $token = $user->createToken('api-token');
        
        return response()->json([
            'user' => $user,
            'token' => $token->plainTextToken,
        ]);
    }
    
}
