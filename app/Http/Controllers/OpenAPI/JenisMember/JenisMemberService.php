<?php

namespace App\Http\Controllers\OpenAPI\JenisMember;

use App\Http\Controllers\Controller;
use App\Models\OpenApiAuditTrail;
use App\Services\AuditTrailService;
use App\Services\OpenApiAuditTrailService;

class JenisMemberService extends Controller
{

    private OpenApiAuditTrailService $openApiAuditTrailService;

    public function __construct(OpenApiAuditTrailService $openApiAuditTrailService)
    {
        $this->openApiAuditTrailService = $openApiAuditTrailService;
    }

    private function EloquentData()
    {
        return JenisMember::with('getAppName')->orderBy('created_at', "ASC");
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
        return JenisMember::findOrFail($id);
    }

    public function menyimpanData($request)
    {
        $model = new JenisMember();
        $model->client_app_id = $request->header("client-id");  #appName;
        return $this->mengelolaData($model, $request);
    }

    public function memperbaruiData($request, $id)
    {
        $model = JenisMember::findOrFail($id);
        $dataSebelumBerubah = $model->getOriginal();
        $response =  $this->mengelolaData($model, $request);

        $this->openApiAuditTrailService->inisialisasiOpenAuditTrail(
            "update",
            "JenisMember",
            $model,
            $dataSebelumBerubah,
            $request->header("client-id"),
        );
        return $response;
    }




    private  function mengelolaData($model, $request)
    {
        if ($request->nama_jenis_member) {
            $model->nama_jenis_member = $request->nama_jenis_member;
        }
        if ($request->status) {
            $model->status = $request->status;
        }
        $model->save();
        return $model;
    }

    public function menghapusData($id)
    {
        $data = JenisMember::findOrFail($id)->delete();
        return $data;
    }
}
