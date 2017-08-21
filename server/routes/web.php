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

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', function ($api) {
    $api->group(['namespace' => 'App\Http\Controllers'], function ($api) {
        // Регистрация пользователя
        $api->post('auth/user/registration', 'AuthController@registrationUser');
        // Авторизация пользователя
        $api->post('auth/user/login', 'AuthController@loginUser');
        // Выход пользователя
        $api->post('auth/user/logout', 'AuthController@authenticateUser');

        // Список пользователей
        $api->get('users', 'UsersController@index');
    });
});

$api->version('v1', ['namespace' => 'App\Http\Controllers', 'middleware' => 'api.auth'], function ($api) {
    // Выбор пользователя
    $api->get('users/{id}', 'UsersController@show');

    // Обновить токен
    $api->get('auth/user/token', 'AuthController@getToken');

    // Удалить токен
    $api->get('auth/user/delete', 'AuthController@destroy');
});
/*
 * API
 * Auth
 */
Route::group(['prefix' => 'api/v1', 'middleware' => 'csrf'], function () {
    // Аутентификация приложений...
    Route::post('/auth/app', 'AuthController@authenticateApp');

    // Аутентификация пользователей...
    Route::post('/auth/user', 'AuthController@authenticateUser')->middleware('auth.api.app');
    Route::post('/auth/user/logout', 'AuthController@logoutUser')->middleware('auth.api.user');

    // Тестовые  маршруты
    //Route::get('/application-data', 'Api\HomeController@appData');
    //Route::get('/user-data', 'Api\HomeController@userData');
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
    Route::get('/video', 'IgdbController@video');
});
