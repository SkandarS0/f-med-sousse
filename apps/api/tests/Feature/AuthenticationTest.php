<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Foundation\Http\Middleware\ValidateCsrfToken;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Support\Facades\Hash;

use function Pest\Laravel\postJson;
use function Pest\Laravel\withoutMiddleware;

beforeEach(function (): void {
    withoutMiddleware([VerifyCsrfToken::class, ValidateCsrfToken::class]);
});
test('a user can log in with valid credentials', function (): void {
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

test('a user cannot log in with invalid credentials', function (): void {
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
