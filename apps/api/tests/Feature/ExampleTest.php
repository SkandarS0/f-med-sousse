<?php

use App\Models\User;
use function Pest\Laravel\{actingAs, getJson, postJson};

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

test('a user can login with correct credentials with fortify', function () {
    $password = 'password123';
    $user = User::factory()->create([
        'password' => Hash::make($password),
    ]);

    // getJson('/sanctum/csrf-cookie')->assertCookie('XSRF-TOKEN');

    $response = postJson('/api/auth/login', [
        'email' => $user->email,
        'password' => $password,
    ]);

    $response->assertOk();
});
