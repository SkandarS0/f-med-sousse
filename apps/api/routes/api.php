<?php

declare(strict_types=1);

use App\Http\Controllers\Web\AuthenticatedSessionController;
use App\Http\Controllers\Web\PasswordResetController;
use App\Http\Controllers\Web\UserController;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Support\Facades\Route;

// ================== Guest Routes ====================

Route::get('/', fn () => response()->json(['message' => 'Oops! You have reached the API root endpoint. Don\'t tell anyone!']));
Route::post('/forgot-password', [PasswordResetController::class, 'requestLink'])->name('password.forgot');
Route::post('/reset-password', [PasswordResetController::class, 'reset'])->name('password.reset');
Route::post('/reset-password/verify-token', [PasswordResetController::class, 'verify'])->name('password.check-reset-token');

// =============== Authenticated Routes ===============

Route::group(['middleware' => 'auth:sanctum'], function (): void {
    Route::group(['prefix' => 'user'], function (): void {
        Route::get('/', [UserController::class, 'index'])->name('user.index');
    });

// ================= Session Routes ======================

Route::group(['prefix' => 'auth', 'middleware' => [
    EncryptCookies::class,
    AddQueuedCookiesToResponse::class,
    StartSession::class,
]], function (): void {
    Route::post('/login', [AuthenticatedSessionController::class, 'login'])->name('api.login');
    Route::post('/logout', [AuthenticatedSessionController::class, 'logout'])->name('logout');
});
