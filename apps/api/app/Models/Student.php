<?php

namespace App\Models;

use Parental\HasParent;

class Student extends User
{
    use HasParent;

    protected string $childType = 'student';
}
