<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, \Throwable $exception)
    {

        if ($exception instanceof ClientIdInvalidException) {
            return response()->json(
                [
                    "errors" => [
                        "client-id" => "Tidak dikenal /  ditemukan",
                        "client-secret" => "Tidak dikenal /  ditemukan",
                    ],
                    'message' => "Request Http gagal, Data Client Key Tidak ditemukan mohon gunakan client-id / client-secret yang sesuai ",
                    'exception' => "ClientIdInvalidException",
                    'middleware' => "verifyClientKey",
                ],
                400
            );
        }
        return parent::render($request, $exception);
    }
}
