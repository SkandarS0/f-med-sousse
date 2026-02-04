<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\UserTypes;
use App\Traits\HasTimestampsBy;
use Database\Factories\UserFactory;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Translation\HasLocalePreference;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Parental\HasChildren;

class User extends Authenticatable implements HasLocalePreference
{
    /** @use HasFactory<UserFactory> */
    use CanResetPassword, HasApiTokens, HasChildren, HasFactory, HasTimestampsBy, HasUuids,  Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'type',
        'locale',
    ];

    protected $attributes = [
        'locale' => 'fr',
    ];

    protected string $childColumn = 'type';

    protected array $childTypes = [
        UserTypes::Student->value => Student::class,
        UserTypes::Admin->value => Admin::class,
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    final public function preferredLocale(): string
    {
        return $this->locale;
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
