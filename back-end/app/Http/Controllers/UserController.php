<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use Illuminate\Http\Response;

class UserController extends Controller
{
    public function update(Request $request)
    {
        $user = $request->user(); 

        
        $validated = $request->validate([
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'phone_number' => ['required', 'string', 'max:255'],
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $user->id, 
            'password' => 'nullable|min:8|confirmed', 
        ]);

     
        $user->first_name =$validated['first_name'];
        $user->last_name = $validated['last_name'];
        $user->phone_number=$validated['phone_number'];
        $user->email = $validated['email'];

        
        if ($request->filled('password')) {
            $user->password = Hash::make($validated['password']);
        }

        $user->save(); 

        
        return response()->json([
            'message' => 'User updated successfully.',
            'user' => $user
        ], 200);
    }
    public function getUser($id)
    {
       
        $user = User::find($id);

      
        if (!$user) {
            return response()->json([
                'message' => 'User not found'
            ], status: Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            'message' => 'User retrieved successfully',
            'data' => $user
        ], Response::HTTP_OK);
    }
    public function deleteUser($id)
{
    
    $user = User::find($id);

    if ($user) {
        $user->delete();

        return response()->json(['message' => 'User deleted successfully'], 200);
    } else {
        return response()->json(['message' => 'User not found'], 404);
    }
}
   

}
