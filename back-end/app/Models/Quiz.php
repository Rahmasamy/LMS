<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;
    protected $table = 'quizes';
    protected $fillable=["id","course_id","title","total_marks","duration"];
    public function Course()
    {
        return $this->belongsTo(Course::class, 'course_id');
    }
    public function QuizResult()
    {
        return $this->belongsTo(QuizResult::class);
    }
}
