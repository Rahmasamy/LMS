<?php

namespace Database\Seeders;

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
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
      
        $instructorRole = Role::firstOrCreate(['name' => 'instructor']);
        $studentRole = Role::firstOrCreate(['name' => 'student']);
       
        // Create a user and assign a role
        $user = User::create([
            'name' => 'Rahma Samy',
            'email' => 'rahmasamy949@gmail.com',
            'password' => bcrypt('Rahmasamy123#$'), // Use a secure password
        ]);

        // Assign role to the user
        $userrole=$user->assignRole($adminRole->name); 
        // echo $userrole;
         $user->assignRole($instructorRole); 
        $userrole=$user->assignRole($studentRole->name); 
    }
}
