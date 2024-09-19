<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assigment extends Model
{
    use HasFactory;
    protected $table = '_assigments';
    public function Course()
    {
        return $this->belongsTo(Course::class);
    }
    public function Submission()
    {
        return $this->belongsTo(Submission::class);
    }
}
