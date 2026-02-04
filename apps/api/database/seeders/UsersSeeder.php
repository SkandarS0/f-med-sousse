<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->admin()->create([
            'email' => 'test@example.com',
            'password' => Hash::make('142536'),
        ]);
    }
}
