<?php

declare(strict_types=1);

use App\Models\User;
use Laravel\Sanctum\Sanctum;

use function Pest\Laravel\getJson;

it('returns a successful response', fn () => getJson('/api')->assertSuccessful());

it('returns the csrf cookie', fn () => getJson('/sanctum/csrf-cookie')->assertCookie('XSRF-TOKEN'));

test('unauthenticated user cannot access user endpoint', function (): void {
    getJson('/api/user')->assertUnauthorized();
});

test('authenticated user can access user endpoint', function (): void {
    $user = User::factory()->create();

    Sanctum::actingAs($user);

    getJson('/api/user')
        ->assertOk()
        ->assertJson([
            'email' => $user->email,
        ]);
});
