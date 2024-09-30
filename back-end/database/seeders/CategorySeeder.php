<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
             $category1=Category::create([
            'category_name'=>'Angular Development',
            'image_path'=>'https://i.ytimg.com/vi/2OHbjep_WjQ/maxresdefault.jpg'
           ]);
           $category2=Category::create([
            'category_name'=>'React Development',
            'image_path'=>'https://i.ytimg.com/vi/l4G2MVgXFkw/maxresdefault.jpg'
           ]);
           $category3=Category::create([
            'category_name'=>'Laravel Development',
            'image_path'=>'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png'
           ]);
           $category4=Category::create([
            'category_name'=>'Vue Development',
            'image_path'=>'https://tse3.mm.bing.net/th?id=OIP.GxExK88wgr_8hbuqu4JfAAHaEK&pid=Api&P=0&h=220'
           ]);
           $category5=Category::create([
            'category_name'=>'Python Development',
            'image_path'=>'https://tse3.mm.bing.net/th?id=OIP.GxExK88wgr_8hbuqu4JfAAHaEK&pid=Api&P=0&h=220'
           ]);
    }
}
