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
        return $this->belongsToMany(Course::class, 'enrollments'); // use 'enrollments' as the pivot table
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
}
