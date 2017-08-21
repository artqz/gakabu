<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    protected function registrationUser (Request $request) {
        $this->validate($request, [
            'name' => 'required|string|max:255|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        return User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => bcrypt($request['password']),
        ]);
    }

    public function loginUser (Request $request) {
        $credentials = $request->only('email', 'password');

        try
        {
            if (! $token = JWTAuth::attempt($credentials))
            {
                return $this->response->errorUnauthorized();
            }
        }
        catch (JWTException $ex)
        {
            return $this->response->errorInternal();
        }

        return $this->response->array(compact('token'))->setStatusCode(200);
    }

    public function logoutUser(){

    }

    public function getToken () {
        $token = JWTAuth::getToken();

        if (! $token) {
            return $this->response->errorUnauthorized('Token is invalid');
        }

        try {
            $refreshedToken = JWTAuth::refresh($token);
        }
        catch (JWTException $ex) {
            $this->response->error('something went wrong');
        }

        return $this->response->array(compact('refreshedToken'))->setStatusCode(200);
    }

    public function destroy () {
        $user = JWTAuth::parseToken()->authenicate();

        if (! $user) {
            return $this->response->errorNotFound('User not found');
        }

        $user->delete();
    }
}
