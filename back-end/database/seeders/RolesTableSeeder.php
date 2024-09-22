<?php 
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    public function run()
    {
        // Create permissions for Assignments, Quizzes, Lessons, etc.
        $permissions = [
            'create Assignment', 'edit Assignment', 'view Assignment', 'delete Assignment',
            'create Quiz', 'edit Quiz', 'view Quiz', 'delete Quiz',
            'create Lessons', 'edit Lessons', 'view Lessons', 'delete Lessons',
            'create Sections', 'edit Sections', 'view Sections', 'delete Sections',
        ];

        // Loop to create each permission if it doesn't exist
        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }

        // Create roles
        $admin = Role::firstOrCreate(['name' => 'admin']);
        $instructor = Role::firstOrCreate(['name' => 'instructor']);
        $student = Role::firstOrCreate(['name' => 'student']);

        // Admin has all permissions
        $admin->givePermissionTo($permissions);

        // Instructor has specific permissions
        $instructor->givePermissionTo([
            'create Assignment', 'edit Assignment', 'view Assignment',
            'create Quiz', 'edit Quiz', 'view Quiz',
            'create Lessons', 'edit Lessons', 'view Lessons',
            'create Sections', 'edit Sections', 'view Sections',
        ]);

        // Students may only view certain things
        $student->givePermissionTo(['view Assignment', 'view Quiz', 'view Lessons', 'view Sections']);
    }
}
