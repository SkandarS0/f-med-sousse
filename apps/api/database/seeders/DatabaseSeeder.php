<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\User;
use Hash;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
      User::factory()->admin()->create([
        'email' => 'test@example.com',
        'password' => Hash::make('142536'),
      ]);
    }
}
