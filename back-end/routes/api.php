<?php

use App\Http\Controllers\CategoryControllerr;
use App\Http\Controllers\CertificateControllerr;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseControllerr;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\Lesson;
use App\Http\Controllers\QuizControllerr;
use App\Http\Controllers\Review;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\NotificationController;
use App\Models\User;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    if ($request->user()) {
        return response()->json(['message' => 'User is authenticated.']);
    }
    return response()->json(['error' => 'User not authenticated.'], 403);
})->middleware(['auth:sanctum', 'signed']);

Route::post('/email/verification-notification', function (Request $request) {
  $request->user()->sendEmailVerificationNotification();

  return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');



////////////////////////////////////////////////////////////////
////////// Routes that will available for visitors /////////////

Route::get('/all-categories', [CategoryControllerr::class, 'getAllCategories']);
Route::get('/all-courses', [CourseControllerr::class, 'getAllCourses']);

////////////////////////////////////////////////////////////////




Route::middleware(['auth:sanctum'])->group(function () {
 
  Route::get('/user', function (Request $request) {
    return $request->user();
  });
  // update user 


  // echo $request;
  Route::put('/user/update', [UserController::class, 'update']);
  Route::delete('/user/delete/{id}', [UserController::class, 'deleteUser']);

 


// Email Verification Handler

//  Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
//   $request->fulfill();

//   return response()->json(['message' => 'Email verified successfully!']);
// })->middleware(['auth:sanctum', 'signed'])->name('verification.verify');

// // Resend verification email
// Route::post('/email/verification-notification', function (Request $request) {
//   $request->user()->sendEmailVerificationNotification();
//   return response()->json(['message' => 'Verification link sent.']);
// })->middleware(['throttle:6,1'])->name('verification.send');

// Route::post('/email/verification-notification', function (Request $request) {
//   $request->user()->sendEmailVerificationNotification();

//   return response()->json(['message' => 'Verification link sent!']);
// })->middleware(['auth:sanctum', 'throttle:6,1'])->name('verification.send');


  Route::get('courses/all', [CourseControllerr::class, 'all']);

  Route::get('courses', [CourseControllerr::class, 'index']);

  Route::get('courses/show/{id}', action: [CourseControllerr::class, 'show']);
  Route::post('courses/add', action: [CourseControllerr::class, 'Store']);
  Route::put('courses/update/{id}', action: [CourseControllerr::class, 'update']);
  Route::get('courses/delete/{id}', action: [CourseControllerr::class, 'destroy']);
  Route::get('course/sections/{id}', [CourseControllerr::class, 'sections']);
  Route::get('course/reviews/{id}', [CourseControllerr::class, 'Reviews']);
  Route::get('course/quizes/{id}', [CourseControllerr::class, 'quizes']);
  Route::get('course/assig/{id}', [CourseControllerr::class, 'Assigments']);
  Route::get('course/cert/{id}', [CourseControllerr::class, 'Certificate']);

  //category controller 
  Route::get(uri: 'categories', action: [CategoryControllerr::class, 'index']);
  Route::get('categories/courses/{id}', [CategoryControllerr::class, 'getCoursesOfCategory']);
  Route::get('categories/show/{id}', action: [CategoryControllerr::class, 'show']);
  Route::post('categories/add', action: [CategoryControllerr::class, 'Store']);
  Route::put('categories/update/{id}', action: [CategoryControllerr::class, 'update']);
  Route::get('categories/delete/{id}', action: [CategoryControllerr::class, 'destroy']);


  // certificate 
  Route::get('certificate', action: [CertificateControllerr::class, 'index']);
  Route::get('certificate/show/{id}', action: [CertificateControllerr::class, 'show']);
  Route::post('certificate/add', action: [CertificateControllerr::class, 'Store']);
  Route::put('certificate/update/{id}', action: [CertificateControllerr::class, 'update']);
  Route::get('certificate/delete/{id}', action: [CertificateControllerr::class, 'destroy']);


  // Lessons 
  Route::get('lessons', [Lesson::class, 'index']);
  Route::get('lessons/show/{id}', action: [Lesson::class, 'show']);
  Route::post('lessons/add', action: [Lesson::class, 'Store']);
  Route::put('lessons/update/{id}', action: [Lesson::class, 'update']);
  Route::get('lessons/delete/{id}', action: [Lesson::class, 'destroy']);

  // Quizes 
  Route::get('quizes', action: [QuizControllerr::class, 'index']);
  Route::get('quizes/show/{id}', action: [QuizControllerr::class, 'show']);
  Route::post('quizes/add', action: [QuizControllerr::class, 'Store']);
  Route::put('quizes/update/{id}', action: [QuizControllerr::class, 'update']);
  Route::get('quizes/delete/{id}', action: [QuizControllerr::class, 'destroy']);

  // students 
  Route::get('students', [StudentController::class, 'index']);
  Route::get('students/show/{id}', [StudentController::class, 'show']);
  Route::post('students/add', [StudentController::class, 'Store']);
  Route::put('students/update/{id}', [StudentController::class, 'update']);
  Route::get('students/delete/{id}', [StudentController::class, 'destroy']);

  //section controller
  Route::get('section/lessons', [SectionController::class, 'index']);


  //Review 
  Route::get('reviews', [Review::class, 'index']);
  Route::get('reviews/show/{id}', [Review::class, 'show']);
  Route::post('reviews/add', [Review::class, 'store']);
  Route::get('reviews/{id}', [Review::class, 'update']);
  Route::get('reviews/delete/{id}', [Review::class, 'destroy']);



  // course controller
  Route::get('courses', [CourseControllerr::class, 'index']);
  Route::get('courses/all', [CourseControllerr::class, 'all']);
  Route::get('courses/show/{id}', action: [CourseControllerr::class, 'show']);
  Route::post('courses/add', action: [CourseControllerr::class, 'Store']);
  Route::put('courses/update/{id}', action: [CourseControllerr::class, 'update']);
  Route::get('courses/delete/{id}', action: [CourseControllerr::class, 'destroy']);
  // category 
  Route::get(uri: 'categories', action: [CategoryControllerr::class, 'index']);

  // certificate 
  Route::get('certificate', action: [CertificateControllerr::class, 'index']);
  Route::get('certificate/show/{id}', action: [CertificateControllerr::class, 'show']);
  Route::post('certificate/add', action: [CertificateControllerr::class, 'Store']);
  Route::put('certificate/update/{id}', action: [CertificateControllerr::class, 'update']);


  // Lessons 
  Route::get('lessons', [Lesson::class, 'index']);
  Route::get('lessons/show/{id}', action: [Lesson::class, 'show']);
  Route::post('lessons/add', action: [Lesson::class, 'Store']);
  Route::put('lessons/update/{id}', action: [Lesson::class, 'update']);
  Route::get('lessons/delete/{id}', action: [Lesson::class, 'destroy']);

  // Quizes 
  Route::get('quizes', action: [QuizControllerr::class, 'index']);
  Route::post('quizes/add', action: [QuizControllerr::class, 'Store']);
  Route::put('quizes/update/{id}', action: [QuizControllerr::class, 'update']);

  //Notifications 


Route::get('/notifications', [NotificationController::class, 'getNotifications']);
Route::get('/notifications/unread', [NotificationController::class, 'getUnreadNotifications']);
Route::get('/notifications/{id}', [NotificationController::class, 'getNotificationDetails']);
Route::post('/notifications/{id}/read', [NotificationController::class, 'markAsRead']);


// Instructor use App\Http\Controllers\InstructorController;
Route::get( 'instructors',[InstructorController::class, 'index'] );
Route::get('instructors/show/{id}', action: [InstructorController::class, 'show']);
Route::post('instructors/add', action: [InstructorController::class, 'Store']);
Route::put('instructors/update/{id}', action: [InstructorController::class, 'update']);
Route::get('instructors/delete/{id}', action: [InstructorController::class, 'destroy']);
Route::get('instructors/{id}/categories', [InstructorController::class, 'categories']);
Route::get('instructors/{id}/courses', [InstructorController::class, 'courses']);


});





