<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class UsersController extends Controller
{
    public function index ()
    {
        try {
            return User::all();
        }
        catch (Exception $ex) {
            return $ex;
        }
    }

    public function show ()
    {
        try {
            $user = JWTAuth::parseToken()->toUser();

            if (! $user) {
                return $this->response->errorNotFound('User not found');
            }
        }
        catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $ex) {
            return $this->response->error('Token is invalid');
        }
        catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $ex) {
            return $this->response->error('Token has expired');
        }
        catch (\Tymon\JWTAuth\Exceptions\TokenBlacklistedException $ex) {
            return $this->response->error('Token is blacklisted');
        }

        return $this->response->array(compact('user'))->setStatusCode(200);
    }

    public function check (Request $request)
    {
        $username = $request['username'];
        $email = $request['email'];
        $result = false;

        if ($username) {
            $user = User::where('username', $username)->first();
            if ($user) {
                $result = true;
                return $this->response->array(compact('result'))->setStatusCode(200);
            }
        }
        elseif ($email) {
            $user = User::where('email', $email)->first();
            if ($user) {
                $result = true;
                return $this->response->array(compact('result'))->setStatusCode(200);
            }
        }

        return $this->response->array(compact('result'))->setStatusCode(200);
    }
}
