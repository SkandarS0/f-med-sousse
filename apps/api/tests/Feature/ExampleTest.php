<?php

use function Pest\Laravel\{getJson};

it('returns a successful response', fn ()=> getJson('/api')->assertSuccessful());

it('returns the csrf cookie', fn ()=> getJson('/sanctum/csrf-cookie')->assertCookie('XSRF-TOKEN'));

test('unauthenticated user cannot access user endpoint', function () {
    getJson('/api/user')->assertUnauthorized();
});
