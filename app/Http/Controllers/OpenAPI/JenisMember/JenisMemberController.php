<?php

namespace App\Http\Controllers\OpenAPI\JenisMember;

use Illuminate\Http\Request;
use App\Services\responseService;
use App\Http\Controllers\Controller;

class JenisMemberController extends Controller
{

    private JenisMemberService $jenismembersService;
    private ResponseService $responseService;

    public function __construct(
        JenisMemberService $jenismembersService,
        ResponseService $responseService
    ) {
        $this->jenismembersService = $jenismembersService;
        $this->responseService = $responseService;
    }

    public function index()
    {
        $in_jenismember = $this->jenismembersService->mendapatkanSeluruhDataPaginate($this->paginate);
        return compact("in_jenismember");
    }

    public function create()
    {
        # code...
    }

    public function edit($id)
    {
        $in_jenismember = $this->jenismembersService->mendapatkanSatuData($id);
        return compact("in_jenismember");
    }

    public function store(Request $request)
    {

        return $this->responseService->menyimpanData($this->jenismembersService->menyimpanData($request));
    }

    public function show($id)
    {
        $in_jenismember = $this->jenismembersService->mendapatkanSatuData($id);
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
