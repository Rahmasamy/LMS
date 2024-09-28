<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

use App\Mail\TestMail;
use App\Mail\WelcomeMail;
use Exception;
use App\Models\User;


class AuthenticatedSessionController extends Controller
{

    public function store(LoginRequest $request): JsonResponse{


        // Check if the user exists
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'error' => "This email doesn't exist."
            ], 404);
        }



        // Check if the password is correct
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'error' => "Wrong password."
            ], 401); 
        }



        $user->tokens()->delete();

       

        // Create a new token for the user
        $token = $user->createToken('api-token');

        // Return the response with user details and token
        return response()->json([
            'user' => $user,
            'roles' => $user->getRoleNames(),
            'permissions' => $user->getAllPermissions(),
            'token' => $token->plainTextToken,
        ], 200);

    }


    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
