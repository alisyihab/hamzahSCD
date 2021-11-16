<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\PermissionService;
use App\Services\ResponseService;
use App\Services\SidebarService;
use Illuminate\Http\Request;

class SidebarController extends Controller
{
    private SidebarService $sidebarService;
    private ResponseService $response;

    public function __construct(
        SidebarService $sidebarService,
        ResponseService $response,
        PermissionService $permissionService
    ) {
        $this->sidebarService = $sidebarService;
        $this->response = $response;
        $this->permissionService = $permissionService;
    }

    public function index()
    {
        $in_sidebar = $this->sidebarService->mendapatkanSeluruhDataDenganRelasiSubSidebar();
        return compact("in_sidebar");
    }

    public function search(Request $request)
    {
        $in_sidebar = $this->sidebarService->mencariDataBerdasarkanKostumNonPaginate("nama_sidebar", $request->cari);
        return compact("in_sidebar");
    }

    public function edit($id)
    {
        $in_sidebar = $this->sidebarService->mendapatkanSatuDataDenganRelasiSubsidebar($id);
        return compact("in_sidebar");
    }

    public function create()
    {
        return null;
    }

    public function show($id)
    {
        $in_sidebar = $this->sidebarService->mendapatkanSatuDataDenganRelasiSubsidebar($id);
        return compact("in_sidebar");
    }

    public function store(Request $request)
    {
        return $this->response->menyimpanData($this->sidebarService->menyimpanData($request));
    }

    public function update(Request $request, $id)
    {
        return $this->response->updateData($this->sidebarService->memperbaruiData($request, $id));
    }

    public function destroy($id)
    {
        $this->sidebarService->menghapusData($id);
        return $this->response->menghapusData($id);
    }
}
