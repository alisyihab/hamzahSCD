<?php

namespace App\Http\Controllers;

use App\Actions\GetRolePermission;
use Illuminate\Support\Facades\Auth;

class HalamanController extends Controller
{

    private GetRolePermission $getRolePermission;

    public function __construct(GetRolePermission $getRolePermission)
    {
        $this->getRolePermission = $getRolePermission;
    }

    public function __invoke()
    {
        $in_permission = [];
        $in_sidebars = [];
        if (Auth::check()) {
            $permission = $this->getRolePermission->mendapatkanAksesAplikasi();
            $in_sidebars = $permission[0];
            $in_permission = $permission[1];
        }

        return view("layouts.app", compact("in_permission", "in_sidebars"));
    }
}
