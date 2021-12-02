<?php

namespace App\Services;

use App\Actions\DataCenterAction;
use App\Http\Controllers\Controller;

class AlamatService extends Controller
{
    public function post($request)
    {
        return DataCenterAction::http()->post($request)->json();
    }

    public function provinsi($request)
    {
        DataCenterAction::setEndpoint("provinsi");
        return $this->post($request);
    }

    public function wilayah($request)
    {
        DataCenterAction::setEndpoint("wilayah");
        return $this->post($request);
    }

    public function kecamatan($request)
    {
        DataCenterAction::setEndpoint("kecamatan");
        return $this->post($request);
    }

    public function kelurahan($request)
    {
        DataCenterAction::setEndpoint("kelurahan");
        return $this->post($request);
    }

    public function kode_pos($request)
    {
        DataCenterAction::setEndpoint("kodepos");
        return $this->post($request);
    }

    public function negara($request)
    {
        DataCenterAction::setEndpoint("negara");
        return DataCenterAction::http()->get()->json();
    }
}
