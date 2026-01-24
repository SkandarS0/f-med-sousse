<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return response()->json($request->user())->withCookie(Cookie::make(config('app.locale_cookie_name'), $request->user()->preferredLocale()));
})->middleware('auth:sanctum');

Route::get('/', fn () => response()->json(['message' => 'Oops! You have reached the API root endpoint. Don\'t tell anyone!']));
