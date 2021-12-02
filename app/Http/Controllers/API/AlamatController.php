<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\AlamatService;
use Illuminate\Http\Request;

class AlamatController extends Controller
{

    private $alamatService;

    public function __construct(AlamatService $alamatService)
    {
        $this->alamatService = $alamatService;
    }
    public function provinsi(Request $request)
    {
        return $this->alamatService->provinsi($request);
    }

    public function wilayah(Request $request)
    {
        return $this->alamatService->wilayah($request);
    }
    
    public function kecamatan(Request $request)
    {
        return $this->alamatService->kecamatan($request);
    }
    public function kelurahan(Request $request)
    {
        return $this->alamatService->kelurahan($request);
    }
    public function kode_pos(Request $request)
    {
        return $this->alamatService->kode_pos($request);
    }
    public function negara(Request $request)
    {
        return $this->alamatService->negara($request);
    }
}
