<?php

use function Pest\Laravel\{get};

it('returns a successful response', fn ()=> get('/api')->assertSuccessful());

it('returns the csrf cookie', fn ()=> get('/sanctum/csrf-cookie')->assertCookie('XSRF-TOKEN'));
