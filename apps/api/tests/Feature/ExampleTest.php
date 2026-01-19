<?php

it('returns a successful response', fn ()=> $this->get('/api')->assertSuccessful());

it('returns the csrf cookie', fn ()=> $this->get('/sanctum/csrf-cookie')->assertCookie('XSRF-TOKEN'));
