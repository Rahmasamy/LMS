<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

use App\Mail\TestMail;
use App\Mail\WelcomeMail;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

//mail 

Route::get('/send',function (){
    // Mail::to('rahmasamy20011@gmail.com')->send(new TestMail());
    // return response('sending ...');
    // try {
    //     Mail::to('rahmasamy949@gmail.com')->send(new WelcomeMail());
    //     return response('sending...');
    // } catch (Exception $e) {
    //     echo $e;
    //     Log::error('Email sending failed: ' . $e->getMessage());
    //     return response('Failed to send email.', 500);
    // }

});
//require __DIR__.'/auth.php';

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
