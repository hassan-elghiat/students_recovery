<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->group(['prefix'=>'api/v1'], function() use($router){

    $router->get('/items', 'ProductController@index');
    $router->post('/items', 'ProductController@create');
    $router->get('/items/{id}', 'ProductController@show');
    $router->put('/items/{id}', 'ProductController@update');
    $router->delete('/items/{id}', 'ProductController@destroy');
    
    $router->get('/student', 'StudentController@index');
    $router->post('/students', 'StudentController@create');
    $router->get('/students/{id}', 'StudentController@show');
    $router->put('/students/{id}', 'StudentController@update');
    $router->delete('/students/{id}', 'StudentController@destroy');

    $router->get('/parent', 'FamilyController@index');
    $router->post('/parents', 'FamilyController@create');
    $router->get('/parents/{id}', 'FamilyController@show');
    $router->put('/parents/{id}', 'FamilyController@update');
    $router->delete('/parents/{id}', 'FamilyController@destroy');
    $router->get('/parentsS','FamilyController@getStudentFamily');

});
$router->get('/', function () use ($router) {
    return $router->app->version();
});
