<?php

use App\Http\Controllers\API\AuditTrailController;
use App\Http\Controllers\API\AutentikasiController;
use App\Http\Controllers\API\KelolaRolePermissionController;
use App\Http\Controllers\API\KelolaUserController;
use App\Http\Controllers\API\PermissionController;
use App\Http\Controllers\API\RoleController;
use App\Http\Controllers\API\SidebarController;
use App\Http\Controllers\API\SubSidebarController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AplikasiController;


Route::post("/login-app", [AutentikasiController::class, "loginDefault"])->name("app.login");


Route::middleware(['auth:api', "akses"])->group(function () {

    Route::get("/sidebar/pencarian", [SidebarController::class, "search"])->name('sidebar.search');
    Route::apiResources(['/sidebar' => SidebarController::class], [
        'only' => ["index", "create", "edit", "show", "store", "update", "destroy"]
    ]);

    Route::get("/role/pencarian", [RoleController::class, "search"])->name('role.search');
    Route::apiResources(['/role' => RoleController::class], [
        'only' => ["index", "show", "store", "update", "destroy"]
    ]);

    Route::get("/kelola-user/pencarian", [KelolaUserController::class, "search"])->name('kelola-user.search');
    Route::apiResources(['/kelola-user' => KelolaUserController::class], [
        'only' => ["index", "create", "edit", "show", "store", "update", "destroy"]
    ]);

    Route::get("/permission/pencarian", [PermissionController::class, "search"])->name('permission.search');
    Route::apiResources(['/permission' => PermissionController::class], [
        'only' => ["index",  "show", "destroy"]
    ]);


    Route::get("/subsidebar/pencarian", [SubSidebarController::class, "search"])->name('subsidebar.search');
    Route::apiResources(['/subsidebar' => SubSidebarController::class], [
        'only' => ["index", "create", "edit", "show", "store", "update", "destroy"]
    ]);



    route::prefix("role-permission")->name("role-permission.")->group(function () {
        Route::get("{kd_role}", [KelolaRolePermissionController::class, "index"])->name('index');
        Route::get("{kd_role}/pencarian", [KelolaRolePermissionController::class, "search"])->name('search');
        Route::post("{kd_role}", [KelolaRolePermissionController::class, "store"])->name('store');
        Route::delete("{kd_impl_permission}", [KelolaRolePermissionController::class, "destroy"])->name('destroy');
    });

    Route::get("/audit-trail/pencarian", [AuditTrailController::class, "search"])->name('audit-trail.search');
    Route::apiResources(['audit-trail' => AuditTrailController::class], [
        'only' => ["index",  "show"]
    ]);
});


// JANGAN LUPA amr:getAllRoutes setiap nambahin route
// JANGAN LUPA KASIH ROUTE NAME AS JIKA ROUTE BUKAN RESOURCE
// NAMA ROUTE YANG HANYA AKAN DI TAMPILKAN PADA MANAJEMEN SIDEBAR HANYA YANG 
//   INDEX DAN CREATE MAKA HATI HATI DALAM MEMBUAT ROUTE  
