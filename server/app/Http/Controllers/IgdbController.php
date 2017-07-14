<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Response;
use Unirest;

class IgdbController extends Controller
{
    public function index()
    {

    }
    public function show($name)
    {
        $games = Unirest\Request::get("https://igdbcom-internet-game-database-v1.p.mashape.com/games/?search=".$name."&filter[rating][gte]=60&fields=name&limit=5",
            array(
                "X-Mashape-Key" => "yAHUz3QHoMmshLNZp7Hxh0l5VoMTp1v0JHHjsnxlYswrOGAjkU",
                "Accept" => "application/json"
            )
        );

        return Response::json($games->body);
    }
}
