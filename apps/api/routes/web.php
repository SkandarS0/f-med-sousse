<?php

use App\Http\Controllers\Web\AuthController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'api'], function () {
    Route::group(['prefix' => 'auth'], function () {
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/logout', [AuthController::class, 'logout']);
    });
});
