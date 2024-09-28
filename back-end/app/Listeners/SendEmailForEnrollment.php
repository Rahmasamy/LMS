<?php

namespace App\Listeners;

use App\Events\EnrollCourse;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendEmailForEnrollment
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(EnrollCourse $event): void
    {
        //
    }
}
