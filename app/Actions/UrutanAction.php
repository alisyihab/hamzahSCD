<?php

namespace App\Actions;

use Illuminate\Support\Facades\DB;

class UrutanAction
{
    public function resufleUrutanIfExist($table, $nama_kolom, $old, $new)
    {
        DB::table($table)->where($nama_kolom, $new)->update(
            [$nama_kolom => $old]
        );
        return $new;
    }

    public function oneParentMethodResufleUrutanIfExist($table, $nama_kolom, $old, $new, $kolom_parent, $data_parent)
    {
        DB::table($table)->where($kolom_parent, $data_parent)->where($nama_kolom, $new)->update(
            [$nama_kolom => $old]
        );
        return $new;
    }

    public function getUrutanData($nama_table, $nama_kolom)
    {
        $urutan = DB::table($nama_table)->max($nama_kolom);
        return  $urutan + 1;
    }

    public function oneParenMethodtGetUrutanData($nama_table, $nama_kolom, $kolom_parent, $data_parent)
    {
        $urutan = DB::table($nama_table)->where($kolom_parent, $data_parent)->max($nama_kolom);
        return  $urutan + 1;
    }
}
