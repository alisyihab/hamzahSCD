<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\JenisMemberService;
use App\Services\ResponseService;
use Illuminate\Http\Request;

class JenisMemberController extends Controller
{
    private $jenisMemberService;

    public function __construct(JenisMemberService $jenisMemberService)
    {
        $this->jenisMemberService = $jenisMemberService;
    }

    public function index(Request $request)
    {
        return $this->jenisMemberService->mendapatkanSeluruhData(isCari: $request->cari);
    }

    public function store(Request $request)
    {
        return $this->jenisMemberService->menyimpanData($request);
    }

    public function update(Request $request, $id)
    {
        return $this->jenisMemberService->memperbaruiData($request, $id);
    }

    public function edit($id)
    {
        return $this->jenisMemberService->mendapatkanSatuData($id);
    }

    public function show($id)
    {
        return null;
    }

    public function destroy($id)
    {
        return $this->jenisMemberService->menghapusData($id);
    }
}
