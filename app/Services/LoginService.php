<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class LoginService
{
    private $secret = 'amr_apps_basic';

    private $selected_data = [
        "kd_user",
        "role",
        "nama",
        "email",
        "username",

    ];
    
    public function login($request)
    {
        $username = $request->username;
        $password = $request->password;
        $attemp_login = ['username' => $username, 'password' => $password];

        if (Auth::guard('web')->attempt($attemp_login, false, false)) {
            $in_user = User::where('username', $username)->first(
                $this->selected_data
            );

            $username = $in_user->username;
            $token = $in_user->createToken($this->secret)->accessToken;

            return response()->json([
                "data_user" => $in_user,
                "bearer_token" => $token
            ]);
        }

        return response([
            "errors" => [
                'username' => ['Username /  password tidak dikenal'],
                'password' => ['Username /  password tidak dikenal']
            ],
        ], 422);
    }
}
