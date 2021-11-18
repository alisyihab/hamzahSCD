<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Model\OpenApiAuditTrail;
use App\Services\OpenApiAuditTrailService;
use App\Services\responseService;
use App\Http\Controllers\Controller;

class OpenApiAuditTrailController extends Controller
{

    private OpenApiAuditTrailService $openApiAuditTrailService;
    private ResponseService $responseService;

    public function __construct(
        OpenApiAuditTrailService $openApiAuditTrailService,
        ResponseService $responseService
    ) {
        $this->openApiAuditTrailService = $openApiAuditTrailService;
        $this->responseService = $responseService;
    }

    public function index()
    {
        $in_oapi_audit_trail = $this->openApiAuditTrailService->mendapatkanSeluruhDataPaginate($this->paginate);
        return compact("in_oapi_audit_trail");
    }

    public function search(Request $request)
    {
        $in_oapi_audit_trail = $this->openApiAuditTrailService->mencariDataBerdasarkanKostum("nama_form", $request->cari, $this->paginate);
        return compact('in_oapi_audit_trail');
    }

    public function create()
    {
        # code...
    }

    public function edit($id)
    {
        $in_oapi_audit_trail = $this->openApiAuditTrailService->mendapatkanSatuData($id);
        return compact("in_oapi_audit_trail");
    }

    public function store(Request $request)
    {

        return $this->responseService->menyimpanData($this->openApiAuditTrailService->menyimpanData($request));
    }

    public function show($id)
    {
        $in_oapi_audit_trail = $this->openApiAuditTrailService->mendapatkanSatuData($id);
        return compact("in_oapi_audit_trail");
    }

    public function update(Request $request, $id)
    {
        return $this->responseService->updateData($this->openApiAuditTrailService->memperbaruiData($request, $id));
    }

    public function destroy($id)
    {
        $this->openApiAuditTrailService->menghapusData($id);
        return $this->responseService->menghapusData($id);
    }
}
