<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHistoryPerHitClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('history_per_hit_clients', function (Blueprint $table) {
            $table->id();
            $table->mediumText("client_app_id");
            $table->mediumText("path");
            $table->mediumText("ip_address");
            $table->string("method", 10);
            $table->string('browserName', 75);
            $table->string('browserEngine', 75);
            $table->string('platformName', 75);
            $table->string('platformFamily', 75);
            $table->string('deviceFamily', 75);
            $table->boolean('isBot');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('history_per_hit_clients');
    }
}
