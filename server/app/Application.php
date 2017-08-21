<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\JWTAuth;

class Application extends Model
{
    public function generateAuthToken()
    {
        $jwt = JWTAuth::encode([
            'iss' => 'valhalla',
            'sub' => $this->key,
            'iat' => time(),
            'exp' => time() + (5 * 60 * 60),
        ], 'w5yuCV2mQDVTGmn3');

        return $jwt;
    }
}
