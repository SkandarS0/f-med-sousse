<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

final class SetUserLocaleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request):Response  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->method() === 'OPTIONS') {
            return $next($request);
        }
        if (auth()->check()) {
            Log::info("App locale is '".app()->getLocale()."'");
            $request->user()->locale = app()->getLocale();
            $request->user()->save();
        }

        return $next($request);
    }
}
