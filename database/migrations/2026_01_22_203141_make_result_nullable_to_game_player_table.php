<?php

use App\Enums\Result;
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
        Schema::table('game_player', function (Blueprint $table) {
            // result is enum in laravel, but varchar in database, so we need to change it via string
            $table->string('result')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('game_player', function (Blueprint $table) {
            $table->string('result')->nullable(false)->change();
        });
    }
};
