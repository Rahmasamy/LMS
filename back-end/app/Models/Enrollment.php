<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enrollment extends Model
{
    use HasFactory;
    protected $fillable =['course_id','student_id','payment_status','date_enrolled', 'progress', 'grade'];
    
    
    public function Studend()
    {
        $this->belongsTo(Enrollment::class);
    }
}
