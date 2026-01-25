<?php

namespace App\Models;

use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Translation\HasLocalePreference;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Parental\HasChildren;

class User extends Authenticatable implements HasLocalePreference
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use CanResetPassword, HasChildren, HasFactory, HasUuids, Notifiable;

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

    protected string $childColumn = 'type';

    protected $attributes = [
        'locale' => 'fr',
    ];

    protected $appends = [
        'full_name',
    ];

    protected array $childTypes = [
        'student' => Student::class,
        'admin' => Admin::class,
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

    public function preferredLocale(): string
    {
        return $this->locale;
    }

    protected function fullName(): Attribute
    {
        return new Attribute(
            get: fn (): string => $this->preferredLocale() === 'fr'
                ? "{$this->last_name} {$this->first_name}"
                : "{$this->first_name} {$this->last_name}",
        );
    }
}
