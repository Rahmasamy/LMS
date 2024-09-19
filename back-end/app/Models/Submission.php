<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Submission extends Model
{
    use HasFactory;
    public function Assigment()
    {
        return $this->hasMany(Assigment::class);
    }
    public function Student()
    {
        return $this->hasMany(Student::class);
    }
}
