<?php

namespace App\Services;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class KelolaUserService extends Controller
{
    private AuditTrailService $auditTrailService;

    public function __construct(AuditTrailService $auditTrailService)
    {
        $this->auditTrailService = $auditTrailService;
    }

    private function EloquentDataAktif()
    {
        return User::with("getRole")->orderBy('created_at', 'DESC');
    }

    private function EloquentData()
    {
        return User::orderBy('created_at', 'DESC');
    }

    private function EloquentDataNonaktif()
    {
        return User::orderBy('created_at', 'DESC');
    }

    public function mendapatkanSeluruhData()
    {
        return $this->EloquentDataAktif()->get();
    }

    public function mendapatkanSeluruhDataPaginate($paginate)
    {
        return $this->EloquentDataAktif()->paginate($paginate);
    }

    public function mencariDataBerdasarkanKostum($nama_kolom, $request, $paginate)
    {
        return $this->EloquentDataAktif()->where($nama_kolom, "ILIKE", '%' . $request . '%')->paginate($paginate);
    }

    public function mendapatkanSatuData($id)
    {
        return User::findOrFail($id);
    }

    public function menyimpanData($request)
    {
        $model = new User();
        $model->kd_user = $this->get_primaryKey(101);
        return $this->mengelolaData($model, $request);
    }

    public function memperbaruiData($request, $id)
    {
        $model = User::findOrFail($id);
        $dataSebelumBerubah = $model->getOriginal();
        $dataUserTerbaru = $this->mengelolaData($model, $request);
        $this->auditTrailService->inisialisasiAuditTrail("update", "User", $model, $dataSebelumBerubah);
        return $dataUserTerbaru;
    }

    private function mengelolaData($model, $request)
    {

        if ($request->nama) {
            $model->nama = $request->nama;
        }
        if ($request->email) {
            $model->email = $request->email;
        }
        if ($request->username) {
            $model->username = $request->username;
        }
        if ($request->role) {
            $model->role = $request->role;
        }
        if ($request->password) {
            $model->password =  Hash::make($request->password);
        }

        $model->save();

        return $model;
    }

    public function menghapusData($id)
    {
        $data = User::findOrFail($id)->delete();
        return $data;
    }
}
