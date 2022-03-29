<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Family extends Model
{
    protected $table = 'family';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstName', 'lastName','address', 'cin','phoneNumber', 'image','code_Massar',
    ];

}