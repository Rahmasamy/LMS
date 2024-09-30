<?php

namespace App\Http\Controllers;

use App\Models\Category;

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

        $validatedData = $request->validated();
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
        return $this->checkRequest(null, 'not_found review', 400);
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

}
