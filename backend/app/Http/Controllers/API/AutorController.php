<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Autor;

class AutorController extends Controller
{
    public function index(){
        $autors = Autor::with('livros')->get();
        return response()->json([
            'status'=>200,
            'autores'=>$autors,
        ]);
    }

    public function storeAutor(Request $request){
        $autorName = $request->input('autor');

        $autor = Autor::firstOrCreate(['autorname' => $autorName]);

        return response()->json([
            'status'=> 200,
            'message' => 'Autor adicionado com Sucesso',
            'autor_id' => $autor->id,
        ]);
    }
    public function edit($id)
    {
        $autor = Autor::find($id);
        return response()->json([
            'status'=>200,
            'autor' => $autor,
        ]);
    }

    public function update(Request $request, $id){
        $autor = Autor::find($id);
        $autor->autorname = $request->input('autor');
        $autor->update();

        return response()->json([
            'status'=> 200,
            'message' => 'Autor Atualizado com Sucesso',
        ]);
    }

    public function delete($id)
    {
        $autor = Autor::find($id);

        if (!$autor) {
            return response()->json([
                'status' => 404,
                'message' => 'Autor não encontrado.',
            ]);
        }

        $autor->livros()->delete();

        $autor->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Autor e seus livros associados excluídos com sucesso.',
        ]);
    }
}