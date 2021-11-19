<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Model\HistoryPerHitClient;
use App\Services\HistoryPerHitClientService;
use App\Services\responseService;
use App\Http\Controllers\Controller;

class HistoryPerHitClientController extends Controller
{
    private HistoryPerHitClientService $historyPerHitClientService;
    private ResponseService $responseService;

    public function __construct(
        HistoryPerHitClientService $historyPerHitClientService,
        ResponseService $responseService
    ) {
        $this->historyPerHitClientService = $historyPerHitClientService;
        $this->responseService = $responseService;
    }

    public function index()
    {
        $in_history_per_hit_client = $this->historyPerHitClientService->mendapatkanSeluruhDataPaginate($this->paginate);
        return compact("in_history_per_hit_client");
    }

    public function search(Request $request)
    {
        $in_history_per_hit_client = $this->historyPerHitClientService->mencariDataBerdasarkanKostum("app_name", $request->cari, $this->paginate);
        return compact("in_history_per_hit_client");
    }

    public function destroy($id)
    {
        $this->historyPerHitClientService->menghapusData($id);
        return $this->responseService->menghapusData($id);
    }
}
