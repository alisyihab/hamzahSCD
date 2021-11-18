<?php

namespace App\Services;

class VersioningApiService
{
    public function version_1_0()
    {
        $data["version"] = "1.0";
        $data["deprecated"] = false;
        $data["release"] = "18 November 2021";
        $data["note"] = "-";
        return $data;
    }
}
