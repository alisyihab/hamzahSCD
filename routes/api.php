<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\JenisMemberController;
use App\Http\Controllers\API\KostumerMemberController;

Route::middleware(['auth:api', "akses"])->group(function () {
    Route::resources(["jenis-member" => JenisMemberController::class]);
});


Route::resources(["kostumer-member" => KostumerMemberController::class]);






// JANGAN LUPA amr:getAllRoutes setiap nambahin route
// JANGAN LUPA KASIH ROUTE NAME AS JIKA ROUTE BUKAN RESOURCE
// NAMA ROUTE YANG HANYA AKAN DI TAMPILKAN PADA MANAJEMEN SIDEBAR HANYA YANG 
//   INDEX DAN CREATE MAKA HATI HATI DALAM MEMBUAT ROUTE  
