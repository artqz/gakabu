<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/*
 * API
 * Posts
 */
Route::get('api/v1/posts', 'PostsController@index');
Route::get('api/v1/posts/{id}', 'PostsController@show');
Route::post('api/v1/posts/{id}', 'PostsController@create');
Route::put('api/v1/posts/{id}', 'PostsController@edit');
//Route::patch('api/v1/posts/{id}', 'PostsController@edit');
Route::delete('api/v1/posts/{id}', 'PostsController@delete');
