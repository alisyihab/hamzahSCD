<?php

namespace App\Services;

use App\Actions\DataCenterAction;
use App\Http\Controllers\Controller;
use App\Models\AuditTrail;

class KostumerMemberService extends Controller
{

    public function __construct()
    {
        DataCenterAction::setEndpoint("kostumerMember");
    }

    public function mendapatkanSeluruhData($isCari = false)
    {
        if ($isCari) {
            return DataCenterAction::http()->search($isCari)->json();
        }
        return DataCenterAction::http()->get()->json();
    }


    public function mendapatkanSatuData($id)
    {
        return DataCenterAction::http()->show($id)->json();
    }

    public function mendapatkanDataDepedensiCreate()
    {
        return DataCenterAction::http()->create()->json();
    }

    public function mendapatkanDataDependesiEdit($id)
    {
        return DataCenterAction::http()->edit($id)->json();
    }

    public function menyimpanData($request)
    {
        return DataCenterAction::http()->post($this->parsingData($request))->json();
    }

    public function memperbaruiData($request, $id)
    {
        return DataCenterAction::http()->put($this->parsingData($request), $id)->json();
    }

    public function menghapusData($id)
    {
        return DataCenterAction::http()->delete($id)->json();
    }

    public function parsingData($request)
    {
        $request["daerah"] = $request["daerah"]["wilayah"];
        $request["kewarganegaraan"] = $request["kewarganegaraan"]["nama_negara"];
        $request["provinsi"] = $request["provinsi"]["provinsi"];
        $request["kecamatan"] = $request["kecamatan"]["kecamatan"];
        $request["kelurahan"] = $request["kelurahan"]["kelurahan"];
        $request["kodepos"] = $request["kodepos"]["kode_pos"];
        $request["fk_kd_jenis_member"] = $request["fk_kd_jenis_member"]["kd_jenis_member"];
        return $request;
    }
}
