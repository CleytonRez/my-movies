import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Movies = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:3000/movies')
            .then(response => {
                setData(response.data.response)
                console.log("RESPONSE: ", response.data)
            })
    }, [])

    const deleteMovie = id => {
        axios
            .delete('http://localhost:3000/movies/' + id)
            .then(response => {
                const filtrado = data.filter(item => item.id !== id)
                setData(filtrado)
            })
    }

    const renderizador = informacoes => {
        console.log("INFORMACOES: ", informacoes)
        return (
            <tr key={informacoes.id}>
                <th scope='row'>{informacoes.id}</th>
                <td>{informacoes.name}</td>
                <td>{informacoes.genero}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => deleteMovie(informacoes.id)}>X</button>
                </td>
            </tr >
        )
    }
    return (
        <div className="container">

            <h1>My Movies</h1>
            <br />
            <div><Link to='/movies/novo' className="btn btn-primary">Adicionar Filme</Link></div>
            <br />
            <table className="table table-sm table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Gênero</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderizador)}
                </tbody>
            </table>
        </div>
    )
}
export default Movies