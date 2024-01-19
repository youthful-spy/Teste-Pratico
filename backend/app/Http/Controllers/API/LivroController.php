<?php

namespace App\Http\Controllers\API;

use App\Models\Livro;
use App\Models\Autor;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LivroController extends Controller
{
    public function storeLivro(Request $request)
    {
        if ($request->has('livro') && $request->has('autor')) {
            $autorName = $request->input('autor');
            $livroName = $request->input('livro');

            $autor = Autor::firstOrNew(['autorname' => $autorName]);

            if (!$autor->exists) {
                $autor->save();
            }

            $livro = new Livro;
            $livro->livroname = $livroName;
            $livro->id_autor = $autor->id;
            $livro->save();

            return response()->json([
                'status' => 200,
                'message' => 'Livro adicionado com sucesso',
            ]);
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'Dados do livro ou autor não fornecidos',
            ]);
        }
    }

    public function getLivrosByAutor($idAutor)
    {
        $livros = Livro::where('id_autor', $idAutor)->get();
    
        return response()->json([
            'status' => 200,
            'livros' => $livros,
        ]);
    }

    public function update(Request $request, $id)
    {
        $livro = Livro::find($id);
        $livro->livroname = $request->input('livroname');
        $livro->update();
    
        return response()->json([
            'status' => 200,
            'message' => 'Livro Atualizado com Sucesso',
            
        ]);
    }

    public function delete($id)
{
    $livro = Livro::find($id);

    if (!$livro) {
        return response()->json([
            'status' => 404,
            'message' => 'Livro não encontrado',
        ], 404);
    }

    $livro->delete();

    return response()->json([
        'status' => 200,
        'message' => 'Livro excluído com sucesso',
    ]);
}

}
