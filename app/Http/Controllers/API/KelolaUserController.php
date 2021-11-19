<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\KelolaUserService;
use App\Services\ResponseService;
use App\Services\RoleService;
use Illuminate\Http\Request;

class KelolaUserController extends Controller
{

    private KelolaUserService $kelolaUserService;
    private RoleService $roleService;
    private ResponseService $responseService;


    public function __construct(KelolaUserService $kelolaUserService, ResponseService $responseService, RoleService $roleService)
    {
        $this->kelolaUserService = $kelolaUserService;
        $this->responseService = $responseService;
        $this->roleService = $roleService;
    }


    public function index(Request $request)
    {
        $in_kelola_user =  $this->kelolaUserService->mendapatkanSeluruhDataPaginate(
            paginate: $this->paginate,
            isCari: $request->cari
        );
        return compact("in_kelola_user");
    }

    public function store(Request $request)
    {
        return $this->responseService->menyimpanData($this->kelolaUserService->menyimpanData($request));
    }

    public function create()
    {
        $in_role  = $this->roleService->mendapatkanSeluruhData();
        return compact("in_role");
    }

    public function edit($id)
    {
        $in_role  = $this->roleService->mendapatkanSeluruhData();
        $in_kelola_user  = $this->kelolaUserService->mendapatkanSatuData($id);
        return compact("in_kelola_user", "in_role");
    }

    public function show($id)
    {
        $in_kelola_user = $this->kelolaUserService->mendapatkanSatuData($id);
        return compact("in_kelola_user");
    }

    public function update(Request $request, $id)
    {
        return $this->responseService->updateData($this->kelolaUserService->memperbaruiData($request, $id));
    }

    public function destroy($id)
    {
        $this->kelolaUserService->menghapusData($id);
        return $this->responseService->menghapusData($id);
    }
}
