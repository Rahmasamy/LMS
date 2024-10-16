<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $fillable=[ "phone","bio","user_id","role_id"];
    public function courses()
    {
        return $this->belongsToMany(Course::class, 'enrollments')
        ->withPivot('date_enrolled', 'progress', 'grade')
        ->withTimestamps();
    }
    public function Reviews()
    {
        return $this->hasMany(Review::class);
    }
    public function Enrollment()
    {
        return $this->hasMany(Enrollment::class, 'student_id');
    }
    public function Submission()
    {
        return $this->belongsTo(Submission::class);
    }
    public function user(){
        return $this->hasOne(User::class);
    }
}
