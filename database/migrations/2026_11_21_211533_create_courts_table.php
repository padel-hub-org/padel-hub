<?php

use App\Models\Court;
use App\Models\Event;
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
        Schema::create('courts', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->foreignIdFor(Event::class);
            $table->timestamps();
        });

        foreach (Event::all() as $event) {
            $courts = [];
            for ($i = 0; $i < $event->getAttribute('court_count'); $i++) {
                $courts[] = new Court;
            }
            $event->courts()->saveMany($courts);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courts');
    }
};
