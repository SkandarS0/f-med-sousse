<?php

declare(strict_types=1);

use function Pest\Laravel\getJson;

it('returns a successful response', fn () => getJson('/api')->assertSuccessful());

it('returns the csrf cookie', fn () => getJson('/sanctum/csrf-cookie')->assertCookie('XSRF-TOKEN'));
