import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Delets = () => {
    const [autor, setAutor] = useState('');
    const [livros, setLivros] = useState([]);
    const [livroSelecionado, setLivroSelecionado] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resAutor = await axios.get(`http://127.0.0.1:8000/api/Edit/${id}`);
                if (resAutor.data.status === 200) {
                    setAutor(resAutor.data.autor.autorname);
                }

                const resLivros = await axios.get(`http://127.0.0.1:8000/api/Livros/${id}`);
                if (resLivros.data.status === 200) {
                    setLivros(resLivros.data.livros);
                }
            } catch (error) {
                console.error("Erro ao obter dados do autor e dos livros:", error);
            }
        };

        fetchData();
    }, [id]);

    const deleteAutor = async () => {
        try {
            const res = await axios.delete(`http://127.0.0.1:8000/api/DeleteAutor/${id}`);
            if (res.data.status === 200) {
                console.log(res.data.message);
            }
        } catch (error) {
            console.error("Erro ao apagar autor:", error);
        }
    };

    const deleteLivro = async () => {
        if (!livroSelecionado) {
            console.error("Nenhum livro selecionado para exclusão.");
            return;
        }

        try {
            const res = await axios.delete(`http://127.0.0.1:8000/api/DeleteLivro/${livroSelecionado}`);
            if (res.data.status === 200) {
                console.log(res.data.message);
                const updatedLivros = await axios.get(`http://127.0.0.1:8000/api/Livros/${id}`);
                if (updatedLivros.data.status === 200) {
                    setLivros(updatedLivros.data.livros);
                }
            }
        } catch (error) {
            console.error("Erro ao apagar livro:", error);
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center">
        <div className="container d-flex justify-content-center">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>
                                Apagar Autor ou Livro
                                <Link to={'/'} className="btn btn-secondary btn-sm float-end">
                                    Voltar
                                </Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <p>Tem certeza que deseja apagar o autor: <strong style={{ color: 'red', fontSize: '1.2em' }}>{autor}</strong>?</p>
                                    <p>Isso resultará em apagar <strong>permanentemente</strong> todos os dados relacionados a este autor.</p>
                                    <button onClick={deleteAutor} className="btn btn-danger">
                                        Apagar Autor
                                    </button>
                                </div>

                                <div className="col-md-6">
                                    <label>Selecione o Livro:</label>
                                    <select className="form-control" onChange={(e) => setLivroSelecionado(e.target.value)} value={livroSelecionado}>
                                        <option value="" disabled>Selecionar Livro</option>
                                        {livros.map((livro) => (
                                            <option key={livro.id} value={livro.id}>
                                                {livro.livroname}
                                            </option>
                                        ))}
                                    </select>
                                    <button onClick={deleteLivro} className="btn btn-danger mt-3">
                                        Apagar Livro
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Delets;
