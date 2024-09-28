<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use App\Models\User;
use App\Models\Instructor;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $instructorRole = Role::firstOrCreate(['name' => 'instructor']);
        $studentRole = Role::firstOrCreate(['name' => 'student']);
       


        // Add 2 Admins
        $admin1 = User::create([
            'name' => 'Gehad',
            'email' => 'gehadgallo@gmail.com',
            'password' => bcrypt('123123123'), // Use a secure password
        ]);
        $admin1->assignRole($adminRole); 

        $admin2 = User::create([
            'name' => 'Ahmed',
            'email' => 'ahmed@example.com',
            'password' => bcrypt('123123123'),
        ]);
        $admin2->assignRole($adminRole);



        // Add 10 Instructors
        $instructor1 = User::create([
            'name' => 'Rahma',
            'email' => 'rahma@example.com',
            'password' => bcrypt('123123123'),
        ]);
        $instructor1->assignRole($instructorRole);

        $instructor2 = User::create([
            'name' => 'Mohamed',
            'email' => 'mmmmmm@example.com',
            'password' => bcrypt('123123123'),
        ]);
        $instructor2->assignRole($instructorRole);

        $instructor3 = User::create([
            'name' => 'Mahmoud',
            'email' => 'mahmoud@example.com',
            'password' => bcrypt('123123123'),
        ]);
        $instructor3->assignRole($instructorRole);

        $instructor4 = User::create([
            'name' => 'Yousef',
            'email' => 'yosef@example.com',
            'password' => bcrypt('123123123'),
        ]);
        $instructor4->assignRole($instructorRole);

        $instructor5 = User::create([
            'name' => 'Hager',
            'email' => 'hager@example.com',
            'password' => bcrypt('123123123'),
        ]);
        $instructor5->assignRole($instructorRole);

        $instructor6 = User::create([
            'name' => 'Asmaa',
            'email' => 'asmaa@example.com',
            'password' => bcrypt('123123123'),
        ]);
        $instructor6->assignRole($instructorRole);

        $instructor7 = User::create([
            'name' => 'Sara',
            'email' => 'sara@example.com',
            'password' => bcrypt('123123123'),
        ]);
        $instructor7->assignRole($instructorRole);

        $instructor8 = User::create([
            'name' => 'Amal',
            'email' => 'amal@example.com',
            'password' => bcrypt('123123123'),
        ]);
        $instructor8->assignRole($instructorRole);

        $instructor9 = User::create([
            'name' => 'Hoda',
            'email' => 'hoda@example.com',
            'password' => bcrypt('123123123'),
        ]);
        $instructor9->assignRole($instructorRole);

        $instructor10 = User::create([
            'name' => 'Ramadan',
            'email' => 'ramadan@example.com',
            'password' => bcrypt('123123123'),
        ]);
        $instructor10->assignRole($instructorRole);



        // Add instructors in the separated table
        $instructor1Addition = Instructor::create([
            'user_id' => $instructor1->id,  // Assigning the user_id of the newly created User
            'rating' => '3.3',
            'role_id' => 2
        ]);

        $instructor2Addition = Instructor::create([
            'user_id' => $instructor2->id,  
            'rating' => '4.0',
            'role_id' => 2
        ]);


        $instructor3Addition = Instructor::create([
            'user_id' => $instructor3->id,  
            'rating' => '1.0',
            'role_id' => 2
        ]);


        $instructor4Addition = Instructor::create([
            'user_id' => $instructor4->id,  
            'rating' => '4.0',
            'role_id' => 2
        ]);


        $instructor5Addition = Instructor::create([
            'user_id' => $instructor5->id,  
            'rating' => '3.0',
            'role_id' => 2
        ]);


        $instructor6Addition = Instructor::create([
            'user_id' => $instructor6->id,  
            'rating' => '4.0',
            'role_id' => 2
        ]);


        $instructor7Addition = Instructor::create([
            'user_id' => $instructor7->id,  
            'rating' => '1.5',
            'role_id' => 2
        ]);


        $instructor8Addition = Instructor::create([
            'user_id' => $instructor8->id,  
            'rating' => '5.0',
            'role_id' => 2
        ]);


        $instructor9Addition = Instructor::create([
            'user_id' => $instructor9->id,  
            'rating' => '3.0',
            'role_id' => 2
        ]);


        $instructor10Addition = Instructor::create([
            'user_id' => $instructor10->id,  
            'rating' => '2.0',
            'role_id' => 2
        ]);





        // Add 2 Students
        $student1 = User::create([
            'name' => 'Ali',
            'email' => 'ali@example.com',
            'password' => bcrypt('123123123'),
        ]);
        $student1->assignRole($studentRole);

        $student2 = User::create([
            'name' => 'Malek',
            'email' => 'malek@example.com',
            'password' => bcrypt('123123123'),
        ]);
        $student2->assignRole($studentRole);
    }
}