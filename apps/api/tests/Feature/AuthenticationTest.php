<?php

use App\Models\User;

use function Pest\Laravel\postJson;

test('a user can log in with valid credentials', function () {
    $password = 'password123';
    $user = User::factory()->create([
        'password' => Hash::make($password),
    ]);

    $response = postJson(route('login'), [
        'email' => $user->email,
        'password' => $password,
    ]);
    $response->assertSuccessful();
});

test('a user cannot log in with invalid credentials', function () {
    $password = 'password123';
    $user = User::factory()->create([
        'password' => Hash::make($password),
    ]);

    $response = postJson(route('login'), [
        'email' => $user->email,
        'password' => 'wrongpassword',
    ]);
    $response->assertUnprocessable();
});
