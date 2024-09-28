<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\CourseNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    //
    public function getNotifications(Request $request)
    {
        $user = auth()->user();
        $notifications = $user->notifications; // or $user->unreadNotifications;
    
        return response()->json([
            'notifications' => $notifications,
        ]);
    }
    public function getUnreadNotifications(Request $request)
{
    $user = auth()->user(); // or retrieve the user by ID

    return response()->json([
        'success' => true,
        'unread_notifications' => $user->unreadNotifications,
    ]);
}
public function markNotificationAsRead(Request $request, $notificationId)
{
    $user = auth()->user(); // or retrieve the user by ID

    $notification = $user->notifications->find($notificationId);

    if ($notification) {
        $notification->markAsRead();

        return response()->json([
            'success' => true,
            'message' => 'Notification marked as read.',
        ]);
    }

    return response()->json([
        'success' => false,
        'message' => 'Notification not found.',
    ], 404);
}
public function getNotificationDetails($notificationId)
{
    $user = auth()->user(); // or retrieve the user by ID

    $notification = $user->notifications->find($notificationId);

    if ($notification) {
        return response()->json([
            'success' => true,
            'notification' => [
                'id' => $notification->id,
                'data' => $notification->data,  // This contains your notification data
                'read_at' => $notification->read_at,
                'created_at' => $notification->created_at,
            ],
        ]);
    }

    return response()->json([
        'success' => false,
        'message' => 'Notification not found.',
    ], 404);
}
public function markAsRead($id)
{
    $user = Auth::user();

    $notification = $user->notifications->find($id);

    if ($notification) {
        $notification->markAsRead();

        return response()->json([
            'success' => true,
            'message' => 'Notification marked as read.',
        ]);
    }

    return response()->json([
        'success' => false,
        'message' => 'Notification not found.',
    ], 404);
}


}
