<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;
use Symfony\Component\HttpFoundation\Request;
use Unirest;
//use FFMpeg\FFMpeg;

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

    public function video() {
        // переменные для создания необходимых каталогов
        $year = date('Y');
        $month = date('m');
        $day = date('d');
        $hour = date('H');

        // генерируем пути для записи
        $path = '/images/';
        $ffmpeg = \FFMpeg\FFMpeg::create([
            'ffmpeg.binaries'  => 'c:/ffmpeg/bin/ffmpeg.exe',
            'ffprobe.binaries' => 'c:/ffmpeg/bin/ffprobe.exe',
        ]);


        $video = $ffmpeg->open(public_path('images\video2.gif'));
        $video
            ->save(new \FFMpeg\Format\Video\X264(), public_path('images\mp42.mp4'));

        $video = $ffmpeg->open(public_path('images\mp42.mp4'));
        $video
            ->save(new \FFMpeg\Format\Video\WebM(), public_path('images\webm2.webm'));
    }

    public function update(Request $request)
    {
        // mklink /j E:\composter\gakabu\server\public\images E:\composter\gakabu\server\storage\app\public\images

       $validator = Validator::make($request->all(), [
           'image' => 'required'
       ]);

       if ($validator->fails()) {
           return response()->json(['errors'=>$validator->errors()]);
       }
       else {
           // переменные для создания необходимых каталогов
           $year = date('Y');
           $month = date('m');
           $day = date('d');
           $hour = date('H');

           // генерируем пути для записи
           $path = '/images/'.$year.'/'.$month.'/'.$day.'/'.$hour.'/';
           $pathBig = '/images/big/'.$year.'/'.$month.'/'.$day.'/'.$hour.'/';
           $imageData = $request->get('image');
           $fileName = Carbon::now()->timestamp . '_' . uniqid();

           //получаем инфу о картинке
           $getimagesize = getimagesize($imageData);

           // определяем расширение картинки
           //$imageExt = str_replace('image/', '.', $file_info['mime']);
           $imageExt = '.'.explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];

           // проверяем является ли картинка Гифкой
           // если да, то загружаем оригинал и делаем превью
           if ($getimagesize['mime'] == 'image/gif') {
               // создаем необходимый каталог
               Storage::disk('public')->MakeDirectory($path);

               copy($imageData, public_path($path.$fileName.$imageExt));

               // создаем превью
               Image::make($request->get('image'))->save(public_path($path.$fileName.'.jpg'))->encode('jpg', 80);

               $data['imageType'] = 'gif';
               $data['imageUrl'] = url($path.$fileName.$imageExt);
               $data['imageUrlPreview'] = url($path.$fileName.'.jpg');

               return response()->json($data);
           }

           // если картинка статичная
           $img = Image::make($request->get('image'));

           // если картинка больше чем нужно делаем 2 комии
           if ($img->width() > 600) {
               // создаем необходимые каталоги
               Storage::disk('public')->MakeDirectory($path);
               Storage::disk('public')->MakeDirectory($pathBig);

               // делаем копию для просмотра 1600 px, если оригинал больше
               if ($img->width() > 1600) {
                   $img->resize(1600, null, function ($constraint) {
                       $constraint->aspectRatio();
                   });

                   $img->save(public_path($pathBig.$fileName.$imageExt));
               }
               else {
                   $img->save(public_path($pathBig.$fileName.$imageExt));
               }

               // делаем копию для чтения 600 px
               $img->resize(600, null, function ($constraint) {
                   $constraint->aspectRatio();
               });

               $img->save(public_path($path.$fileName.$imageExt));

               $data['imageType'] = 'jpgBig';
               $data['imageUrl'] = url($path.$fileName.$imageExt);
               $data['imageUrlBig'] = url($pathBig.$fileName.$imageExt);

               return response()->json($data);
           }

           // если картинка маленька, то просто сохраняем ее
           else {
               // создаем необходимый каталог
               Storage::disk('public')->MakeDirectory($path);

               $img->save(public_path($path.$fileName.$imageExt));

               $data['imageType'] = 'jpg';
               $data['imageUrl'] = url($path.$fileName.$imageExt);

               return response()->json($data);
           }
       }

    }
}
