<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStudentsParentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students_parents', function (Blueprint $table) {
            $table->integer('student_id')->unsigned();

            $table->integer('parent_id')->unsigned();
        
            $table->foreign('student_id')->references('code_Massar')->on('students')
        
                ->onDelete('cascade');
        
            $table->foreign('parent_id')->references('id')->on('family')
        
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students_parents');
    }
}
