<?php

declare(strict_types=1);

namespace App\Models;

use App\Http\Resources\UserResource;
use Illuminate\Database\Eloquent\Attributes\UseResource;
use Parental\HasParent;

#[UseResource(UserResource::class)]
final class Admin extends User
{
    use HasParent;

    protected string $childType = 'admin';
}
