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
        $category1 = Category::create([
            'category_name' => 'Devolpment',
            'image_path' => 'https://i.ytimg.com/vi/2OHbjep_WjQ/maxresdefault.jpg',
            'inst_id' => 1
        ]);
        $category2 = Category::create([
            'category_name' => 'It',
            'image_path' => 'https://i.ytimg.com/vi/l4G2MVgXFkw/maxresdefault.jpg',
            'inst_id' => 2
        ]);
        $category3 = Category::create([
            'category_name' => 'Front-end',
            'image_path' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
            'inst_id' => 2
        ]);
        $category4 = Category::create([
            'category_name' => 'Back-end',
            'image_path' => 'https://tse3.mm.bing.net/th?id=OIP.GxExK88wgr_8hbuqu4JfAAHaEK&pid=Api&P=0&h=220',
            'inst_id' => 1
        ]);
        $category5 = Category::create([
            'category_name' => 'Mobile App',
            'image_path' => 'https://tse3.mm.bing.net/th?id=OIP.GxExK88wgr_8hbuqu4JfAAHaEK&pid=Api&P=0&h=220',
            'inst_id' => 2
        ]);
    }
}
