<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable=["category_name","inst_id","image_path"];
    public function Courses(){
        return $this->hasMany(Course::class);
    }
}
