<?php

namespace Database\Seeders;

use App\Models\Instructor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        // $adminRole = Role::firstOrCreate(['name' => 'admin']);
      
        // $instructorRole = Role::firstOrCreate(['name' => 'instructor']);
        // $studentRole = Role::firstOrCreate(['name' => 'student']);
       
        // // Create a user and assign a role
        // $user = User::create([
        //     'name' => 'Omar',
        //     'email' => 'omar@eeeee.eeee',
        //     'password' => bcrypt('123123123'), // Use a secure password
        // ]);

        // // Assign role to the user
        // $userrole=$user->assignRole($adminRole->name); 
        // // echo $userrole;
        //  $user->assignRole($instructorRole); 
        // $userrole=$user->assignRole($studentRole->name); 
       
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $instructorRole = Role::firstOrCreate(['name' => 'instructor']);
        $studentRole = Role::firstOrCreate(['name' => 'student']);



        // Add 2 Admins
        $admin1 = User::create([
            'first_name' => 'Gehad',
            'last_name' => 'Gallo',
            'phone_number'=>'0021232412',
            'email' => 'gehadgallo@gmail.com',
            'password' => bcrypt('123123123'), // Use a secure password
        ]);
        $admin1->assignRole($adminRole);


        $admin2 = User::create([
            'first_name' => 'Rahma',
            'last_name' => 'Samy',
            'phone_number'=>'0021232412',
           
            'email' => 'rahmasamy949@gmail.com',
            'password' => bcrypt('123123123'),
        ]);
        $admin2->assignRole($adminRole);



        // Add 1 Instructor
        $instructor1 = User::create([
            'first_name' => 'Ahmed',
            'last_name' => 'Hussien',
            'phone_number'=>'0021232412',
            'email' => 'ahhussein000@gmail.com',
            'password' => bcrypt('123123123'),
        ]);
        $instructor1->assignRole($instructorRole);

      

        // Add instructors in the separated table
        $instructor1Addition = Instructor::create([
            'user_id' => $instructor1->id,  // Assigning the user_id of the newly created User
            'rating' => '3.3',
            'role_id' => 2
        ]);

      

        // Add 2 Students
        $student1 = User::create([
            'first_name' => 'Ali',
            'last_name' => 'Hussien',
            'phone_number'=>'0021232412',
            'email' => 'ahmed.hussein201150@gmail.com',
            'password' => bcrypt('123123123'),
        ]);
        $student1->assignRole($studentRole);

        $student2 = User::create([
            'first_name' => 'Rawan',
            'last_name' => 'Samy',
            'phone_number'=>'0021232412',
           
            'email' => 'rahmasamy20011@gmail.com',
            'password' => bcrypt('123123123'),
        ]);
        $student2->assignRole($studentRole);
    }
}
