<?php

namespace App\Actions;

use Illuminate\Support\Facades\Http;
use PhpParser\Node\Expr\StaticCall;

class DataCenterAction
{
    public const clientID = "0b9bcb584f005057d0b15269f728fcfc";
    public const clientSecret = "fa76210d693dccc65614c77cbbaa76f435e5b783187747d33ef1081cdb091486";
    public const baseURL1_0_0 = "http://127.0.0.1:7000/client-api/v1.0/";

    private static $_instance = null;
    public static $endpointData;
    public static $responseJsonData;
    public static $paginate;

    public function __construct()
    {
        self::$paginate = request("page");

        if (self::$endpointData == null) {
            dd("endpoint Data belum di set, mohon untuk set dengan benar");
        }
    }

    public static function httpRequest()
    {
        return Http::withHeaders(
            [
                "client-id" => self::clientID,
                "client-secret" => self::clientSecret,
            ]
        )->acceptJson();
    }


    public static function fullURL($id = false)
    {
        if ($id) {
            return self::baseURL1_0_0 . self::getEndpoint() . "/" . $id;
        }
        return self::baseURL1_0_0 . self::getEndpoint();
    }


    public static function http()
    {
        if (self::$_instance === null) {
            self::$_instance = new self;
        }
        return self::$_instance;
    }

    public function get()
    {
        self::$responseJsonData =  self::httpRequest()->get(self::fullURL(), [
            "page" => self::$paginate,
        ]);
        return $this;
    }


    public function search($cari)
    {
        self::$responseJsonData =  self::httpRequest()->get(self::fullURL(), [
            "cari" => $cari,
            "page" => self::$paginate,
        ]);
        return $this;
    }

    public function create()
    {
        self::$responseJsonData =  self::httpRequest()->get(self::fullURL() . "/create");
        return $this;
    }

    public function post($request)
    {
        self::$responseJsonData =  self::httpRequest()
            ->post(self::fullURL(), $request->all());
        return $this;
    }

    public function show($id)
    {
        self::$responseJsonData =  self::httpRequest()
            ->get(self::fullURL($id));
        return $this;
    }

    public function edit($id)
    {
        self::$responseJsonData =  self::httpRequest()->get(self::fullURL($id) . "/edit");
        return $this;
    }

    public function put($request, $id)
    {
        self::$responseJsonData =  self::httpRequest()
            ->put(self::fullURL($id), $request->all());
        return $this;
    }

    public function delete($id)
    {
        self::$responseJsonData =  self::httpRequest()
            ->delete(self::fullURL($id));
        return $this;
    }

    public function json()
    {
        return response(self::$responseJsonData->json(), self::$responseJsonData->status());
    }

    public static function setEndpoint($endpoint)
    {
        self::$endpointData =  $endpoint;
    }

    public static function getEndpoint()
    {
        $endpoints =  [
            "jenisMember" => "jenis-member",
            "kostumerMember" => "kostumer-member",
            "provinsi" => "alamat/provinsi",
            "wilayah"=>"alamat/wilayah",
            "kecamatan"=>"alamat/kecamatan",
            "kelurahan"=>"alamat/kelurahan",
            "kodepos"=>"alamat/kodepos",
            "regional"=>"alamat/regional",
            "negara"=>"alamat/negara",
        ];

        return $endpoints[self::$endpointData];
    }
}
