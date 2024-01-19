<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Autor extends Model
{
    use HasFactory;
    protected $table = 'autores';
    protected $fillable=[
        'autorname',
    ];

    public function livros()
    {
        return $this->hasMany(Livro::class, 'id_autor');
    }
}
