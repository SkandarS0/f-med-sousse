<?php

declare(strict_types=1);

use App\Http\Controllers\Web\AuthenticatedSessionController;
use App\Http\Controllers\Web\PasswordResetController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth'], function (): void {
    Route::post('/login', [AuthenticatedSessionController::class, 'login'])->name('login');
    Route::post('/logout', [AuthenticatedSessionController::class, 'logout'])->name('logout');
    Route::post('/forgot-password', [PasswordResetController::class, 'requestLink'])->name('password.forgot');
    Route::post('/reset-password', [PasswordResetController::class, 'reset'])->name('password.reset');
    Route::post('/reset-password/verify-token', [PasswordResetController::class, 'verify'])->name('password.check-reset-token');
});
