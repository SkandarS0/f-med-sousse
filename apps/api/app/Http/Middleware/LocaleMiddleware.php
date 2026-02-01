<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

final class LocaleMiddleware
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
        $clientLocale = $request->cookie(config('app.locale_cookie_name'));
        $supportedLocales = config('app.supported_locales');
        if (! in_array($clientLocale, $supportedLocales)) {
            $clientLocale = config('app.fallback_locale');
        }
        app()->setLocale($clientLocale);

        return $next($request);
    }
}
