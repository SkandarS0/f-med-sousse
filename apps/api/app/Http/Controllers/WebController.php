<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Routing\Controller;
use Symfony\Component\HttpFoundation\Response;

class WebController extends Controller
{
    use HandlesAuthorization;

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
