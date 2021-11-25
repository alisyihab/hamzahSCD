<?php

namespace App\Services;

use App\Http\Controllers\Controller;
use App\Models\HistoryPerHitClient;
use App\Services\AuditTrailService;
use Browser;

class HistoryPerHitClientService extends Controller
{

    private GetClientIpAddressService $getClientIpAddressService;
    private AuditTrailService $auditTrailService;

    public function __construct(
        AuditTrailService $auditTrailService,
        GetClientIpAddressService $getClientIpAddressService,

    ) {
        $this->auditTrailService = $auditTrailService;
        $this->getClientIpAddressService = $getClientIpAddressService;
    }

    private function EloquentData()
    {
        return HistoryPerHitClient::with('getClientApp')->orderBy('created_at', "DESC");
    }

    public function mendapatkanSeluruhData()
    {
        return $this->EloquentData()->get();
    }

    public function mendapatkanSeluruhDataPaginate($paginate, $isCari = false)
    {
        if ($isCari) {
            return $this->mencariDataBerdasarkanKostum("app_name", $isCari, $paginate);
        }
        return $this->EloquentData()->paginate($paginate);
    }

    public function mencariDataBerdasarkanKostum($nama_kolom, $request, $paginate)
    {
        return $this->EloquentData()
            ->join("konsumer_keys", "konsumer_keys.client_id", "=", "history_per_hit_clients.client_app_id")
            ->select("konsumer_keys.app_name", "history_per_hit_clients.*")
            ->where($nama_kolom, 'ILIKE', "%" . $request . "%")->paginate($paginate);
    }

    public function mendapatkanSatuData($id)
    {
        return HistoryPerHitClient::findOrFail($id);
    }

    public function menyimpanData($request)
    {
        $model = new HistoryPerHitClient();
        $data = [];
        $data["client_app_id"] = $request["client_id"];
        $data["path"] = $request["path_url"];
        $data["ip_address"] =  $this->getClientIpAddressService->getIp();
        $data["method"] = $request["route_data"]->methods()[0];
        $data["browserName"] = Browser::browserName();
        $data["browserEngine"] = Browser::browserEngine();
        $data["platformName"] = Browser::platformName();
        $data["platformFamily"] = Browser::platformFamily();
        $data["deviceFamily"] = Browser::deviceFamily();
        $data["isBot"] = Browser::isBot();
        return $this->mengelolaData($model, $data);
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
