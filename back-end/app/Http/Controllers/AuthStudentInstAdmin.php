<?php 
namespace App\Http\Controllers;
use Illuminate\Http\Request;
trait AuthStudentInstAdmin {
    public function authorizeRole(Request $request){
        if (!$request->user()->hasRole(['admin', 'instructor','student'])) {
            abort(403, 'Unauthorized');
        }

    }
    public function authAdminInst(Request $request){
        if (!$request->user()->hasRole(['admin', 'instructor'])) {
            abort(403, 'Unauthorized');
        }

    }
    public function authAdmin(Request $request){
        if (!$request->user()->hasRole(['admin'])) {
            abort(403, 'Unauthorized');
        }

    }
}