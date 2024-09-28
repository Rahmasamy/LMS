<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use App\Models\Course;
use Illuminate\Http\Request;

class CategoryControllerr extends Controller
{
    //
    use apiResponseTrait, checkApi, AuthStudentInstAdmin;
    public function index(Request $request)
    {
        $this->authorizeRole($request);
        $categories = Category::all();

        return $this->checkRequest($categories, 200);

    }

    public function show(Request $request, $id)
    {
        $this->authorizeRole($request);
        $category = Category::find($id);
        return $this->checkRequest($category, 200);
    }

    public function Store(CategoryRequest $request)
    {
        $this->authAdminInst($request);
        $validatedData = $request->validated();
        $category = Category::create($validatedData);
        return $this->checkRequest($category, 201);
    }
    public function update(CategoryRequest $request, $id)
    {
        $this->authAdminInst($request);
        $validatedData = $request->validated();
        $category = Category::find($id);
        if ($category) {
            $category->update($validatedData);
            return $this->apiResponce($category, "ok", 201);
        }

        return $this->apiResponce(null, "No Category with this id ", statusCode: 400);

    }
    public function destroy(Request $request, $id)
    {
        $this->authAdmin($request);
        $category = Category::find($id);
        if ($category) {
            Category::destroy($id);
            return $this->apiResponce("", "Category deleted succesfully", 200);
        }
        return $this->apiResponce(null, "No Category with that Id", 404);

    }
    public function getCoursesOfCategory(Request $request, $id)
    {
        $this->authorizeRole($request);
        $category = Category::find($id);

        return response()->json($category->Courses);
    }
}
