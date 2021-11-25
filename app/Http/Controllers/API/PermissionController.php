<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\PermissionService;
use App\Services\ResponseService;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    private PermissionService $permissionService;
    private ResponseService $responseService;

    public function __construct(PermissionService $permissionService, ResponseService $responseService)
    {
        $this->permissionService = $permissionService;
        $this->responseService = $responseService;
    }

    public function index(Request $request)
    {
        $in_permission = $this->permissionService->mendapatkanSeluruhDataPaginate(
            paginate: $this->paginate,
            isCari: $request->cari
        );

        return compact("in_permission");
    }

    // public function search(Request $request)
    // {
    //     $in_permission = $this->permissionService->mencariDataBerdasarkanKostum("nama_route", $request->cari);
    //     return compact("in_permission");
    // }

    public function destroy($id)
    {
        $this->permissionService->menghapusData($id);
        return $this->responseService->menghapusData($id);
    }
}
