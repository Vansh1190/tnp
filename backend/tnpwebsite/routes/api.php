<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/usesr' , function(){
    return response() -> json('hello');
});

Route::get('/data', function () {
    return response()->json([ 'status' => 'OK', 'name' =>'vansh']);
});

Route::get('/getLatestNews', [UserController::class, 'getData']);

Route::post('/acceptData', [UserController::class , 'acceptData']);