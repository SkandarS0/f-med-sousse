<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/', function (Request $request) {
    return response()->json(['message' => 'Oops! You have reached the API root endpoint. Don\'t tell anyone!']);
});
