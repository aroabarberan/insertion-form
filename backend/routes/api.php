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
        // $data = new Image();
        // $data->name = $request['name'];
        // $data->extension = 'png';
        // $data->size = '23';
        // $data->path = pathinfo($request['path'])['basename'];

        // $data->path = '/home/aroa/Documents/insertion-form/frontend/public/images/';
        // $info = pathinfo($_FILES[$request['path']]['name']);
        // $name = basename($_FILES[$request['path']]["name"]);

        // move_uploaded_file($data->path, 
        // '../../frontend/public/images/'. $data->path);
        // $data->save();
    });
});