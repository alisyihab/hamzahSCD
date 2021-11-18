<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKonsumerKeysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('konsumer_keys', function (Blueprint $table) {
            $table->increments("kd_konsumer_key");
            $table->string("app_name",50);
            $table->mediumText("client_id");
            $table->mediumText("client_secret");
            $table->integer("created_by")->index();
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
        Schema::dropIfExists('konsumer_keys');
    }
}
