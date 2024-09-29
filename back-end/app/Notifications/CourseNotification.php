<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CourseNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    private $course_id;
    private $created_by;
    public function __construct($course_id,$created_by)
    {
        //
        $this->course_id=$course_id;
        $this->created_by=$created_by;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['database'];
    
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
            'message' => 'You have new Course!',
            "course_id"=> $this->course_id,
            "created_by"=> $this->created_by
        ];
    }
}
