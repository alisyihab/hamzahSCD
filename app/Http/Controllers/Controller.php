<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Image;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public $paginate  = 25;


    public function resufleUrutanIfExist($table, $nama_kolom, $old, $new)
    {
        $data = DB::table($table)->where($nama_kolom, $new)->update(
            ["urutan_sidebar" => $old]
        );
        return $new;
    }
    
    public function initialAuditTrail($jenis, $nama_form, $model, $dataBeforeUpdated)
    {
        $data = [];
        $data["nama_form"] = $nama_form;
        $data["jenis_kegiatan"] = $jenis;


        foreach ($model->getChanges() as $key => $perubahanData) {
            if ($key != "updated_at") {
                $data["nama_field"][] = $key;
                $data["value_sebelumnya"][] = $dataBeforeUpdated[$key];
                $data["value_terbaru"][] = $perubahanData;
            }
        }
        $auditTrailService = new AuditTrailService;
        $auditTrailService->storeAuditTrailData($data);
    }


    public function verifikasiPerubahan($model)
    {
        if ($model->created_by != $this->authGetKdUser()) {
            abort(403, "Tikda Memiliki akses untuk mengubah data ini");
        }
    }


    public function get_primaryKey($kd)
    {
        return $kd . substr(rand() * time(), 0, 6);
    }

    public function authGetKdUser()
    {
        return auth("api")->user()->kd_user;
    }

    public function uploadGambar($foto, $namaFolder)
    {
        $namaFoto = substr(rand(0, 999) + time() . '.' . explode('/', explode(';', $foto)[0])[1], 0, 100);
        $path = $this->membuatFolder('/img/' . $namaFolder);
        $img = Image::make($foto);
        $img->save($path . $namaFoto);
        return  '/img/' . $namaFolder . $namaFoto;
    }

    public function unlink($data)
    {
        return @unlink(public_path() . $data);
    }

    public function membuatFolder($namaFolder)
    {
        $path = public_path() . $namaFolder;
        if (!file_exists($path)) {
            mkdir($path, 0755, true);
        }
        return $path;
    }


    public function getIp()
    {
        foreach (array('HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_FORWARDED', 'HTTP_X_CLUSTER_CLIENT_IP', 'HTTP_FORWARDED_FOR', 'HTTP_FORWARDED', 'REMOTE_ADDR') as $key) {
            if (array_key_exists($key, $_SERVER) === true) {
                foreach (explode(',', $_SERVER[$key]) as $ip) {
                    $ip = trim($ip); // just to be safe
                    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false) {
                        return $ip;
                    }
                }
            }
        }
        return request()->ip(); // it will return server ip when no client ip found
    }

    public function hari_indonesia($waktu_pembayaran)
    {
        $hari = [
            'Mon' => 'Senin',
            'Tue' => 'Selasa',
            'Wed' => 'Rabu',
            'Thu' => 'Kamis',
            'Fri' => 'Jumat',
            'Sat' => 'Sabtu',
            'Sun' => 'Minggu',
        ];
        $get_hari = explode(' ', $waktu_pembayaran);
        $hari_indo = $hari[$get_hari[0]];
        unset($get_hari[0]);
        return   $hari_indo . ', ' . implode(' ', $get_hari);
    }


    public function bulan_indonesia($tanggal)
    {
        $bulan = array(
            1 =>   'Januari',
            'Februari',
            'Maret',
            'April',
            'Mei',
            'Juni',
            'Juli',
            'Agustus',
            'September',
            'Oktober',
            'November',
            'Desember'
        );
        $pecahkan = explode('-', $tanggal);

        return $pecahkan[2] . ' ' . $bulan[(int)$pecahkan[1]] . ' ' . $pecahkan[0];
    }
}
