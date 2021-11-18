<?php

namespace App\Services;


class GetFullUrlService
{
    public function url()
    {
        $full_current_url = explode("/", url()->current());
        // Remove base domain
        for ($i = 0; $i < 3; $i++) {
            unset($full_current_url[$i]);
        }
        return implode('/', $full_current_url);
    }
}
