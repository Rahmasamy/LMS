<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;
    protected $table = 'quizes';

    protected $fillable = [
        'course_id',
        'title',
        'total_marks',
        'duration',
        'description',
        'questions_count',
        'is_active',
    ];
    public function Course()
    {
        return $this->belongsTo(Course::class, 'course_id');
    }
    public function QuizResult()
    {
        return $this->belongsTo(QuizResult::class);
    }

    public function questions()
    {
        return $this->hasMany(Question::class, 'quize_id');
    }
}
