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
 * Auth
 */
Route::group(['prefix' => 'api/v1', 'middleware' => 'csrf'], function () {
    Route::post('/auth', 'Auth\AuthController@authenticate');
    Route::get('/posts', 'PostsController@index');
    Route::get('/posts/{id}', 'PostsController@show');
    Route::get('/posts/{id}/comments', 'PostsController@comments');
    Route::post('/posts', 'PostsController@create');
    Route::put('/posts/{id}', 'PostsController@edit');
    //Route::patch('api/v1/posts/{id}', 'PostsController@edit');
    Route::delete('/posts/{id}', 'PostsController@delete');
    Route::get('/games/{name}', 'IgdbController@show');
    Route::get('/games', 'IgdbController@index');
    Route::post('/file', 'IgdbController@update');
});
