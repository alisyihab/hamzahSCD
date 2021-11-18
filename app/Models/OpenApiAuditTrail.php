<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OpenApiAuditTrail extends Model
{
    use HasFactory;

    public $primaryKey = "kd_open_api_audit_trail";


    public function getAppName()
    {
        return $this->hasOne(KonsumerKey::class, "client_id", 'client_app_id')->select("app_name", "client_id");
    }
}
