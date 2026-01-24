<?php

use App\Http\Middleware\LocaleMiddleware;
use App\Http\Middleware\SetUserLocaleMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->statefulApi()->prepend([
            LocaleMiddleware::class,
        ])->api([
            SetUserLocaleMiddleware::class,
        ])->encryptCookies([
            'i18next',
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
