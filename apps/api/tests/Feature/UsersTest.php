<?php

declare(strict_types=1);

use App\Models\User;
use Laravel\Sanctum\Sanctum;

use function Pest\Laravel\getJson;

test('an unauthenticated user cannot access the user endpoint', function (): void {
    getJson('/api/user')->assertUnauthorized();
});

test('an authenticated user can access the user endpoint', function (): void {
    $user = User::factory()->create();

    Sanctum::actingAs($user);

    getJson('/api/user')
        ->assertOk()
        ->assertJson([
            'email' => $user->email,
        ]);
});
