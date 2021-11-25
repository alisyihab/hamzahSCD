<?php

//Default System API

use App\Http\Controllers\API\AuditTrailController;
use App\Http\Controllers\API\AutentikasiController;
use App\Http\Controllers\API\KelolaRolePermissionController;
use App\Http\Controllers\API\KelolaUserController;
use App\Http\Controllers\API\PermissionController;
use App\Http\Controllers\API\RoleController;
use App\Http\Controllers\API\SidebarController;
use App\Http\Controllers\API\SubSidebarController;
use Illuminate\Support\Facades\Route;

Route::post("/login-app", [AutentikasiController::class, "loginDefault"])->name("app.login");


Route::middleware(['auth:api', "akses"])->group(function () {

    Route::get("/sidebar/pencarian", [SidebarController::class, "search"])->name('sidebar.search');
    Route::apiResources(['/sidebar' => SidebarController::class], [
        'only' => ["index", "create", "edit", "show", "store", "update", "destroy"]
    ]);

    Route::apiResources(['/role' => RoleController::class], [
        'only' => ["index", "show", "store", "update", "destroy"]
    ]);

    Route::apiResources(['/kelola-user' => KelolaUserController::class], [
        'only' => ["index", "create", "edit", "show", "store", "update", "destroy"]
    ]);

    Route::apiResources(['/permission' => PermissionController::class], [
        'only' => ["index",  "show", "destroy"]
    ]);


    Route::apiResources(['/subsidebar' => SubSidebarController::class], [
        'only' => ["index", "create", "edit", "show", "store", "update", "destroy"]
    ]);

    route::prefix("role-permission")->name("role-permission.")->group(function () {
        Route::get("{kd_role}", [KelolaRolePermissionController::class, "index"])->name('index');
        Route::get("{kd_role}/pencarian", [KelolaRolePermissionController::class, "search"])->name('search');
        Route::post("{kd_role}", [KelolaRolePermissionController::class, "store"])->name('store');
        Route::delete("{kd_impl_permission}", [KelolaRolePermissionController::class, "destroy"])->name('destroy');
    });

    Route::apiResources(['audit-trail' => AuditTrailController::class], [
        'only' => ["index",  "show"]
    ]);
});
