<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Section;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class sectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function courseِAngular($num)
    {
        $courseTitle = 'Learning Angular from Zero to Hero';  // Course title

        $sections = [
            ["Introduction to Angular and Setting Up Your Environment", "Introduction to Angular: What it is and why it's popular. Understanding the Angular ecosystem and its core features."],
            ["Angular Components and Data Binding", "Learn about Angular components, which are the building blocks of any Angular application. Dive into data binding and how it connects the view with the logic."],
            ["Directives and Pipes", "Discover how Angular allows you to manipulate the DOM with directives and format data using pipes."],
            ["Services, Dependency Injection, and HTTP Client", "Explore Angular services for logic reusability and learn how to interact with APIs using HttpClient."],
            ["Angular Routing and Navigation", "Learn how to build Single Page Applications (SPAs) with Angular’s routing system."],
            ["Forms, Validation, and State Management", "Master handling user input with Angular forms and state management."]
        ];

        // Loop through each section and create it in the database
        for ($i = 0; $i < count($sections); $i++) {
            $title = $sections[$i][0];  // Get section title
            $description = $sections[$i][1];  // Get section description

            Section::create([
                'title' => $title,
                'description' => $description,
                'course_id' => $num
            ]);
        }
    }

    public function courseReact($num)
    {
        $courseTitle = 'Master React';

        $sections = [
            ["Introduction to React", "Learn the basics of React, its component structure, and why it's popular."],
            ["JSX and Components", "Understand JSX syntax and how to create components."],
            ["State and Props", "Learn how to manage data flow in React using state and props."],
            ["React Hooks", "Introduction to hooks and how they simplify state and lifecycle management."],
            ["React Router", "Learn about routing and navigation within React applications."],
            ["Forms and Validation in React", "Learn how to handle user input and form validation in React."]
        ];

        for ($i = 0; $i < count($sections); $i++) {
            $title = $sections[$i][0];
            $description = $sections[$i][1];

            Section::create([
                'title' => $title,
                'description' => $description,
                'course_id' => $num
            ]);
        }
    }

    public function coursePython($num)
    {
        $courseTitle = 'Learning Python from Zero to Hero';

        $sections = [
            ["Introduction to Python", "Learn the basics of Python, including syntax and structure."],
            ["Data Types and Variables", "Explore Python data types and how to work with variables."],
            ["Control Flow", "Learn how to use loops and conditionals in Python."],
            ["Functions and Modules", "Understand how to define and use functions and import modules."],
            ["Object-Oriented Programming in Python", "Dive into OOP concepts like classes and inheritance."],
            ["File Handling and Exception Handling", "Learn how to work with files and handle errors in Python."]
        ];

        for ($i = 0; $i < count($sections); $i++) {
            $title = $sections[$i][0];
            $description = $sections[$i][1];

            Section::create([
                'title' => $title,
                'description' => $description,
                'course_id' => $num
            ]);
        }
    }

    public function courseVue($num)
    {
        $courseTitle = 'Learning Vue from Zero to Hero';

        $sections = [
            ["Introduction to Vue.js", "Learn the fundamentals of Vue.js and why it's a powerful frontend framework."],
            ["Vue Components and Directives", "Understand how to create reusable components and use built-in directives."],
            ["Vue Data Binding", "Learn how Vue's reactive system connects the model with the view."],
            ["Vue Router", "Learn how to navigate between pages using Vue Router."],
            ["State Management with Vuex", "Introduction to Vuex for centralized state management."],
            ["Forms and Validation in Vue.js", "Handle user input and validate forms in Vue applications."]
        ];

        for ($i = 0; $i < count($sections); $i++) {
            $title = $sections[$i][0];
            $description = $sections[$i][1];

            Section::create([
                'title' => $title,
                'description' => $description,
                'course_id' => $num
            ]);
        }
    }

    public function courseLaravel($num)
    {
        $courseTitle = 'Learning Laravel from Zero to Hero';

        $sections = [
            ["Introduction to Laravel", "Learn what Laravel is, why it's popular, and how to set up a project."],
            ["Routing and Controllers", "Understand how to define routes and controllers in Laravel."],
            ["Models and Eloquent ORM", "Learn how to interact with databases using Eloquent ORM."],
            ["Blade Templating Engine", "Explore Blade for building dynamic views in Laravel."],
            ["Laravel Authentication", "Learn how to implement authentication and authorization in Laravel."],
            ["RESTful APIs with Laravel", "Create RESTful APIs and handle API requests in Laravel."]
        ];

        for ($i = 0; $i < count($sections); $i++) {
            $title = $sections[$i][0];
            $description = $sections[$i][1];

            Section::create([
                'title' => $title,
                'description' => $description,
                'course_id' => $num
            ]);
        }
    }


    public function run(): void
    {


        $this->courseِAngular(1);
        $this->courseReact(2);
        $this->courseReact(3);
        $this->coursePython(4);
        $this->coursePython(5);
        $this->courseVue(6);
        $this->courseVue(7);
        $this->courseLaravel(8);
        $this->courseLaravel(9);
        $this->courseLaravel(10);



    }
}
