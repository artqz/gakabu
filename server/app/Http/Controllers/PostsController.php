<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class PostsController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return Response::json($posts);
    }

    public function show($post_id)
    {
        $post = Post::where('id', $post_id)->get()[0];
        return Response::json($post);
    }

    public function create(Request $request)
    {
        return Post::create([
            'user_id' => 1,
            'slug' => str_slug($request['title']),
            'title' => $request['title'],
            'body' => $request['body'],
        ]);
    }
}
