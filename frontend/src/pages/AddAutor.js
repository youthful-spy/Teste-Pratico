import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddAutorLivro extends Component {
    state = {
        autor: '',
        livro: '',
    };

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    saveData = async (e) => {
        e.preventDefault();

        if (this.state.autor && this.state.livro) {
            try {
                const resAutor = await axios.post('http://127.0.0.1:8000/api/AddAutor', { autor: this.state.autor });

                if (resAutor.data.status === 200) {
                    console.log(resAutor.data.message);

                    const autorId = resAutor.data.autor_id;


                    const resLivro = await axios.post('http://127.0.0.1:8000/api/AddLivro', {
                        livro: this.state.livro,
                        autor: this.state.autor,
                        autor_id: autorId,
                    });

                    console.log(resLivro.data);

                    if (resLivro.data.status === 200) {
                        console.log(resLivro.data.message);

                        this.setState({
                            autor: '',
                            livro: '',
                        });
                    }
                }
            } catch (error) {
                console.error("Erro ao adicionar livro ou autor:", error);
            }
        }
    };

    render() {
        return (
          <div className="d-flex align-items-center justify-content-center">
            <div className="container">
              <div className="row">
                <div className="col-md-4 mx-auto my-auto">
                  <div className="card">
                    <div className="card-header">
                      <h4>
                        Adicionar Autor e Livro
                        <Link to={'/'} className="btn btn-secondary btn-sm float-end">
                          Voltar
                        </Link>
                      </h4>
                    </div>
                    <div className="card-body">
                      <form onSubmit={this.saveData}>
                        <div className="form-group mb-3">
                          <label>Nome do Autor:</label>
                          <input
                            type="text"
                            name="autor"
                            value={this.state.autor}
                            className="form-control"
                            onChange={this.handleInput}
                            required
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label>Nome do Livro:</label>
                          <input
                            type="text"
                            name="livro"
                            value={this.state.livro}
                            className="form-control"
                            onChange={this.handleInput}
                            required
                          />
                        </div>
                        <div className="form-group mb-3">
                          <button type="submit" className="btn btn-secondary">
                            Adicionar novo Autor/Livro
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      
}

export default AddAutorLivro;