<?php

use App\Http\Controllers\Web\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth'], function () {
    Route::post('/login', [AuthenticatedSessionController::class, 'login']);
    Route::post('/logout', [AuthenticatedSessionController::class, 'logout']);
});
