<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Model\HistoryPerHitClient;
use App\Services\HistoryPerHitClientService;
use App\Services\responseService;
use App\Http\Controllers\Controller;

class HistoryPerHitClientController extends Controller
{

    private HistoryPerHitClientService $historyperhitclientsService;
    private ResponseService $responseService;

    public function __construct(
        HistoryPerHitClientService $historyperhitclientsService,
        ResponseService $responseService
    ) {
        $this->historyperhitclientsService = $historyperhitclientsService;
        $this->responseService = $responseService;
    }

    public function index()
    {
        $in_historyperhitclient = $this->historyperhitclientsService->mendapatkanSeluruhDataPaginate($this->paginate);
        return compact("in_historyperhitclient");
    }

    public function create()
    {
        # code...
    }

    public function edit($id)
    {
        $in_historyperhitclient = $this->historyperhitclientsService->mendapatkanSatuData($id);
        return compact("in_historyperhitclient");
    }

    public function store(Request $request)
    {

        return $this->responseService->menyimpanData($this->historyperhitclientsService->menyimpanData($request));
    }

    public function show($id)
    {
        $in_historyperhitclient = $this->historyperhitclientsService->mendapatkanSatuData($id);
        return compact("in_historyperhitclient");
    }

    public function update(Request $request, $id)
    {
        return $this->responseService->updateData($this->historyperhitclientsService->memperbaruiData($request, $id));
    }

    public function destroy($id)
    {
        $this->historyperhitclientsService->menghapusData($id);
        return $this->responseService->menghapusData($id);
    }
}
