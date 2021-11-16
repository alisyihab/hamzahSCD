<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\AuditTrailService;
use Illuminate\Http\Request;

class AuditTrailController extends Controller
{

    private AuditTrailService $auditTrailService;
    public function __construct(AuditTrailService $auditTrailService)
    {
        $this->auditTrailService =  $auditTrailService;
    }


    public function index()
    {
        $in_audit_trail = $this->auditTrailService->mendapatkanSeluruhDataPaginate($this->paginate);
        return compact("in_audit_trail");
    }

    public function search(Request $request)
    {
        $in_audit_trail = $this->auditTrailService->mencariDataBerdasarkanKostum("nama_form", $request->cari, $this->paginate);
        return compact("in_audit_trail");
    }

    public function show($id)
    {
        $in_audit_trail = $this->auditTrailService->mendapatkanSatuData($id);
        return compact("in_audit_trail");
    }
}
