<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\PermissionService;
use App\Services\ResponseService;
use App\Services\SubsidebarService;
use Illuminate\Http\Request;

class SubSidebarController extends Controller
{

    private SubsidebarService $subsidebarService;
    private ResponseService $responseService;
    private PermissionService $permissionService;

    public function __construct(
        SubsidebarService $subsidebarService,
        ResponseService $responseService,
        PermissionService $permissionService
    ) {
        $this->subsidebarService = $subsidebarService;
        $this->responseService = $responseService;
        $this->permissionService = $permissionService;
    }

    public function index()
    {
        $in_sub_sidebar = $this->subsidebarService->mendapatkanSeluruhData();
        return compact("in_sub_sidebar");
    }


    public function show($id)
    {
        $in_sub_sidebar = $this->subsidebarService->mendapatkanSatuData($id);
        return compact("in_sub_sidebar");
    }

    public function create()
    {
        $in_permission = $this->permissionService->mendapatkanSeluruhData();
        return compact('in_permission');
    }

    public function store(Request $request)
    {
        return $this->responseService->menyimpanData(
            $this->subsidebarService->menyimpanData($request)
        );
    }
    public function edit($id)
    {
        $in_permission = $this->permissionService->mendapatkanSeluruhData();
        $in_sub_sidebar = $this->subsidebarService->mendapatkanSatuData($id);
        return compact("in_sub_sidebar", "in_permission");
    }

    public function update(Request $request, $id)
    {
        return $this->responseService->updateData(
            $this->subsidebarService->memperbaruiData($request, $id)
        );
    }

    public function destroy($id)
    {
        $this->subsidebarService->menghapusData($id);
        return $this->responseService->menghapusData($id);
    }
}
