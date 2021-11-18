<?php

namespace App\Services;

use App\Http\Controllers\Controller;
use App\Models\HistoryPerHitClient;
use App\Services\AuditTrailService;

class HistoryPerHitClientService extends Controller
{

    private AuditTrailService $auditTrailService;

    public function __construct(AuditTrailService $auditTrailService)
    {
        $this->auditTrailService = $auditTrailService;
    }

    private function EloquentData()
    {
        return HistoryPerHitClient::with('getCreator')->orderBy('created_at', "DESC");
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
        return HistoryPerHitClient::findOrFail($id);
    }

    public function menyimpanData($request)
    {
        $model = new HistoryPerHitClient();
        return $this->mengelolaData($model, $request);
    }

    public function memperbaruiData($request, $id)
    {
        $model = HistoryPerHitClient::findOrFail($id);
        $dataSebelumBerubah = $model->getOriginal();
        $response =  $this->mengelolaData($model, $request);
        $this->auditTrailService->inisialisasiAuditTrail("update", "HistoryPerHitClient", $model, $dataSebelumBerubah);
        return $response;
    }

    private  function mengelolaData($model, $request)
    {
        $model->client_app_id = $request["client_app_id"];
        $model->path = $request["path"];
        $model->ip_address = $request["ip_address"];
        $model->method = $request["method"];
        $model->browserName = $request["browserName"];
        $model->browserEngine = $request["browserEngine"];
        $model->platformName = $request["platformName"];
        $model->platformFamily = $request["platformFamily"];
        $model->deviceFamily = $request["deviceFamily"];
        $model->isBot = $request["isBot"];
        $model->save();
        return $model;
    }

    public function menghapusData($id)
    {
        $data = HistoryPerHitClient::findOrFail($id)->delete();
        return $data;
    }
}
