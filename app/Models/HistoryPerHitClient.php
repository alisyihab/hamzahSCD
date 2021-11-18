<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HistoryPerHitClient extends Model
{
    use HasFactory;

    public function getClientApp()
    {
        return $this->hasOne(KonsumerKey::class, "client_id", 'client_app_id')->select("app_name", "client_id");
    }
}
