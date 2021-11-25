<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Services\KonsumerKeyService;
use App\Services\responseService;
use App\Http\Controllers\Controller;
use App\Http\Requests\ResetKonsumerKeySecretRequest;
use App\Http\Requests\StoreKonsumerKeyRequest;

class KonsumerKeyController extends Controller
{

    private KonsumerKeyService $konsumerkeysService;
    private ResponseService $responseService;

    public function __construct(
        KonsumerKeyService $konsumerkeysService,
        ResponseService $responseService
    ) {
        $this->konsumerkeysService = $konsumerkeysService;
        $this->responseService = $responseService;
    }

    public function index(Request $request)
    {
        $in_konsumer_key = $this->konsumerkeysService->mendapatkanSeluruhDataPaginate(
            paginate: $this->paginate,
            isCari: $request->cari
        );
        return compact("in_konsumer_key");
    }

    public function create()
    {
        return null;
    }

    public function edit($id)
    {
        $in_konsumer_key = $this->konsumerkeysService->mendapatkanSatuData($id);
        return compact("in_konsumer_key");
    }

    public function store(StoreKonsumerKeyRequest $request)
    {
        return $this->responseService->menyimpanData($this->konsumerkeysService->menyimpanData($request));
    }

    public function show($id)
    {
        $in_konsumer_key = $this->konsumerkeysService->mendapatkanSatuData($id);
        return compact("in_konsumer_key");
    }

    public function update(Request $request, $id)
    {
        return $this->responseService->updateData($this->konsumerkeysService->memperbaruiData($request, $id));
    }

    public function destroy($id)
    {
        $this->konsumerkeysService->menghapusData($id);
        return $this->responseService->menghapusData($id);
    }

    public function resetSecret(ResetKonsumerKeySecretRequest $request, $id)
    {
        return $this->responseService->updateData($this->konsumerkeysService->meresetDataClientSecret($request, $id));
    }
}
