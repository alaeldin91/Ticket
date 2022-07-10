<?php

use App\Http\Controllers\AuthnicationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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



Route::group(['prefix' => 'auth'], function () {
    Route::post('register', [AuthnicationController::class, 'registerCustomer']);
    Route::post('loginAdmin', [AuthnicationController::class, 'loginAdmin']);
    Route::post('loginCustomer', [AuthnicationController::class, 'loginCustomer']);
});
Route::group(['middleware' => 'auth:api'], function () {
    Route::get('logout', [AuthnicationController::class], 'logoutCustomer');
});
