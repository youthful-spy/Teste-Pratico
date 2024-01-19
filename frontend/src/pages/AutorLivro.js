import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AutorLivro extends Component {
    state = {
        autores: [],
        loading: true,
    };

    async componentDidMount() {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/autor');
            if (res.data.status === 200) {
                const autores = res.data.autores.map((autor) => ({
                    id: autor.id,
                    autorname: autor.autorname,
                    livros: autor.livros ? autor.livros.map((livro) => ({
                        id: livro.id,
                        livroname: livro.livroname,
                    })) : [],
                }));

                this.setState({
                    autores,
                    loading: false,
                });
            }
        } catch (error) {
            console.error("Erro ao obter dados da API:", error);
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        var autortable = "";

        if (this.state.loading) {
            autortable = <tr><td colSpan="3">Loading...</td></tr>;
        } else {
            autortable = this.state.autores.map((autor) => {
                return (
                    <tr key={autor.id} className="align-middle">
                        {/*<td>{autor.id}</td>*/}
                        <td>{autor.autorname}</td>
                        <td>
                            {autor.livros.map((livro) => (
                                <div key={livro.id}>{livro.livroname}</div>
                            ))}
                        </td>
                        <td className="text-center">
                            <Link to={`Edit/${autor.id}`} className="btn btn-success btn-sm">Editar</Link>
                        </td>
                        <td className="text-center">
                        <Link to={`Delets/${autor.id}`} className="btn btn-danger btn-sm">Apagar</Link>
                        </td>
                    </tr>
                );
            });
        }

        return (
            <div className="container mt-4 d-flex justify-content-center">
                <div className="col-md-8 border border-dark rounded p-4">
                    <div className="header-section border-bottom border-dark pb-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>TESTE PRÁTICO - Livraria DataBase</h4>
                            <Link to={'AddAutor'} className="btn btn-secondary btn-sm">
                                Adicionar Autor/Livro
                            </Link>
                        </div>
                    </div>
                    <div>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Autor</th>
                                    <th>Livro(s)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {autortable}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default AutorLivro;
