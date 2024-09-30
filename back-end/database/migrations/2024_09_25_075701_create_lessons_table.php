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
        if (Schema::hasTable('lessons')) {
            DB::table('lessons')->truncate(); // This will delete all records and reset the auto-increment counter
        }

        Schema::create('lessons', function (Blueprint $table) {
            $table->id();
            $table->string('title', 45);
            $table->text('descrption');
            $table->string('video_path', 45);
            $table->foreignId('section_id')->nullable()->constrained('sections')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lessons');
    }
};
