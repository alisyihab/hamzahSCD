<?php

namespace App\Services;

use App\Models\Permission;
use Illuminate\Support\Facades\DB;
use phpseclib3\System\SSH\Agent;

class PermissionService
{
    private function EloquentData()
    {
        return Permission::orderBy('nama_grup', 'ASC');
    }

    public function mendapatkanSeluruhData()
    {
        return $this->EloquentData()->get();
    }


    public function mendapatkanSeluruhDataPaginate($paginate, $isCari = false)
    {
        if ($isCari) {
            return $this->mencariDataBerdasarkanKostum("nama_route", $isCari, $paginate);
        }
        return $this->EloquentData()->paginate($paginate);
    }


    public function mendapatkanSeluruhDataBelumTerpilih($role)
    {
        return $this->EloquentData()
            ->whereNotIn("route_url", DB::table("impl_role_permissions")
                ->where('fk_kd_role', $role)
                ->select("fk_kd_permission"));
    }

    public function mencariDataBerdasarkanKostum($nama_kolom, $request, $paginate)
    {
        return $this->EloquentData()->where($nama_kolom, "LIKE", '%' . $request . '%')->paginate($paginate);
    }

    public function mendapatkanDataBelumTerpilih($role)
    {
        return $this->mendapatkanSeluruhDataBelumTerpilih($role)->get();
    }

    public function mencariDataBerdasarkanKostumYangBelumTerpilih($nama_kolom, $request, $role)
    {
        return $this->mendapatkanSeluruhDataBelumTerpilih($role)
            ->where($nama_kolom, "LIKE", '%' . $request . '%')->get();
    }

    public function mendapatkanSatuData($id)
    {
        return Permission::findOrFail($id);
    }

    public function menghapusData($id)
    {
        $data = Permission::findOrFail($id)->delete();
        return $data;
    }
}
