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
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'image_path' => ['mimes:png,jpg,jpeg','max:10048'],
        ]);
    
        
        $newUserImage = time() . '-' . $request->name . '.' . $request->image_path->extension();

        echo($newUserImage);
        $request->image_path->move(public_path('images'), $newUserImage);
    
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'image_path' => $newUserImage
        ]);
    
        
        event(new Registered($user));
    
        
        Auth::login($user);
        $token = $user->createToken('api-token');
    
        
        return response()->json([
            'user' => $user,
            'token' => $token->plainTextToken
        ]);
    }
    
}
