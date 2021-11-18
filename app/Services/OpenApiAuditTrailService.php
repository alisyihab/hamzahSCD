<?php

namespace App\Services;

use App\Http\Controllers\Controller;
use App\Models\OpenApiAuditTrail;
use App\Services\AuditTrailService;

class OpenApiAuditTrailService extends Controller
{

    private AuditTrailService $auditTrailService;

    public function __construct(AuditTrailService $auditTrailService)
    {
        $this->auditTrailService = $auditTrailService;
    }

    private function EloquentData()
    {
        return OpenApiAuditTrail::with('getAppName')->orderBy('created_at', "DESC");
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
        return $this->EloquentData()->where($nama_kolom, 'ILIKE', "%" . $request . "%")->paginate($paginate);
    }

    public function mendapatkanSatuData($id)
    {
        return OpenApiAuditTrail::findOrFail($id);
    }

    public function inisialisasiOpenAuditTrail($jenis, $nama_form, $model, $dataBeforeUpdated, $client_id, $masking = false)
    {

        $data = [];
        $data["nama_form"] = $nama_form;
        $data["jenis_kegiatan"] = $jenis;
        $data["client_app_id"] = $client_id;

        foreach ($model->getChanges() as $key => $perubahanData) {
            if ($key != "updated_at") {
                $data["nama_field"][] = $key;
                $data["value_sebelumnya"][] = $dataBeforeUpdated[$key];
                $data["value_terbaru"][] = $masking == false ? $perubahanData : $masking;
            }
        }

        $this->menyimpanData($data);
    }

    public function menyimpanData($request)
    {
        $model = new OpenApiAuditTrail();
        $model->client_app_id =  $request["client_app_id"];
        return $this->mengelolaData($model, $request);
    }


    private  function mengelolaData($model, $request)
    {
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
        $data = OpenApiAuditTrail::findOrFail($id)->delete();
        return $data;
    }
}
