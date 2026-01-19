<?php

use function Pest\Laravel\{get, getJson};

it('returns a successful response', fn ()=> get('/api')->assertSuccessful());

it('returns the csrf cookie', fn ()=> get('/sanctum/csrf-cookie')->assertCookie('XSRF-TOKEN'));

test('unauthenticated user cannot access user endpoint', function () {
    getJson('/api/user')->assertUnauthorized();
});
