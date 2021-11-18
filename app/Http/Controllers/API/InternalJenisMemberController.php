<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Controllers\OpenAPI\JenisMember\JenisMemberController;
use App\Http\Controllers\OpenAPI\JenisMember\JenisMemberService;
use Illuminate\Http\Request;

class InternalJenisMemberController extends Controller
{
    private JenisMemberController $jenisMemberController;

    public function __construct(JenisMemberController $jenisMemberController)
    {
        $this->jenisMemberController = $jenisMemberController;
    }

    public function index()
    {
        return $this->jenisMemberController->index();
    }

    public function search(Request $request)
    {
        // return $this->jenisMemberController->search();
    }
}
