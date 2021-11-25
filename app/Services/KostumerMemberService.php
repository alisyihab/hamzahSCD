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
        return DataCenterAction::http()->post($request)->json();
    }

    public function memperbaruiData($request, $id)
    {
        return DataCenterAction::http()->put($request, $id)->json();
    }

    public function menghapusData($id)
    {
        return DataCenterAction::http()->delete($id)->json();
    }
}
