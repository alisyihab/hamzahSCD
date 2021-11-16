<?php

namespace App\Services;

use App\Models\Sidebar;
use App\Actions\UrutanAction;
use Illuminate\Support\Facades\Route;

class SidebarService
{

    private UrutanAction $urutanAction;
    private AuditTrailService $auditTrailService;

    public function __construct(UrutanAction $urutanAction, AuditTrailService $auditTrailService)
    {
        $this->urutanAction = $urutanAction;
        $this->auditTrailService = $auditTrailService;
    }

    private function EloquentDataAktif()
    {
        return Sidebar::where("status_sidebar", true)->orderBy('urutan_sidebar', "ASC");
    }


    public function EloquentDataRelasiSubsidebar()
    {
        return $this->EloquentDataAktif()->with("getSubsidebar");
    }

    private function EloquentData()
    {
        return Sidebar::orderBy('urutan_sidebar', "ASC");
    }

    private function EloquentDataNonaktif()
    {
        return Sidebar::where("status_sidebar", false)->orderBy('urutan_sidebar', "ASC");
    }

    public function mendapatkanSeluruhData()
    {
        return $this->EloquentDataAktif()->get();
    }

    public function mendapatkanSeluruhDataPaginate($paginate)
    {
        return $this->EloquentDataAktif()->paginate($paginate);
    }

    public function mencariDataBerdasarkanKostum($nama_kolom, $request, $paginate)
    {
        return $this->EloquentDataAktif()->where($nama_kolom, 'ILIKE', '%' . $request . '%')->paginate($paginate);
    }

    public function mencariDataBerdasarkanKostumNonPaginate($nama_kolom, $request)
    {
        return $this->EloquentDataRelasiSubsidebar()->where($nama_kolom, 'ILIKE', '%' . $request . '%')->get();
    }

    public function mendapatkanSatuData($id)
    {
        return Sidebar::findOrFail($id);
    }

    public function mendapatkanSatuDataDenganRelasiSubsidebar($id)
    {
        return Sidebar::with("getSubsidebar")->findOrFail($id);
    }

    public function mendapatkanSeluruhDataDenganRelasiSubsidebar()
    {
        return $this->EloquentDataRelasiSubsidebar()->get();
    }

    public function mendapatkanSeluruhDataDenganRelasiSubsidebarUserLogin($list_sidebar)
    {
        return $this->EloquentDataAktif()->with(["getSubSidebar" => function ($q) use ($list_sidebar) {
            return $q->whereIn("fk_nama_permission", $list_sidebar)->get();
        }])->orderBy("urutan_sidebar")->get();
    }

    public function menyimpanData($request)
    {
        $model = new Sidebar();
        $model->urutan_sidebar = $this->urutanAction->getUrutanData('sidebars', "urutan_sidebar");
        return $this->mengelolaData($model, $request);
    }

    public function memperbaruiData($request, $id)
    {
        $model = Sidebar::findOrFail($id);
        $dataSebelumBerubah = $model->getOriginal();
        $response = $this->mengelolaData($model, $request);
        $this->auditTrailService->inisialisasiAuditTrail("update", "Sidebar", $model, $dataSebelumBerubah);
        return $response;
    }

    private function mengelolaData($model, $request)
    {
        if ($request->nama_sidebar) {
            $model->nama_sidebar = $request->nama_sidebar;
        }
        if ($request->has("status_sidebar")) {
            $model->status_sidebar = $request->status_sidebar;
        }
        if ($request->icon_sidebar) {
            $model->icon_sidebar = $request->icon_sidebar;
        }

        if ($request->urutan_only) {
            $old = $model->urutan_sidebar;
            $new =  $request->urutan_sidebar;
            $this->urutanAction->resufleUrutanIfExist("sidebars", "urutan_sidebar", $old, $new);
            $model->urutan_sidebar = $request->urutan_sidebar;
        }


        $model->save();

        return $model;
    }

    public function menghapusData($id)
    {
        $data = Sidebar::findOrFail($id)->delete();
        return $data;
    }
}
