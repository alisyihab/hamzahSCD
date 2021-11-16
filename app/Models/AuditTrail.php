<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AuditTrail extends Model
{
    use HasFactory;

    protected $primaryKey = "kd_audit_trail";
    public function getCreator()
    {
        return $this->hasOne(User::class, "kd_user", 'fk_kd_user')->select("nama", "kd_user");
    }
}
