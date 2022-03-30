<?php

namespace App\Http\Controllers;
use App\Family;
use App\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FamilyController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
    
     public function index()
     {
     
       $family = Family::all();
       return response()->json($family);
     }

     public function create(Request $request)
     { 
        $family=new Family();
        $family->code_Massar = $request->code_Massar;
        $family->firstName=$request->firstName;
        $family->lastName=$request->lastName;
        $family->address=$request->address;
        $family->cin=$request->cin;
        $family->phoneNumber=$request->phoneNumber;
        $family->image=$request->image;
       $family->save();
        /**
       * $resultat=DB::select('select id from family where cin=?',[$cin]);
       * $studentfamily->parent_id = $resultat;
       * $studentfamily->save();
         *   return response()->json($studentfamily);
     */

       return response()->json($family);
   

     }

     public function show($id)
     {
        $family = Family::find($id);
        return response()->json($family);
     }

     public function update(Request $request, $id)
     { 
        $family= Family::find($id);
        $family->firstName=$request->firstName;
        $family->lastName=$request->lastName;
        $family->address=$request->address;
        $family->cin=$request->cin;
        $family->phoneNumber=$request->phoneNumber;
        $family->image=$request->image;
        $family->save();
        return response()->json($family);
     }
     public function getStudentFamily()
     {
         $familyP = DB::select('select P.firstName  ,P.lastName  ,P.image , S.lastName,S.firstName,S.image,S.niveau,P.cin,P.code_Massar
         from students S,family P
         where P.code_Massar=S.code_Massar');
         return  $familyP;

        
     }
     public function destroy($id)
     {
        $family = Family::find($id);
        $family->delete();
        return response()->json('parent removed successfully');
     }
   
}
