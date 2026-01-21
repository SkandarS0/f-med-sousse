<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', fn (Request $request) => $request->user())->middleware('auth:sanctum');


Route::get('/', fn () => response()->json(['message' => 'Oops! You have reached the API root endpoint. Don\'t tell anyone!']));
