<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $fillable = ['quize_id', 'question', 'correct_answer', 'options'];
    protected $casts = [
        'options' => 'array', 
    ];

    public function quiz()
    {
        return $this->belongsTo(Quiz::class, 'quize_id');
    }
}
