<?php

declare(strict_types=1);

namespace App\Models;

use Parental\HasParent;

final class Student extends User
{
    use HasParent;

    protected string $childType = 'student';
}
