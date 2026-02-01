<?php

declare(strict_types=1);

namespace App\Http\Controllers\Web;

use App\Http\Controllers\WebController;
use App\Http\Requests\LoginWebRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

final class AuthenticatedSessionController extends WebController
{
    public function login(LoginWebRequest $request)
    {
        $credentials = $request->validated();

        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();

            return $this->ok(['two_factor' => false]);
        }

        return $this->unprocessableEntity(['message' => __('auth.failed')]);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return $this->noContent();
    }
}
