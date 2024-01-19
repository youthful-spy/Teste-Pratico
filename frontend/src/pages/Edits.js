import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Edits = () => {
    const [autor, setAutor] = useState('');
    const [livros, setLivros] = useState([]);
    const [livroSelecionado, setLivroSelecionado] = useState('');
    const [novoNomeLivro, setNovoNomeLivro] = useState('');
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

    const handleAutorInput = (e) => {
        setAutor(e.target.value);
    };

    const handleLivroChange = (e) => {
        setLivroSelecionado(e.target.value);
    };

    const handleNovoNomeLivro = (e) => {
        setNovoNomeLivro(e.target.value);
    };

    const updateAutorData = async (e) => {
        e.preventDefault();
        const stud_id = id;
        try {
            const res = await axios.put(`http://127.0.0.1:8000/api/UpAutor/${stud_id}`, { autor });

            if (res.data.status === 200) {
                console.log(res.data.message);
                window.location.reload();
            }
        } catch (error) {
            console.error("Erro ao atualizar autor:", error);
        }
    };

    const updateLivroData = async (e) => {
        e.preventDefault();
        const livro_id = livroSelecionado;
        try {
            const res = await axios.put(`http://127.0.0.1:8000/api/UpLivro/${livro_id}`, { livroname: novoNomeLivro });

            if (res.data.status === 200) {
                console.log(res.data.message);
                window.location.reload();
            }
        } catch (error) {
            console.error("Erro ao atualizar livro:", error);
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center">
        <div className="container d-flex justify-content-center">
            <div className="row">
                <div className="col-md-12 mx-auto my-auto">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4>
                                    Editar Autor e Livro
                                </h4>
                                <Link to={'/'} className="btn btn-secondary btn-sm">
                                    Voltar
                                </Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <form onSubmit={updateAutorData}>
                                        <div className="form-group mb-3">
                                            <label>Nome do Autor:</label>
                                            <input
                                                type="text"
                                                name="autor"
                                                value={autor}
                                                className="form-control"
                                                onChange={handleAutorInput}
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <button type="submit" className="btn btn-secondary">
                                                Atualizar Autor
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-6">
                                    <form onSubmit={updateLivroData}>
                                        <div className="form-group mb-3">
                                            <label>Selecione o Livro:</label>
                                            <select className="form-control" onChange={handleLivroChange} value={livroSelecionado}>
                                                <option value="" disabled>Seleciona um Livro</option>
                                                {livros.map((livro) => (
                                                    <option key={livro.id} value={livro.id}>
                                                        {livro.livroname}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label>Novo Nome do Livro:</label>
                                            <input
                                                type="text"
                                                name="livro"
                                                className="form-control"
                                                value={novoNomeLivro}
                                                onChange={handleNovoNomeLivro}
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <button type="submit" className="btn btn-secondary">
                                                Atualizar Livro
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Edits;
