<?php

namespace App\Services;

use App\Http\Controllers\Controller;
use App\Models\Role;

class RoleService extends Controller
{
    private AuditTrailService $auditTrailService;

    public function __construct(AuditTrailService $auditTrailService)
    {
        $this->auditTrailService = $auditTrailService;
    }

    private function EloquentData()
    {
        return Role::with('getCreator')->orderBy('created_at', "ASC");
    }

    public function mendapatkanSeluruhData()
    {
        return $this->EloquentData()->get();
    }

    public function mendapatkanSeluruhDataPaginate($paginate)
    {
        return $this->EloquentData()->paginate($paginate);
    }

    public function mencariDataBerdasarkanKostum($nama_kolom, $request, $paginate)
    {
        return $this->EloquentData()->where($nama_kolom, "ILIKE", "%" . $request . "%")->paginate($paginate);
    }

    public function mendapatkanSatuData($id)
    {
        return Role::with("getAllPermission")->findOrFail($id);
    }

    public function menyimpanData($request)
    {
        $model = new Role();
        $model->created_by =  $this->authGetKdUser();
        return $this->mengelolaData($model, $request);
    }

    public function memperbaruiData($request, $id)
    {
        $model = Role::findOrFail($id);
        $dataSebelumBerubah = $model->getOriginal();
        $response =  $this->mengelolaData($model, $request);
        $this->auditTrailService->inisialisasiAuditTrail("update", "Role", $model, $dataSebelumBerubah);
        return $response;
    }

    private  function mengelolaData($model, $request)
    {
        if ($request->nama_role) {
            $model->nama_role = $request->nama_role;
        }

        $model->save();
        return $model;
    }

    public function menghapusData($id)
    {
        $data = Role::findOrFail($id)->delete();
        return $data;
    }
}
