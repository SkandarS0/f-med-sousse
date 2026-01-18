<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/', function (Request $request) {
    return response()->json(['message' => 'Welcome to the API']);
});
