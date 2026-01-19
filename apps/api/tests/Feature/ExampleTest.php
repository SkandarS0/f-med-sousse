<?php

use App\Models\User;
use function Pest\Laravel\{actingAs, getJson};

it('returns a successful response', fn ()=> getJson('/api')->assertSuccessful());

it('returns the csrf cookie', fn ()=> getJson('/sanctum/csrf-cookie')->assertCookie('XSRF-TOKEN'));

test('unauthenticated user cannot access user endpoint', function () {
    getJson('/api/user')->assertUnauthorized();
});

test('authenticated user can access user endpoint', function () {
    $user = User::factory()->create();

    actingAs($user);

    getJson('/api/user')
        ->assertOk()
        ->assertJson([
            'email' => $user->email,
        ]);
});
