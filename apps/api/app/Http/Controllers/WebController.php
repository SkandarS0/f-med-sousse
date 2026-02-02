<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Routing\Controller;
use Symfony\Component\HttpFoundation\Response;

abstract class WebController extends Controller
{
    use AuthorizesRequests;

    protected function ok(mixed $data = [])
    {
        return response()->json($data);
    }

    protected function noContent()
    {

        return response()->noContent();
    }

    protected function unprocessableEntity(mixed $body = [])
    {
        return response()->json($body, Response::HTTP_UNPROCESSABLE_ENTITY);
    }
}
