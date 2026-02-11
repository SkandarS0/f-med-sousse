<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Support\Facades\Hash;

use function Pest\Laravel\postJson;

test('a user can log in with valid credentials', function (): void {
    $password = 'password123';
    $user = User::factory()->create([
        'password' => Hash::make($password),
    ]);

    $response = postJson(route('api.login'), [
        'email' => $user->email,
        'password' => $password,
    ]);
    $response->assertSuccessful();
});

test('a user cannot log in with invalid credentials', function (): void {
    $password = 'password123';
    $user = User::factory()->create([
        'password' => Hash::make($password),
    ]);

    $response = postJson(route('api.login'), [
        'email' => $user->email,
        'password' => 'wrongpassword',
    ]);
    $response->assertUnprocessable();
});
