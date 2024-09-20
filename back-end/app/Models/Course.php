<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $fillable=[ "id",'title','description','category_id','start_date', 'end_date','status','instructor_id'];
    // will change as foregin key when we will create admin,super admin table 
    public function students()
    {
        return $this->belongsToMany(Student::class);
    }
    public function Sections(){
        return $this->hasMany(Section::class);
    }
    public function Reviews(){
        return $this->hasMany(Review::class);
    }
    public function Quizes(){
        return $this->hasMany(Quiz::class, 'course_id');
    }
    public function Assigments(){
        return $this->hasMany(Assigment::class);
    }
    public function Certificats(){
        return $this->hasMany(Certificate::class);
    }
    public function Category(){
        return $this->belongsTo(Category::class);
    }
    
}
