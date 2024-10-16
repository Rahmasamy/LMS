<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Course;
use App\Models\Review as ModelsReview;
use Illuminate\Http\Request;

class Review extends Controller
{
    //
    use apiResponseTrait, checkApi, AuthStudentInstAdmin;
    public function index(Request $request)
    {
        //
        $this->authorizeRole($request);
        $Reviews = ModelsReview::all();

        return $this->checkRequest($Reviews, 200);



    }
    public function show(Request $request, $id)
    {
        $this->authorizeRole($request);
        $review = ModelsReview::find($id);
        return $this->checkRequest($review, 200);

    }

    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'course_id' => 'required|integer|exists:courses,id',
            'student_id' => 'required|integer|exists:students,id',
            'review' => 'required|string',
        ]);
    
        $review = ModelsReview::create($validatedData);
       
        return $this->checkRequest($review, 200);

    }
    public function update(Request $request, $id)
    {
        $review = ModelsReview::find($id);
        if ($review) {

            $validatedData = $request->validated();
            $review->update($validatedData);
            return $this->checkRequest($review, 200);
        }
        return $this->checkRequest('not_found review', 400);
    }

    public function destroy(Request $request, $id)
    {

        $review = ModelsReview::find($id);
        if ($review) {
            ModelsReview::destroy($id);
            return $this->apiResponce("", "review deleted succesfully", 200);
        }
        return $this->apiResponce(null, "No review with that Id", 404);

    }
    public function getCourseReviews($courseId)
{
    $course=Course::find($courseId);
      
    return response()->json($course-> Reviews);
}
public function getReviewsByUserId($userId)
{
    $reviews = ModelsReview::where('student_id', $userId)->with('course')->get();

    return response()->json($reviews);
}
public function getReviewsByInstructorId($userId)
{
    $reviews = ModelsReview::where( 'instructor_id', $userId)->with('course')->get();

    return response()->json($reviews);
}
public function getReviewsByCourseId($course_id)
{

    $reviews = ModelsReview::where('course_id', $course_id)->get();
    if ($reviews->isEmpty()) {
        return response()->json(['message' => 'No reviews found for this course'], 404);
    }
    return response()->json($reviews, 200);
}

}
