<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (Schema::hasTable('courses')) {
            DB::table(table: 'courses')->truncate();
        }

        Schema::create('courses', callback: function (Blueprint $table) {
            $table->id()->truncate();
            $table->string('title', 40);
            $table->string('description');
            $table->string('start_date', 25)->nullable();
            $table->string('end_date', 25)->nullable();
            $table->string('status', 1)->default(1);
            $table->string('level', 50)->nullable();
            $table->unsignedBigInteger('category_id')->default(1);
            $table->unsignedBigInteger('instructor_id');
            $table->text('benefits');
            $table->text('requirements');
            $table->string('plan');
            $table->unsignedBigInteger('price')->default(0);
            $table->string('durations');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->foreign('instructor_id')->references('id')->on('instructors')->onDelete('cascade');
            $table->string('image_path')->default('https://media.licdn.com/dms/image/D4D12AQH5WGa2Z9Ieiw/article-cover_image-shrink_720_1280/0/1690880909231?e=2147483647&v=beta&t=N0FOuFcdoa21wLDsvF0-Ydx4gQXtZ4RqxcptVQRb9vI');
            $table->decimal('rating', 8, 2)->nullable(); // Assuming rating is a decimal value, adjust precision and scale as needed
            $table->timestamps();


        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
