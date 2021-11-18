<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KonsumerKey extends Model
{
    use HasFactory;

    public $primaryKey = "kd_konsumer_key";

    protected $hidden = [
        'client_secret',
    ];

    public function getCreator()
    {
        return $this->hasOne(User::class, "kd_user", 'created_by')->select("nama", "kd_user");
    }

}
