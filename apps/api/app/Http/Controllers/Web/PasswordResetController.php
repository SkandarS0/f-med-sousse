<?php

declare(strict_types=1);

namespace App\Http\Controllers\Web;

use App\Http\Controllers\WebController;
use App\Http\Requests\ResetPasswordRequest;
use App\Http\Requests\SendPasswordResetLinkRequest;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset as PasswordResetEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

final class PasswordResetController extends WebController
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

    public function verify(Request $request)
    {
        $validated = $request->validate(['token' => 'required', 'email' => 'required|email']);
        $userExists = User::where('email', $validated['email'])->exists();
        if (! $userExists) {
            return $this->unprocessableEntity(['message' => __('passwords.user')]);
        }
        $tokenExists = Password::broker()->tokenExists(User::where('email', $validated['email'])->first(), $validated['token']);

        if (! $tokenExists) {
            return $this->unprocessableEntity(['message' => __('passwords.token')]);
        }

        return $this->ok();
    }

    public function reset(ResetPasswordRequest $request)
    {
        $validated = $request->validated();

        $status = Password::reset(
            $validated,
            function (User $user, string $password): void {
                $user->forceFill([
                    'password' => Hash::make($password),
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordResetEvent($user));
            }
        );

        if ($status !== Password::PASSWORD_RESET) {
            return $this->unprocessableEntity(['message' => __($status)]);
        }

        return $this->ok(['message' => __('passwords.reset')]);
    }
}
