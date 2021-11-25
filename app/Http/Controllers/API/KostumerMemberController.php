<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\KostumerMemberService;
use Illuminate\Http\Request;

class KostumerMemberController extends Controller
{
    private $kostumerMember;

    public function __construct(KostumerMemberService $kostumerMember)
    {
        $this->kostumerMember = $kostumerMember;
    }

    public function index(Request $request)
    {
        return $this->kostumerMember->mendapatkanSeluruhData(isCari: $request->cari);
    }

    public function create()
    {
        return $this->kostumerMember->mendapatkanDataDepedensiCreate();
    }

    public function store(Request $request)
    {
        return $this->kostumerMember->menyimpanData($request);
    }

    public function show($id)
    {
        return $this->kostumerMember->mendapatkanSatuData($id);
    }

    public function edit($id)
    {
        return $this->kostumerMember->mendapatkanDataDependesiEdit($id);
    }

    public function update(Request $request, $id)
    {
        return $this->kostumerMember->memperbaruiData($request, $id);
    }

    public function destroy($id)
    {
        return $this->kostumerMember->menghapusData($id);
    }
}
