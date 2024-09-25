<?php

namespace App\Http\Controllers;

use App\Http\Requests\LessonRequest;
use App\Models\Lesson as ModelsLesson;
use Illuminate\Http\Request;

class Lesson extends Controller
{
    //
    use apiResponseTrait, checkApi, AuthStudentInstAdmin;
    public function index(Request $request)
    {
        //
        $this->authorizeRole($request);
        $Lessons = ModelsLesson::all();

        return $this->checkRequest($Lessons, 200);



    }
    public function show(Request $request, $id)
    {
        $this->authorizeRole($request);
        $lesson = ModelsLesson::find($id);

        return $this->checkRequest($lesson, 200);
    }


    public function Store(LessonRequest $request)
    {
        $this->authAdminInst($request);
        $validatedData = $request->validated();
        $lesson = ModelsLesson::create($validatedData);

        return $this->checkRequest($lesson, 201);
    }
    public function update(LessonRequest $request, $id)
    {
        $this->authAdminInst($request);
        $validatedData = $request->validated();
        $lesson = ModelsLesson::find($id);
        if ($lesson) {
            $lesson->update($validatedData);
            return $this->apiResponce($lesson, "ok", 201);
        }

        return $this->apiResponce(null, "No lesson with this id ", statusCode: 400);

    }
    public function destroy(Request $request, $id)
    {
        $this->authAdmin($request);
        $lesson = ModelsLesson::find($id);
        if ($lesson) {
            ModelsLesson::destroy($id);
            return $this->apiResponce("", "lesson deleted succesfully", 200);
        }
        return $this->apiResponce(null, "No lesson with that Id", 404);

    }
}
