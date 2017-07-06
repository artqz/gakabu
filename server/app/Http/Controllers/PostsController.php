<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    protected function index()
    {
        $posts = Post::all();
        return dd ($posts);
    }
}
