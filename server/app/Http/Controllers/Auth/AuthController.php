<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('guest');
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try
        {
           if (! $token = JWTAuth::attempt($credentials))
           {
               return Response::json(['error' => 'User credentials are not correct!'], 401);
           }
        }
        catch (JWTException $ex)
        {
           return Response::json(['error' => 'Something went wrong'], 500);
        }

        return Response::json(array(
            'error' => false,
            'post' => compact('token'),
            'status_code' => 200
        ));
    }

}
