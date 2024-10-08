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
        Schema::table('quizes', function (Blueprint $table) {
            //
            $table->string('description')->nullable();
            $table->integer('questions_count')->default(0);
            $table->boolean('is_active')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('quizes', function (Blueprint $table) {
            //
            $table->dropColumn(['description', 'questions_count', 'is_active']);
        });
    }
};
