<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizResult extends Model
{
    use HasFactory;
    public function Student()
    {
        return $this->hasMany(Student::class);
    }

    public function Quiz()
    {
        return $this->hasMany(Quiz::class);
    }
}
