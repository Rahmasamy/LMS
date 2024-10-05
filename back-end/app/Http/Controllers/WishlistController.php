<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class WishlistController extends Controller
{
    //
    public function viewWishlist()
{
    $wishlistItems = Wishlist::with('course')->where('user_id', Auth::id())->get();

    return response()->json($wishlistItems);
}
    public function addToWishlist(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id', 
        ]);

        
        Wishlist::updateOrCreate(
            [
                'user_id' => Auth::id(),
                'course_id' => $request->course_id,
            ]
        );

        return response()->json(['message' => 'Course added to wishlist!']);
    }
}
