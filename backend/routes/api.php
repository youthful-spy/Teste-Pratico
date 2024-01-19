<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AutorController;
use App\Http\Controllers\API\LivroController;

Route::get('autor', [AutorController::class, 'index']);
Route::post('/AddAutor', [AutorController::class,'storeAutor']);
Route::post('/AddLivro', [LivroController::class, 'storeLivro']);
Route::get('/Edit/{id}', [AutorController::class,'edit']);
Route::put('UpAutor/{id}',[AutorController::class,'update']);
Route::get('Livros/{idAutor}', [LivroController::class, 'getLivrosByAutor']);
Route::put('/UpLivro/{id}', [LivroController::class, 'update']);
Route::put('/UpNomeLivro/{id}', [LivroController::class, 'updateLivro']);
Route::delete('/DeleteAutor/{id}', [AutorController::class, 'delete']);
Route::delete('/DeleteLivro/{id}', [LivroController::class, 'delete']);




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
