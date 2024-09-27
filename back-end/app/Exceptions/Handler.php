<?php

namespace App\Exceptions;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Throwable;

class Handler extends ExceptionHandler
{
    public function render($request, Throwable $exception)
    {
        if ($exception instanceof ValidationException) {
            return response()->json([
                'message' => 'Validation failed.',
                'errors' => $exception->errors(),
            ], 422);
        }

        if ($exception instanceof AuthenticationException) {
            return response()->json([
                'message' => 'Invalid credentials.',
            ], 401);
        }

        return parent::render($request, $exception);
    }
}