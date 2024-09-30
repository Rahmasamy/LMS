<?php

namespace Database\Factories;

use App\Models\Instructor;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'category_name' => fake()->words(3, true), 
            'inst_id' => Instructor::factory(), // Generate an Instructor and use its ID
            'image_path' => $this->faker->imageUrl(640, 480, 'category'), // Random image URL
        ];
    }
}
