<?php

use App\Http\Controllers\API\InternalJenisMemberController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OpenAPI\JenisMember\JenisMemberController;

#contoh key tersedia
#0b9bcb584f005057d0b15269f728fcfc
#fa76210d693dccc65614c77cbbaa76f435e5b783187747d33ef1081cdb091486

Route::name("internal-client-api.")->middleware(['auth:api'])->group(function () {
    Route::get("jenis-member/pencarian", [InternalJenisMemberController::class, "search"]);
    Route::get("jenis-member", [InternalJenisMemberController::class, "index"]);
});
