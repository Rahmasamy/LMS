<?php

namespace App\Http\Controllers;

use App\Http\Requests\SectionRequest;
use App\Models\Section;
use Illuminate\Http\Request;

class SectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    use apiResponseTrait, checkApi, AuthStudentInstAdmin;
    public function index(Request $request)
    {

        $this->authorizeRole($request);
        $courses = Section::all();
        return $this->checkRequest($courses, 200);

    }

    public function getlesson(Request $request)
    {
        //
        $this->authorizeRole($request);
        $student = Section::find(1);

        echo $student->Lessons()->get();



    }

    public function show(Request $request, $id)
    {
        $this->authorizeRole($request);
        $course = Section::find($id);

        return $this->checkRequest($course, 200);
    }


    public function Store(SectionRequest $request)
    {
        $this->authAdminInst($request);
        $validatedData = $request->validated();
        $course = Section::create($validatedData);
        return $this->checkRequest($course, 201);
    }
    public function update(SectionRequest $request, $id)
    {
        $this->authAdminInst(request: $request);
        $validatedData = $request->validated();
        $course = Section::find($id);
        if ($course) {
            $course->update($validatedData);
            return $this->apiResponce($course, "ok", 201);
        }

        return $this->apiResponce(null, "No Section with this id ", statusCode: 400);

    }
    public function destroy(Request $request, $id)
    {
        $this->authAdmin($request);
        $course = Section::find($id);
        if ($course) {
            Section::destroy($id);
            return $this->apiResponce("", "course deleted succesfully", 200);
        }
        return $this->apiResponce(null, "No course with that Id", 404);

    }
    public function sections(Request $request, $id)
    {
        $this->authAdminInst($request);
        $section = Section::find($id);

        return response()->json($section->sections);
    }
}
