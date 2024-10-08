<?php

namespace Database\Seeders;

use App\Models\Quiz;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
       
        $quizId = DB::table('quizes')->insertGetId([
            'course_id' => 1,
            'title' => 'Angular Fundamentals Quiz',
            'total_marks' => 100,
            'duration' => 30, 
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
         // Insert 10 questions with answers for the Angular quiz
         DB::table('questions')->insert([
            [
                'quize_id' => $quizId,
                'question' => 'What is Angular?',
                'correct_answer' => 'A front-end web application framework',
                'options' => json_encode([
                    'A programming language',
                    'A back-end framework',
                    'A front-end web application framework',
                    'A database management system'
                ]),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'quize_id' => $quizId,
                'question' => 'Which directive is used for two-way data binding in Angular?',
                'correct_answer' => 'ngModel',
                'options' => json_encode([
                    'ngBind',
                    'ngModel',
                    'ngBindModel',
                    'ngTwoWay'
                ]),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'quize_id' => $quizId,
                'question' => 'Which lifecycle hook is called after data-bound properties are initialized in Angular?',
                'correct_answer' => 'ngOnInit',
                'options' => json_encode([
                    'ngInit',
                    'ngOnInit',
                    'ngAfterInit',
                    'ngStart'
                ]),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'quize_id' => $quizId,
                'question' => 'Which file contains the root module definition in an Angular application?',
                'correct_answer' => 'app.module.ts',
                'options' => json_encode([
                    'app.component.ts',
                    'main.ts',
                    'index.html',
                    'app.module.ts'
                ]),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'quize_id' => $quizId,
                'question' => 'Which decorator is used to define a component in Angular?',
                'correct_answer' => '@Component',
                'options' => json_encode([
                    '@Directive',
                    '@NgModule',
                    '@Component',
                    '@Pipe'
                ]),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'quize_id' => $quizId,
                'question' => 'What is the purpose of Angular’s `HttpClientModule`?',
                'correct_answer' => 'To make HTTP requests',
                'options' => json_encode([
                    'To manage routing',
                    'To handle form validation',
                    'To make HTTP requests',
                    'To define custom pipes'
                ]),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'quize_id' => $quizId,
                'question' => 'What is the default change detection strategy in Angular?',
                'correct_answer' => 'Default',
                'options' => json_encode([
                    'OnPush',
                    'OnInit',
                    'Default',
                    'Always'
                ]),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'quize_id' => $quizId,
                'question' => 'What is the purpose of Angular’s `ngFor` directive?',
                'correct_answer' => 'To iterate over a collection of data',
                'options' => json_encode([
                    'To display a conditional block',
                    'To bind input data to a model',
                    'To create an event listener',
                    'To iterate over a collection of data'
                ]),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'quize_id' => $quizId,
                'question' => 'Which Angular CLI command is used to generate a new component?',
                'correct_answer' => 'ng generate component',
                'options' => json_encode([
                    'ng create component',
                    'ng add component',
                    'ng generate component',
                    'ng init component'
                ]),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'quize_id' => $quizId,
                'question' => 'How can you pass data from a parent component to a child component in Angular?',
                'correct_answer' => 'Using @Input decorator',
                'options' => json_encode([
                    'Using @Output decorator',
                    'Using @Input decorator',
                    'Using EventEmitter',
                    'Using a service'
                ]),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]
        ]);
    
    }
}
