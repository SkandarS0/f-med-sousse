<?php

declare(strict_types=1);

namespace App\Providers;

use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\ServiceProvider;

use function collect;

final class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        JsonResource::withoutWrapping();
        ResetPassword::createUrlUsing(fn (User $user, string $token): string => env('FRONTEND_URL').'/reset-password?token='.$token.'&email='.urlencode($user->email));
        Blueprint::macro('timestampsBy', fn () => collect([
            $this->foreignIdFor(User::class, 'created_by')->nullable(),
            $this->foreignIdFor(User::class, 'updated_by')->nullable(),
        ]));
    }
}
