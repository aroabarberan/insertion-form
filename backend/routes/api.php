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
        $data = new Image;
        $data->name = $request['name'];
        $data->extension = $request['extension'];
        $data->size = $request['size'];
        $data->path = $request['path'];

        return response()->json($request['path']);

        // echo "El nombre temporal es ".$_FILES['imagen']['tmp_name']."<br>";
        // echo "El tamaño es ".$_FILES['imagen']['size']."<br>";
        // echo "El nombre original es ".$_FILES['imagen']['name']."<br>";
        // echo "El tipo de archivo es ".$_FILES['imagen']['type']."<br>"; 
        // $data->save();
    });


});