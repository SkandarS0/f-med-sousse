<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\getJson;
use function Pest\Laravel\postJson;

it('returns a successful response', fn () => getJson('/api')->assertSuccessful());

it('returns the csrf cookie', fn () => getJson('/sanctum/csrf-cookie')->assertCookie('XSRF-TOKEN'));

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

    $csrfResponse = getJson('/sanctum/csrf-cookie');
    $csrfResponse->assertCookie('XSRF-TOKEN');
    $csrfToken = $csrfResponse->getCookie('XSRF-TOKEN')->getValue();
    $response = postJson('/api/auth/login', [
        'email' => $user->email,
        'password' => $password,
    ], [
        'X-CSRF-TOKEN' => $csrfToken,
    ]);
    $response->assertOk();
});
