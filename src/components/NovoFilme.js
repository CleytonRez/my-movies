import react, { useState } from "react"
import axios from "axios"
import { Redirect } from "react-router-dom"
import "./NovoFilme.css"


const NovoFilme = () => {
    const [name, setName] = useState([])
    const [genero, setGenero] = useState('')
    const [success, setSuccess] = useState(false)
    const generos = ['Ação', 'Aventura', 'Terror', 'Comédia']

    const getChange = evt => {
        setName(evt.target.value)
        console.log(evt.target.value)
    }

    const getChangeGenero = evt => {
        setGenero(evt.target.value)
        console.log(evt.target.value)
    }

    const save = () => {
        console.log(name, genero)
        axios
            .post('http://localhost:3000/movies', {
                name,
                genero
            })
            .then(response => {
                setSuccess(true)
            })
    }
    if (success) {
        return <Redirect to='/movies' />
    }


    return (
        <div className="container">
            <label htmlFor="name">Nome:</label>
            <input type='text' className='form-control' onChange={getChange} id='name' placeholder='Nome do Filme' />

            <br />
            <label for="genero">Selecione o Gênero: </label>
            <select onChange={getChangeGenero} name="genero" id="genero">
                {
                    generos.map(g => {
                        return (<option key={g} value={g}>{g}</option>)
                    })
                }
            </select>
            <br />
            <button onClick={save} className="btn btn-primary">Salvar</button>
        </div >
    )
}

export default NovoFilme