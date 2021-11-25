<?php

namespace App\Services;

use App\Http\Controllers\Controller;
use App\Models\KonsumerKey;
use App\Services\AuditTrailService;
use Illuminate\Support\Facades\Hash;

class KonsumerKeyService extends Controller
{

    private AuditTrailService $auditTrailService;

    public function __construct(AuditTrailService $auditTrailService)
    {
        $this->auditTrailService = $auditTrailService;
    }


    public function client_key()
    {
        $client_secret = bin2hex(random_bytes(32));
        $client_id = bin2hex(random_bytes(16));

        return compact("client_secret", "client_id");
    }

    private function EloquentData()
    {
        return KonsumerKey::with('getCreator')->orderBy('created_at', "DESC");
    }

    public function mendapatkanSeluruhData()
    {
        return $this->EloquentData()->get();
    }

    public function mendapatkanSeluruhDataPaginate($paginate, $isCari = false)
    {
        if ($isCari) {
            return $this->mencariDataBerdasarkanKostum("client_id", $isCari, $paginate);
        }
        return $this->EloquentData()->paginate($paginate);
    }

    public function mencariDataBerdasarkanKostum($nama_kolom, $request, $paginate)
    {
        return $this->EloquentData()->where($nama_kolom, 'ILIKE', '%' . $request . '%')->paginate($paginate);
    }

    public function mendapatkanSatuData($id)
    {
        return KonsumerKey::findOrFail($id);
    }

    public function mendapatkanSatuDataBerdasarkanClientId($client_id)
    {
        return $this->EloquentData()->where("client_id", $client_id)->firstOrFail();
    }

    public function menyimpanData($request)
    {
        $model = new KonsumerKey();
        $model->created_by = $this->authGetKdUser();
        return $this->mengelolaData($model, $request);
    }

    public function memperbaruiData($request, $id)
    {
        $model = KonsumerKey::findOrFail($id);
        $dataSebelumBerubah = $model->getOriginal();
        $model->app_name = $request->app_name;
        $model->save();
        $this->auditTrailService->inisialisasiAuditTrail("update", "KonsumerKey", $model, $dataSebelumBerubah);
        return $model;
    }

    private  function mengelolaData($model, $request)
    {
        $client = $this->client_key();
        $model->app_name = $request->app_name;
        $model->client_id = $client["client_id"];
        $model->client_secret = Hash::make($client["client_secret"]);
        $model->save();
        $model["one_time_client_secret_show"] = $client["client_secret"];
        return $model;
    }

    public function menghapusData($id)
    {
        $data = KonsumerKey::findOrFail($id)->delete();
        return $data;
    }

    public function meresetDataClientSecret($request, $id)
    {
        $client = $this->client_key();
        $model = KonsumerKey::findOrFail($id);
        $dataSebelumBerubah = $model->getOriginal();
        $model->client_secret = Hash::make($client["client_secret"]);
        $model->save();
        $model["one_time_client_secret_show"] = $client["client_secret"];

        $dataSebelumBerubah["client_secret"] = "Peruaban pada client secret";
        $masking_perubahan_data = $model->getChanges()["client_secret"] = "Peruaban pada client secret";

        $this->auditTrailService->inisialisasiAuditTrail("reset-secret", "KonsumerKey", $model, $dataSebelumBerubah, $masking_perubahan_data);
        return $model;
    }
}
