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
            'first_name' => 'ahmed',
            'last_name' => 'hussein',
            'phone_number' => '012112134300',
            'email' => 'ahhussein000@gmail.com',
            'password' => bcrypt('123123123'), // Use a secure password
        ]);
        $admin1->assignRole($adminRole);


        $admin2 = User::create([
            'first_name' => 'Ghad',
            'last_name' => 'hussein',
            'phone_number' => '010123123654',
            'email' => '',
            'password' => bcrypt('123123123'),
        ]);
        $admin2->assignRole($adminRole);



        // Add 10 Instructors
        $instructor1 = User::create([
            'first_name' => 'Rahma',
            'last_name' => 'hussein',
            'phone_number' => '010109123120',
            'email' => 'rahmasamy949@gmail.com',
            'password' => bcrypt('123123123'),
        ]);
        $instructor1->assignRole($instructorRole);

        // $instructor2 = User::create([
        //     'first_name' => 'Mohamed',
        //     'last_name' => 'hussein',
        //     'phone_number' => '01102312320',
        //     'email' => 'ahmed.hussein201150@gmail.com',
        //     'password' => bcrypt('123123123'),
        // ]);
        // $instructor2->assignRole($instructorRole);

        // $instructor3 = User::create([
        //     'first_name' => 'Mahmoud',
        //     'last_name' => 'hussein',
        //     'phone_number' => '01012312120',
        //     'email' => 'ahmed.hussein201150@gmail.com',
        //     'password' => bcrypt('123123123'),
        // ]);
        // $instructor3->assignRole($instructorRole);

        // $instructor4 = User::create([
        //     'first_name' => 'rahma',
        //     'last_name' => 'hussein',
        //     'phone_number' => '01012323120',
        //     'email' => 'rahmasamy20011@gmail.com',
        //     'password' => bcrypt('123123123'),
        // ]);
        // $instructor4->assignRole($instructorRole);

        $instructor5 = User::create([
            'first_name' => 'Hager',
            'last_name' => 'hussein',
            'phone_number' => '020123123120',
            'email' => 'hager@gmail.com',
            'password' => bcrypt('123123123'),
        ]);
        $instructor5->assignRole($instructorRole);

        $instructor6 = User::create([
            'first_name' => 'gehad',
            'last_name' => 'hussein',
            'phone_number' => '050123123120',
            'email' => 'gehadgallo@gmail.com',
            'password' => bcrypt('123123123'),
        ]);
        $instructor6->assignRole($instructorRole);

        // $instructor7 = User::create([
        //     'first_name' => 'Sara',
        //     'last_name' => 'hussein',
        //     'phone_number' => '000123123120',
        //     'email' => 'sara@gmail.com',
        //     'password' => bcrypt('123123123'),
        // ]);
        // $instructor7->assignRole($instructorRole);

        // $instructor8 = User::create([
        //     'first_name' => 'Amal',
        //     'last_name' => 'hussein',
        //     'phone_number' => '013012312310',
        //     'email' => 'amal@gmail.com',
        //     'password' => bcrypt('123123123'),
        // ]);
        // $instructor8->assignRole($instructorRole);

        // $instructor9 = User::create([
        //     'first_name' => 'Hoda',
        //     'last_name' => 'hussein',
        //     'phone_number' => '019123123120',
        //     'email' => 'hoda@gmail.com',
        //     'password' => bcrypt('123123123'),
        // ]);
        // $instructor9->assignRole($instructorRole);

        // $instructor10 = User::create([
        //     'first_name' => 'Ramadan',
        //     'last_name' => 'hussein',
        //     'phone_number' => '0881231231',
        //     'email' => 'ramadan@gmail.com',
        //     'password' => bcrypt('123123123'),
        // ]);
        // $instructor10->assignRole($instructorRole);



        // Add instructors in the separated table
        $instructor1Addition = Instructor::create([
            'user_id' => $instructor1->id,  // Assigning the user_id of the newly created User
            'rating' => '3.3',
            'describtion' => 'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu',
            'role_id' => 2
        ]);

        // $instructor2Addition = Instructor::create([
        //     'user_id' => $instructor2->id,
        //     'rating' => '4.0',
        //     'describtion' => 'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu',
        //     'role_id' => 2
        // ]);


        // $instructor3Addition = Instructor::create([
        //     'user_id' => $instructor3->id,
        //     'rating' => '1.0',
        //     'describtion' => 'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu',
        //     'role_id' => 2
        // ]);


        // $instructor4Addition = Instructor::create([
        //     'user_id' => $instructor4->id,
        //     'rating' => '4.0',
        //     'describtion' => 'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu',
        //     'role_id' => 2
        // ]);


        $instructor5Addition = Instructor::create([
            'user_id' => $instructor5->id,
            'rating' => '3.0',
            'describtion' => 'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu',
            'role_id' => 2
        ]);


        $instructor6Addition = Instructor::create([
            'user_id' => $instructor6->id,
            'rating' => '4.0',
            'describtion' => 'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu',
            'role_id' => 2
        ]);


        // $instructor7Addition = Instructor::create([
        //     'user_id' => $instructor7->id,
        //     'rating' => '1.5',
        //     'describtion' => 'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu',
        //     'role_id' => 2
        // ]);


        // $instructor8Addition = Instructor::create([
        //     'user_id' => $instructor8->id,
        //     'rating' => '5.0',
        //     'describtion' => 'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu',
        //     'role_id' => 2
        // ]);


        // $instructor9Addition = Instructor::create([
        //     'user_id' => $instructor9->id,
        //     'rating' => '3.0',
        //     'describtion' => 'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu',
        //     'role_id' => 2
        // ]);


        // $instructor10Addition = Instructor::create([
        //     'user_id' => $instructor10->id,
        //     'rating' => '2.0',
        //     'describtion' => 'lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu',
        //     'role_id' => 2
        // ]);





        // Add 2 Students
        $student1 = User::create([
            'first_name' => 'Ali',
            'last_name' => 'hussein',
            'phone_number' => '010123123120',
            'email' => 'ahmed.hussein201150@gmail.com',
            'password' => bcrypt('123123123'),
        ]);
        $student1->assignRole($studentRole);

        $student2 = User::create([
            'first_name' => 'Malek',
            'last_name' => 'hussein',
            'phone_number' => '010123123120',
            'email' => 'rahmasamy20011@gmail.com',
            'password' => bcrypt('123123123'),
        ]);
        $student2->assignRole($studentRole);
    }
}