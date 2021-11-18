<?php

namespace App\Actions;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class GetAllRoutes
{

    public function set_default_route_name_list()
    {
        $data_url = Route::getRoutes('attributes');
        $rename_label = [
            'index' => 'Daftar',
            'create' => 'Menambah',
            'store' => 'Menyimpan',
            'show' => 'Detail',
            'update' => 'Update',
            'edit' => 'Mengubah',
            'destroy' => 'Menghapus',
            'search' => 'Pencarian',
        ];
        $data_tersimpan = [];

        foreach ($data_url as  $url) {
            if (explode('/', $url->uri)[0] == 'api') {
                if (empty($url->action['as'])) {
                    dd($url->action, "api name Undifined");
                }

                $mendapatkan_jenis = explode('.', $url->action['as'])[1];
                if ($mendapatkan_jenis  == "edit" || $mendapatkan_jenis == "create") {
                    continue;
                }

                if (count(explode('.', $url->action['as'])) > 1) {
                    $cek_duplikasi_data_api = DB::table('permissions')
                        ->where('route_url', $url->action['as'])
                        ->first();

                    $data_explode = explode('.', $url->action['as']);
                    if (!$cek_duplikasi_data_api) {
                        $data_nama = $rename_label[$data_explode[1]] ?? $data_explode[1];
                        DB::table('permissions')->insert([
                            'nama_route' => $data_nama  . ' ' . $data_explode[0],
                            'route_url' => $url->action['as'],
                            'nama_grup' => $data_explode[0],
                        ]);

                        $data_tersimpan[] = [
                            $data_nama  . ' ' . $data_explode[0],
                            $url->action['as'],
                            $data_explode[0]
                        ];
                    }
                }
            }
        }
        dd($data_tersimpan);
    }
}
