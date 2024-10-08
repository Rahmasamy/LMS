<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Enrollment;
use App\Models\Student;
use Session;
use Stripe;



class StripePaymentController extends Controller
{

    // public function stripePost(Request $request)
    // {

    //    try {

    //         $request->validate([
    //             'stripeToken' => 'required',
    //             'course_id' => 'required|exists:courses,id',
    //             'student_id' => 'required|exists:students,id',
    //             'billing_details.address.city' => 'required|string',
    //             'billing_details.address.country' => 'required|string',
    //             'billing_details.address.line1' => 'required|string',
    //             'billing_details.address.postal_code' => 'required|string',
    //             'billing_details.email' => 'required|email',
    //             'billing_details.name' => 'required|string',
    //             'billing_details.phone' => 'required|string',
    //         ]);
        
    //         $course = Course::findOrFail($request->course_id);
    //         $studentId = $request->student_id;

    //         // Set the Stripe API secret key
    //         Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

    //         // Calculate the amount based on course price
    //         $amount = $course->price * 100;

    //         // Create a charge
    //         $charge = Stripe\Charge::create([
    //             "amount" => $amount,  
    //             "currency" => "usd",
    //             "source" => $request->stripeToken,
    //             "description" => "Payment for course: " . $course->title
    //         ]);

    //         // If payment is successful, create an enrollment record
    //         Enrollment::create([
    //             'student_id' => $studentId,
    //             'course_id' => $course->id,
    //             'date_enrolled' => now(),
    //             'progress' => 0, 
    //             'grade' => null, 
    //         ]);

    //         // Return success response
    //         return response()->json([
    //             'success' => true,
    //             'message' => 'Payment successful and enrollment completed!',
    //             'charge' => $charge
    //         ], 200);

    //     } catch (\Exception $e) {
    //         // If error occurs, return an error response
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'Payment failed!',
    //             'error' => $e->getMessage()
    //         ], 500);
    //     }
    // }
   
   
    public function stripePost(Request $request)
    {
        try {
            // Validate the request
            $request->validate([
                'stripeToken' => 'required',
                'course_id' => 'required|exists:courses,id',
                'student_id' => 'required|exists:students,id',
                'billing_details.address.city' => 'required|string',
                'billing_details.address.country' => 'required|string',
                'billing_details.address.line1' => 'required|string',
                'billing_details.address.postal_code' => 'required|string',
                'billing_details.email' => 'required|email',
                'billing_details.name' => 'required|string',
                'billing_details.phone' => 'required|string',
            ]);
    
            // Find the course
            $course = Course::findOrFail($request->course_id);
            $studentId = $request->student_id;
    
            // Set the Stripe API secret key
            \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
    
            // Calculate the amount based on course price
            $amount = $course->price * 100;  // Convert to cents
    
            // Create a PaymentIntent with a token (tok_visa for testing)
            $paymentIntent = \Stripe\PaymentIntent::create([
                "amount" => $amount,
                "currency" => "usd",
                "payment_method" => $request->stripeToken, // Use payment_method for PaymentIntent
                "description" => "Payment for course: " . $course->title,
                "receipt_email" => $request->billing_details['email'],
                "metadata" => [
                    'student_id' => $studentId,
                    'course_id' => $course->id
                ],
                "shipping" => [
                    "name" => $request->billing_details['name'],
                    "address" => [
                        "city" => $request->billing_details['address']['city'],
                        "country" => $request->billing_details['address']['country'],
                        "line1" => $request->billing_details['address']['line1'],
                        "line2" => $request->billing_details['address']['line2'] ?? '',  // Optional
                        "postal_code" => $request->billing_details['address']['postal_code'],
                        "state" => $request->billing_details['address']['state'] ?? '',  // Optional
                    ]
                ]
            ]);
    
            // Confirm the PaymentIntent
            $paymentIntent->confirm();
    
            // If payment is successful, create an enrollment record
            Enrollment::create([
                'student_id' => $studentId,
                'course_id' => $course->id,
                'date_enrolled' => now(),
                'progress' => 0,
                'grade' => null,
            ]);
    
            // Return success response with PaymentIntent details
            return response()->json([
                'success' => true,
                'message' => 'Payment successful and enrollment completed!',
                'paymentIntent' => $paymentIntent
            ], 200);
    
        } catch (\Exception $e) {
            // If an error occurs, return an error response
            return response()->json([
                'success' => false,
                'message' => 'Payment failed!',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    
}

/*
class StripePaymentController extends Controller
{
    public function stripePost(Request $request)
    {
       try {

            // Set the Stripe API secret key
            Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));


            // Create a charge
            $charge = Stripe\Charge::create([
                "amount" => 100 * 150,  // we will add amount accoding to the price of course
                "currency" => "usd",
                "source" => $request->stripeToken, // Token generated by Stripe in the frontend
                "description" => "Test payment via API"
            ]);
            

            // If successful, return a success response
            return response()->json([
                'success' => true,
                'message' => 'Payment successful!',
                'charge' => $charge
            ], 200);


        } catch (\Exception $e) {
            // If error occurs, return an error response
            return response()->json([
                'success' => false,
                'message' => 'Payment failed!',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
    */