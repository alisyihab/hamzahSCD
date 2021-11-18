<?php

namespace App\Http\Controllers\OpenAPI\JenisMember;

use Illuminate\Http\Request;
use App\Services\responseService;
use App\Http\Controllers\Controller;
use App\Services\VersioningApiService;

class JenisMemberController extends Controller
{

    private JenisMemberService $jenismembersService;
    private ResponseService $responseService;
    private $version;

    public function __construct(
        JenisMemberService $jenismembersService,
        ResponseService $responseService,
        VersioningApiService $versioningApiService,

    ) {
        $this->jenismembersService = $jenismembersService;
        $this->responseService = $responseService;
        $this->version = $versioningApiService->version_1_0();
    }

    public function index()
    {
        $in_jenis_member = $this->jenismembersService->mendapatkanSeluruhDataPaginate($this->paginate);
        return $this->responseService->responseData($this->version, $in_jenis_member);
    }

    public function search(Request $request)
    {
        return $this->responseService->responseData($this->version, $this->jenismembersService->mencariDataBerdasarkanKostum("nama_jenis_member", $request->cari, $this->paginate));
    }

    public function create()
    {
        # code...
    }

    public function edit($id)
    {
        $in_jenis_member = $this->jenismembersService->mendapatkanSatuData($id);
        return compact("in_jenismember");
    }

    public function store(Request $request)
    {

        return $this->responseService->menyimpanData($this->jenismembersService->menyimpanData($request));
    }

    public function show($id)
    {
        $in_jenis_member = $this->jenismembersService->mendapatkanSatuData($id);
        return compact("in_jenismember");
    }

    public function update(Request $request, $id)
    {
        return $this->responseService->updateData($this->jenismembersService->memperbaruiData($request, $id));
    }

    public function destroy($id)
    {   
        $this->jenismembersService->menghapusData($id);
        return $this->responseService->menghapusData($id);
    }
}
