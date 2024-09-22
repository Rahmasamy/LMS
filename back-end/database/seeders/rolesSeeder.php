<?php

namespace Database\Seeders;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class rolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
       // Create permissions
       $permissions = [
        'create Assignment', 'edit Assignment', 'view Assignment', 'delete Assignment',
        'create Quiz', 'edit Quiz', 'view Quiz', 'delete Quiz',
        'create Lessons', 'edit Lessons', 'view Lessons', 'delete Lessons',
        'create Sections', 'edit Sections', 'view Sections', 'delete Sections',
    ];

    foreach ($permissions as $permission) {
        Permission::firstOrCreate(['name' => $permission]);
    }

    // Create roles
    $admin = Role::firstOrCreate(['name' => 'admin']);
    $instructor = Role::firstOrCreate(['name' => 'instructor']);
    $student = Role::firstOrCreate(['name' => 'student']);

    // Assign permissions to roles
    $admin->givePermissionTo($permissions);

    $instructor->givePermissionTo([
        'create Assignment', 'edit Assignment', 'view Assignment',
        'create Quiz', 'edit Quiz', 'view Quiz',
        'create Lessons', 'edit Lessons', 'view Lessons',
        'create Sections', 'edit Sections', 'view Sections',
    ]);

    $student->givePermissionTo(['view Assignment', 'view Quiz', 'view Lessons', 'view Sections']);
    }
}
