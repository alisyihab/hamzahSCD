<?php

namespace App\Http\Middleware;


use Closure;
use Illuminate\Http\Request;
use App\Services\GetFullUrlService;
use App\Services\KonsumerKeyService;
use Illuminate\Support\Facades\Hash;
use App\Services\GetClientIpAddressService;
use App\Exceptions\ClientIdInvalidException;
use App\Services\HistoryPerHitClientService;

class verifyKonsumerKey
{

    private $konsumerKeyService;
    private $historyPerHitClientService;
    private $getFullUrlService;

    private $client_id;
    private $client_secret;
    private $route_data;
    private $path_url;
    private $arrayData = [];

    public function __construct(
        KonsumerKeyService $konsumerKeyService,
        HistoryPerHitClientService $historyPerHitClientService,
        GetFullUrlService $getFullUrlService
    ) {
        $this->konsumerKeyService = $konsumerKeyService;
        $this->historyPerHitClientService = $historyPerHitClientService;
        $this->getFullUrlService = $getFullUrlService;
    }
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

        $this->initializeRequestData();
        $this->verifyClientKey();
        $this->historyPerHitClientService->menyimpanData($this->arrayData);
        return $next($request);
    }

    public function initializeRequestData()
    {
        $this->client_id = \Request::header()["client-id"][0] ?? null;
        $this->client_secret = \Request::header()["client-secret"][0] ?? null;
        $this->route_data =  \Request::route();
        $this->path_url =  $this->getFullUrlService->url();

        $this->arrayData = [
            "client_id" => $this->client_id,
            "client_secret" => $this->client_secret,
            "route_data" => $this->route_data,
            "path_url" => $this->path_url
        ];
    }

    public function verifyClientKey()
    {
        if (empty($this->client_id) || empty($this->client_secret)) {
            abort(400, "client-id / client-secret tidak boleh kosong");
        }

        try {
            $get_client_data = $this->konsumerKeyService->mendapatkanSatuDataBerdasarkanClientId($this->client_id)["client_secret"];
        } catch (\Exception $exception) {
            throw new ClientIdInvalidException();
        }

        if (!Hash::check($this->client_secret, $get_client_data)) {
            abort(400, "client-id / client-secret tidak ditemukan");
        }
    }
}
