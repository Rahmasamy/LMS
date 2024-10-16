<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Instructor extends Model
{
    use HasFactory;
    protected $fillable=["user_id","rating","role_id","describtion"];
    public function Courses(){
        return $this->hasMany(Course::class);
    }
    public function user(){
        return $this->hasOne(User::class);
    }
    public function review(){
        return $this->hasOne(Review::class);
    }
}
