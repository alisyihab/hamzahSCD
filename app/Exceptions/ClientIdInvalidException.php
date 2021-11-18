<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Support\Facades\Log;

class ClientIdInvalidException extends Exception
{
    /**
     * Report or log an exception.
     *
     * @return void
     */
    public function report()
    {
        Log::debug('Request Http gagal, Data Client Key Tidak ditemukan mohon gunakan client-id / client-secret yang sesuai ');
    }
}
