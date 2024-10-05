<?php

namespace App\Http\Controllers;

use App\Http\Requests\CourseRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Course;
use Illuminate\Http\JsonResponse;

class CourseControllerr extends Controller
{
    //
    use apiResponseTrait, checkApi, AuthStudentInstAdmin;
    public function index()
    {
        //
        $student = Student::find(1);

        return $student->courses()->get();



    }
    public function all(Request $request)
    {


        $this->authorizeRole($request);
        $courses = Course::all();


        return $this->checkRequest($courses, 200);

    }

    public function getAllCourses(Request $request)
    {
        $perPage = $request->input('per_page', 10);
        $courses = Course::paginate($perPage);

        return $this->checkRequest($courses->toJson(), 200);
    }

    public function show(Request $request, $id)
    {
        $this->authorizeRole($request);
        $course = Course::find($id);

        return $this->checkRequest($course, 200);
    }


    public function Store(CourseRequest $request)
    {
        $courseId = Course::find($request->id);
        $this->authAdminInst($request);
        $validatedData = $request->validated();
        $course = Course::create($validatedData);
        return $this->checkRequest($course, 201);
    }
    public function update(CourseRequest $request, $id)
    {
        $this->authAdminInst($request);
        $validatedData = $request->validated();
        $course = Course::find($id);
        if ($course) {
            $course->update($validatedData);
            return $this->apiResponce($course, "ok", 201);
        }

        return $this->apiResponce(null, "No Course with this id ", statusCode: 400);

    }
    public function destroy(Request $request, $id)
    {
        $this->authAdmin($request);
        $course = Course::find($id);
        if ($course) {
            Course::destroy($id);
            return $this->apiResponce("", "course deleted succesfully", 200);
        }
        return $this->apiResponce(null, "No course with that Id", 404);

    }
    public function sections(Request $request, $id)
    {
        $this->authAdminInst($request);
        $section = Course::find($id);

        return response()->json($section->sections);
    }
    public function Reviews(Request $request, $id)
    {
        $this->authAdminInst($request);
        $course = Course::find($id);


        return response()->json($course->Reviews);
    }
    public function quizes(Request $request, $id)
    {
        $this->authAdminInst($request);
        $course = Course::find($id);


        return response()->json($course->Quizes);
    }
    public function Assigments(Request $request, $id)
    {
        $this->authAdminInst($request);
        $course = Course::find($id);


        return response()->json($course->Assigments);
    }
    public function Certificate(Request $request, $id)
    {
        $this->authAdminInst($request);
        $course = Course::find($id);

        return response()->json($course->Certificats);
    }
    // public function getStudentsByCourse($courseId)
    // {

    //     $course = Course::find($courseId);
    //     echo $course;
    //     if (!$course) {
    //         return response()->json(['message' => 'Course not found'], 404);
    //     }
    //     return response()->json($course->students, 200);
    // }
    // public function getStudentsByCourse($courseId)
    // {
    //     $course = Course::with('students')->find($courseId); // Use with to eager load students

    //     if (!$course) {
    //         return response()->json(['message' => 'Course not found'], 404);
    //     }

    //     return response()->json($course->students, 200);
    // }
    public function getCourseWithLessons($courseId): JsonResponse
    {


        $course = Course::with('sections.lessons')->find($courseId);
        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }

        return response()->json($course, 200);
    }
    public function getRecentCourses()
{
 
    $courses = Course::orderBy('created_at', 'desc')->limit(5)->get();

    return $this->checkRequest($courses, 200);

}
}
