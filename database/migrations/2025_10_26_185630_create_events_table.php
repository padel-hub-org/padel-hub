<?php

use App\Models\Event;
use App\Models\Player;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->dateTime('starts_at');
            $table->integer('court_count');
            $table->dateTime('ended_at')->nullable();
            $table->timestamps();
        });

        Schema::create('event_player', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Event::class)->index();
            $table->foreignIdFor(Player::class)->index();
            $table->integer('event_rating');
            $table->dateTime('disabled_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
        Schema::dropIfExists('event_player');
    }
};
