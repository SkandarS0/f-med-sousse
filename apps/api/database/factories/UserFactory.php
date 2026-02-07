<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Enums\UserType;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends Factory<User>
 */
final class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => self::$password ??= Hash::make('password'),
            'locale' => fake()->randomElement(config('app.supported_locales')),
            'remember_token' => Str::random(10),
            'type' => UserType::Student,
            'created_by' => User::factory()->admin()->noCreator(),
        ];
    }

    public function noCreator(): self
    {
        return $this->state(fn (array $attributes): array => [
            'created_by' => null,
        ]);
    }

    public function admin(): self
    {
        return $this->state(fn (array $attributes): array => [
            'type' => UserType::Admin,
        ]);
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): self
    {
        return $this->state(fn (array $attributes): array => [
            'email_verified_at' => null,
        ]);
    }

    public function student(): self
    {
        return $this->state(fn (array $attributes): array => [
            'type' => UserType::Student,
        ]);
    }
}
