<?php

use Illuminate\Http\Request;

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
    Route::get('/images', function () {
        return Image::all();
    });

    Route::get('/images/{id}', function ($id) {
        return Image::find($id);
    });

    Route::post('/images', function(Request $request) {
        $images = new Image;
        $images->name = $request['name'];
        $images->extension = $request['extension'];
        $images->size = $request['size'];
        $images->path = $request['path'];
        $images->save();
    });

    Route::delete('/images/{id}', function($id) {
        Image::find($id)->delete();
        return 204;
    });
});