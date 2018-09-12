<?php

use Illuminate\Http\Request;
use App\Image;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix'=>'/'], function () {
    Route::get('/data', function () {
        return Image::all();
    });

    Route::post('/data', function(Request $request) {
        $data = new Image();
        $data->name = $request['name'];
        // $data->extension = explode('.', $request['path'])[1];
        $data->extension = $request['extension'];
        $data->path = $request['path'];

        move_uploaded_file($request['path'], 
        '../../frontend/public/images/'. $request['path']);
        $data->save();
    });
});