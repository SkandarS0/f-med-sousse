<?php

declare(strict_types=1);

use App\Http\Controllers\Web\UserController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'user'], function (): void {
    Route::get('/', [UserController::class, 'index'])->name('user.index');
})->middleware('auth:sanctum');

Route::get('/', fn () => response()->json(['message' => 'Oops! You have reached the API root endpoint. Don\'t tell anyone!']));
