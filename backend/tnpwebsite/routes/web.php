<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
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
    return view('welcome2');
});

// Route::get('/hello', function () {
//     return redirect('/page/vansh');
// });
    
Route::view('hello', '/hello'); 

Route::get('/page/{name}', function ($name) {
        return view('welcome', ['name' => $name]);
});

Route::get('/greeting', function () {
    return response()->json([ 'status' => 'OK', 'name' =>'vansh']);
});
 
Route::get('/user/{id}', [UserController :: class, 'show'] );

Route::get('url', [UserController::class , 'index']);

Route::get('getdata', [UserController::class , 'getData']);

