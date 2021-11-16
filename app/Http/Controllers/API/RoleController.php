<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\ResponseService;
use App\Services\RoleService;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    private RoleService $roleService;
    private ResponseService $response;

    public function __construct(RoleService $roleService, ResponseService $response)
    {
        $this->roleService = $roleService;
        $this->response = $response;
    }

    public function index()
    {

        $in_role = $this->roleService->mendapatkanSeluruhDataPaginate($this->paginate);
        return compact("in_role");
    }

    public function search(Request $request)
    {
        $in_role = $this->roleService->mencariDataBerdasarkanKostum("nama_role", $request->cari, $this->paginate);
        return compact("in_role");
    }

    public function show($id)
    {
        $in_role = $this->roleService->mendapatkanSatuData($id);
        return compact("in_role");
    }

    public function create()
    {
        return null;
    }

    public function edit()
    {
        return null;
    }

    public function store(Request $request)
    {
        return $this->response->menyimpanData($this->roleService->menyimpanData($request));
    }

    public function update(Request $request, $id)
    {
        return $this->response
            ->updateData($this->roleService->memperbaruiData($request, $id));
    }

    public function destroy($id)
    {
        $this->roleService->menghapusDatamendapatkanSeluruhData($id);
        return $this->response->menghapusData($id);
    }
}
