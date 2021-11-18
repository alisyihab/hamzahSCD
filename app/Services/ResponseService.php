<?php


namespace App\Services;

class ResponseService
{
    public function responseCostum($status, $pesan, $data)
    {
        return [
            "status" => $status,
            "message" => $pesan,
            "data" => $data,
        ];
    }

    public function responseData($api_version, $api_data)
    {
        return compact("api_version", "api_data");
    }
    public function menyimpanData($data)
    {
        return [
            "status" => 201,
            "message" => "Berhasil Menyimpan Data",
            "data" => $data,
        ];
    }

    public function updateData($data)
    {
        return [
            "status" => 200,
            "message" => "Berhasil Merubah Data",
            "data" => $data,
        ];
    }

    public function menghapusData($id)
    {
        return [
            "status" => 200,
            "message" => "Berhasil Menghapus Data",
            "data" => $id,
        ];
    }
}
