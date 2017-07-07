<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class PostsController extends Controller
{
    protected function index()
    {
        $posts = Post::all();
        return Response::json(array(
            'error' => false,
            'posts' => $posts,
            'status_code' => 200
        ));
    }

    protected function show($post_id)
    {
        $post = Post::where('id', $post_id)->get();
        return Response::json(array(
            'error' => false,
            'post' => $post,
            'status_code' => 200
        ));
    }

    protected function create()
    {

        return Response::json(array(
            'error' => false,
            'post' => 'test',
            'status_code' => 200
        ));
    }
}
