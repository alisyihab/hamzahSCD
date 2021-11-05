<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aplikasi extends Model
{
    use HasFactory;

    protected $table = "aplikasi";
    public $primaryKey = "kd_aplikasi";
    

    public function getCreator()
    {
        return $this->hasOne(User::class, "kd_user", 'created_by')->select("nama", "kd_user");
    }

}