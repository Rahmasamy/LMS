<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    use HasFactory;
    protected $fillable=[
        "id",	"course_id",	"student_id",	"issue_date",	"created_at",	"updated_at"	
    ];

    public function Course(){
        return $this->belongsTo(Course::class);
    }
}
