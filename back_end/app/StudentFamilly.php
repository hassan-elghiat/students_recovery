<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class StudentFamily extends Model
{
    protected $table = 'studentsparents';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'student_id', 'parent_id', 
    ];

}