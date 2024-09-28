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
            'first_name' => 'Gehad',
            'last_name'=>'gallo',
            'phone_number'=>'01027951655',
            'email' => 'gehadgallo@gmail.com',
            'password' => bcrypt('123123123'), // Use a secure password
        ]);
        $admin1->assignRole($adminRole);


        $admin2 = User::create([
            'first_name' => 'Rahma',
            'last_name'=>'samy',
            'phone_number'=>'01027951655',
          
            'email' => 'rahmasamy949@gmail.com',
            'password' => bcrypt('123123123'),
        ]);
        $admin2->assignRole($adminRole);



        // Add 2 Instructors
        $instructor1 = User::create([
            'first_name' => 'Rahma',
            'last_name'=>'samy',
            'phone_number'=>'01027951655',
            'email' => 'rahmasamy20011@gmail.com',
            'password' => bcrypt('123123123'),
        ]);
        $instructor1->assignRole($instructorRole);

        // $instructor2 = User::create([
        //     'name' => 'Mohamed',
        //     'email' => 'mmmmmm@example.com',
        //     'password' => bcrypt('123123123'),
        // ]);
        // $instructor2->assignRole($instructorRole);

       


        // Add instructors in the separated table
        $instructor1Addition = Instructor::create([
            'user_id' => $instructor1->id,  // Assigning the user_id of the newly created User
            'rating' => '3.3',
            'describtion' =>'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam debitis modi earum explicabo at id! Amet eligendi, qui explicabo odit autem, dolor reiciendis voluptatibus magnam maiores id ipsam molestiae! Ipsam?',
            'role_id' => 2
        ]);

        // $instructor2Addition = Instructor::create([
        //     'user_id' => $instructor2->id,
        //     'rating' => '4.0',
        //     'role_id' => 2
        // ]);


       

        // Add 2 Students
        $student1 = User::create([
            'first_name' => 'Ahmed',
            'last_name'=>'Hussien',
            'phone_number'=>'01027951655',
            'email' => 'ahmed.hussein201150@gmail.com',
            'password' => bcrypt('123123123'),
        ]);
        $student1->assignRole($studentRole);

        $student2 = User::create([
            'first_name' => 'Ahmed',
            'last_name'=>'Hussien',
            'phone_number'=>'01027951655',
            'email' => 'ahhussein000@gmail.com',
            'password' => bcrypt('123123123'),
        ]);
        $student2->assignRole($studentRole);
    }
}

