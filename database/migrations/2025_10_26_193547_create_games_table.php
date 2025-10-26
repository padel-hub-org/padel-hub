<?php

use App\Enums\Result;
use App\Models\Event;
use App\Models\Game;
use App\Models\Player;
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
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Event::class)->index();
            $table->integer('court');
            $table->integer('round');
            $table->timestamps();
        });

        Schema::create('game_player', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Game::class)->index();
            $table->foreignIdFor(Player::class)->index();
            $table->foreignIdFor(Player::class, 'partner_id')->index();
            $table->integer('previous_rating');
            $table->integer('points');
            $table->enum(Result::class, Result::cases());
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('games');
        Schema::dropIfExists('game_player');
    }
};
