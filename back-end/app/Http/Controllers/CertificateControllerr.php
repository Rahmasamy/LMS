<?php

namespace App\Http\Controllers;

use App\Http\Requests\CertificateRequest;
use App\Models\Certificate;
use Illuminate\Http\Request;

class CertificateControllerr extends Controller
{
    //
    use apiResponseTrait,checkApi,AuthStudentInstAdmin;
    public function index(Request $request)
    {
        //
        $this->authorizeRole($request);
        $certificates=Certificate::all();

        return $this->checkRequest($certificates,200); 
      
       
       
    }
    public function show(Request $request,$id){
        $this->authorizeRole($request);
        $certificates=Certificate::find($id);

        return $this->checkRequest($certificates,200); 
    }


    public function Store(CertificateRequest $request){
        $this->authAdminInst($request);
       $validatedData = $request->validated();
       $certificate=Certificate::create($validatedData);
       return $this->checkRequest($certificate,201); 
    }
    public function update(CertificateRequest $request,$id){
        $this->authAdminInst($request);
        $validatedData = $request->validated();
        $certificates=Certificate::find($id);
        if($certificates){
            $certificates->update($validatedData);
            return $this->apiResponce($certificates, "ok", 201);
        }
       
        return $this->apiResponce(null, "No Certificate with this id ", statusCode: 400); 

    }
    public function destroy(Request $request,$id){
        $this->authAdmin($request);
        $certificates=Certificate::find($id);
        if($certificates){
            Certificate::destroy($id);
            return $this->apiResponce("","course deleted succesfully",200);
        }
        return $this->apiResponce(null,"No Certificate with that Id",404);
      
    }
}
