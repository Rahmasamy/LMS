<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('category_name');
            $table->foreignId('inst_id')->default(1)->constrained('instructors')->onDelete('cascade');
            $table->string('image_path')->default('https://previews.123rf.com/images/ionutparvu/ionutparvu1612/ionutparvu161201044/67602567-category-stamp-sign-text-word-logo-red.jpg');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
