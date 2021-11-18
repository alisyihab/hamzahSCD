<?php

namespace App\Http\Controllers\OpenAPI\JenisMember;

use App\Models\KonsumerKey;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisMember extends Model
{
    use HasFactory;

    public $primaryKey = "kd_jenis_member";


    public function getAppName()
    {
        return $this->hasOne(KonsumerKey::class, "client_id", 'client_app_id')->select("app_name", "client_id");
    }
}
