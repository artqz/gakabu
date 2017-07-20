<?php

namespace App\Http\Controllers;

use App\Post;
use Carbon\Carbon;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;
use Symfony\Component\HttpFoundation\Request;
use Unirest;

class IgdbController extends Controller
{
    public function index()
    {
        $games = null;

        return Response::json($games);
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

    public function update(Request $request)
    {
       $validator = Validator::make($request->all(), [
           'image' => 'required'
       ]);

       if ($validator->fails()) {
           return response()->json(['errors'=>$validator->errors()]);
       }
       else {
           $imageData = $request->get('image');
           $fileName = Carbon::now()->timestamp . '_' . uniqid() . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
           $img = Image::make($request->get('image'));
           if ($img->width() > 600) {
               $img->resize(600, null, function ($constraint) {
                   $constraint->aspectRatio();
               });
           }
           $img->save(public_path('images/') . $fileName);
           return response()->json(url('images/'.$fileName));
           //return response()->json(['error' => false]);
           //return response()->json();
       }

    }
}
