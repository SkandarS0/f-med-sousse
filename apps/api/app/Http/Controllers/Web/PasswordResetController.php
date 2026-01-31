<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\WebController;
use App\Http\Requests\SendPasswordResetLinkRequest;
use Illuminate\Support\Facades\Password;

class PasswordResetController extends WebController
{
    public function requestLink(SendPasswordResetLinkRequest $request)
    {
        $validated = $request->validated();

        $status = Password::sendResetLink(
            $validated
        );

        if ($status !== Password::RESET_LINK_SENT) {
            return $this->unprocessableEntity(['message' => __($status)]);
        }

        return $this->ok(['message' => __('passwords.sent')]);
    }
}
