<?php

namespace App\Services;

use App\Http\Controllers\Controller;
use App\Models\AuditTrail;

class AuditTrailService extends Controller
{

    private function EloquentData()
    {
        return AuditTrail::with("getCreator")->orderBy('created_at', 'DESC');
    }


    public function inisialisasiAuditTrail($jenis, $nama_form, $model, $dataBeforeUpdated, $masking = false)
    {
        $data = [];
        $data["nama_form"] = $nama_form;
        $data["jenis_kegiatan"] = $jenis;

        foreach ($model->getChanges() as $key => $perubahanData) {
            if ($key != "updated_at") {
                $data["nama_field"][] = $key;
                $data["value_sebelumnya"][] = $dataBeforeUpdated[$key];
                $data["value_terbaru"][] = $masking == false ? $perubahanData : $masking;
            }
        }

        $this->menyimpanData($data);
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
        return $this->EloquentData()->where($nama_kolom, 'ILIKE', '%' . $request . '%')->paginate($paginate);
    }

    public function mendapatkanSatuData($id)
    {
        return AuditTrail::findOrFail($id);
    }

    public function menyimpanData($request)
    {
        $model = new AuditTrail();
        return $this->mengelolaData($model, $request);
    }

    public function memperbaruiData($request, $id)
    {
        $model = AuditTrail::findOrFail($id);
        $this->mengelolaData($model, $request);
    }

    private function mengelolaData($model, $request)
    {
        $model->fk_kd_user = $this->authGetKdUser();
        $model->nama_form = $request["nama_form"];
        $model->nama_field = json_encode($request["nama_field"] ??  ["(Tidak merubah apa apa )"]);
        $model->value_sebelumnya = json_encode($request["value_sebelumnya"] ??  ["(Tidak merubah apa apa )"]);
        $model->value_terbaru = json_encode($request["value_terbaru"] ??  ["(Tidak merubah apa apa )"]);
        $model->jenis_kegiatan = $request["jenis_kegiatan"];
        $model->save();
        return $model;
    }

    public function menghapusData($id)
    {
        $data = AuditTrail::findOrFail($id)->delete();
        return $data;
    }
}
