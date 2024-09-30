<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $category1=Category::create([
        	'category_name'=>'Angular Development',
        	'image_path'=>'https://previews.123rf.com/images/ionutparvu/ionutparvu1612/ionutparvu161201044/67602567-category-stamp-sign-text-word-logo-red.jpg'
        ]);
        $category2=Category::create([
        	'category_name'=>'React Development',
        	'image_path'=>'https://previews.123rf.com/images/ionutparvu/ionutparvu1612/ionutparvu161201044/67602567-category-stamp-sign-text-word-logo-red.jpg'
        ]);
        $category3=Category::create([
        	'category_name'=>'Laravel Development',
        	'image_path'=>'https://previews.123rf.com/images/ionutparvu/ionutparvu1612/ionutparvu161201044/67602567-category-stamp-sign-text-word-logo-red.jpg'
        ]);
        $category4=Category::create([
        	'category_name'=>'Vue Development',
        	'image_path'=>'https://previews.123rf.com/images/ionutparvu/ionutparvu1612/ionutparvu161201044/67602567-category-stamp-sign-text-word-logo-red.jpg'
        ]);
        $category5=Category::create([
        	'category_name'=>'Python Development',
        	'image_path'=>'https://previews.123rf.com/images/ionutparvu/ionutparvu1612/ionutparvu161201044/67602567-category-stamp-sign-text-word-logo-red.jpg'
        ]);
    }
}

