<?php

namespace App\Http\Controllers;
use App\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
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
     
       $students = Student::all();
       return response()->json($students);
     }

     public function create(Request $request)
     {
   
      $student=new Student();
   
     $student->firstName=$request->firstName;
     $student->lastName=$request->lastName;
     $student->date_Nais=$request->date_Nais;
     $student->code_Massar=$request->code_Massar;
     $student->niveau=$request->niveau;
     $student->image=$request->image;
     $student->save();
       return response()->json($student);
     }

     public function show($id)
     {
        $student = Student::find($id);
        return response()->json($student);
     }

     public function update(Request $request, $id)
     { 
        $student= Student::find($id);
            $student->firstName=$request->firstName;
            $student->lastName=$request->lastName;
            $student->date_Nais=$request->date_Nais;
            $student->code_Massar=$request->code_Massar;
            $student->niveau=$request->niveau;
            $student->image=$request->image;
            $student->save();
            return response()->json($student);
     }

     public function destroy($id)
     {
        $student = Student::find($id);
        $student->delete();
        return response()->json('Student removed successfully');
     }
   
}
