<?php

declare(strict_types=1);

namespace App\Traits;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Auth;
use LogicException;

/**
 * Trait HasTimestampsBy
 *
 * Automatically sets created_by and updated_by columns on model events.
 *
 * @mixin Model
 */
trait HasTimestampsBy
{
    /**
     * Boot the trait and register model event listeners.
     */
    public static function bootHasTimestampsBy(): void
    {
        static::creating(function (Model $model) {
            if (Auth::check() && $model->created_by === null) {
                $model->created_by = Auth::id();
            }
        });

        static::updating(function (Model $model) {
            if (Auth::check()) {
                $model->updated_by = Auth::id();
            }
        });
    }

    /**
     * Initialize the trait for a model instance.
     * Validates that the trait is used only in Model classes.
     */
    public function initializeHasTimestampsBy(): void
    {
        if (! $this instanceof Model) {
            throw new LogicException(
                sprintf(
                    'HasTimestampsBy trait can only be used in classes that extend %s. %s does not extend Model.',
                    Model::class,
                    static::class
                )
            );
        }

        // Make created_by and updated_by fillable automatically
        $this->mergeFillable(['created_by', 'updated_by']);
    }

    /**
     * Get the user who created the model.
     */
    public function creator(): BelongsTo
    {
        return $this->belongsTo(
            config('auth.providers.users.model', User::class),
            'created_by'
        );
    }

    /**
     * Get the user who last updated the model.
     */
    public function updater(): BelongsTo
    {
        return $this->belongsTo(
            config('auth.providers.users.model', User::class),
            'updated_by'
        );
    }
}
