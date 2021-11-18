<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Services\KonsumerKeyService;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use App\Exceptions\ClientIdInvalidException;
use App\Services\GetClientIpAddressService;
use App\Services\GetFullUrlService;
use App\Services\HistoryPerHitClientService;
use Browser;

class verifyKonsumerKey
{

    private $konsumerKeyService;
    private $getClientIpAddressService;
    private $historyPerHitClientService;
    private $getFullUrlService;

    private $client_id;
    private $client_secret;
    private $route_data;
    private $path_url;

    public function __construct(
        KonsumerKeyService $konsumerKeyService,
        GetClientIpAddressService $getClientIpAddressService,
        HistoryPerHitClientService $historyPerHitClientService,
        GetFullUrlService $getFullUrlService
    ) {
        $this->konsumerKeyService = $konsumerKeyService;
        $this->getClientIpAddressService = $getClientIpAddressService;
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
        $this->historyPerHit();
        return $next($request);
    }

    public function initializeRequestData()
    {
        $this->client_id = \Request::header()["client-id"][0] ?? null;
        $this->client_secret = \Request::header()["client-secret"][0] ?? null;
        $this->route_data =  \Request::route();
        $this->path_url =  $this->getFullUrlService->url();
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


    public function historyPerHit()
    {
        $data = [];
        $data["client_app_id"] = $this->client_id;
        $data["path"] = $this->path_url;
        $data["ip_address"] = $this->getClientIpAddressService->getIp();
        $data["method"] = $this->route_data->methods()[0];
        $data["browserName"] = Browser::browserName();
        $data["browserEngine"] = Browser::browserEngine();
        $data["platformName"] = Browser::platformName();
        $data["platformFamily"] = Browser::platformFamily();
        $data["deviceFamily"] = Browser::deviceFamily();
        $data["isBot"] = Browser::isBot();
        $this->historyPerHitClientService->menyimpanData($data);
    }
}
