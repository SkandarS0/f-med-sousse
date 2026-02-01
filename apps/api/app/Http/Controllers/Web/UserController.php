<?php

declare(strict_types=1);

namespace App\Http\Controllers\Web;

use App\Http\Controllers\WebController;
use Illuminate\Http\Request;

final class UserController extends WebController
{
    public function index(Request $request)
    {
        return $this->ok($request->user()->toResource());
    }
}
