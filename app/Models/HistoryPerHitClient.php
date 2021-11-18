<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HistoryPerHitClient extends Model
{
    use HasFactory;

    public function getCreator()
    {
        return $this->hasOne(User::class, "kd_user", 'created_by')->select("nama", "kd_user");
    }
}
