<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    public function Course(){
        return $this->belongsTo(Course::class);
    }
    public function Student(){
        return $this->belongsTo(Student::class);
    }
}
