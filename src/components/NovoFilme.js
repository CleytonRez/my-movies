import react, { useState } from "react"
import axios from "axios"


const NovoFilme = () => {
    const [name, setName] = useState([])
    const [genre, setGenre] = useState('')
    const genres = ['Ação', 'Aventura', 'Terror', 'Comédia']

    const getChange = evt => {
        setName(evt.target.value)
        console.log(evt.target.value)
    }

    const getChangeGenre = evt => {
        setGenre(evt.target.value)
        console.log(evt.target.value)
    }

    const save = () => {
        console.log(name, genre)
    }


    return (
        <div className="container">
            <label htmlFor="name">Nome</label>
            <input type='text' className='form-control' onChange={getChange} id='name' placeholder='Nome do Filme' />

            <label for="genre">Selecione o Gênero</label>
            <select onChange={getChangeGenre} name="genre" id="genre">
                {
                    genres.map(g => {
                        return (<option key={g} value={g}>{g}</option>)
                    })
                }
            </select>
            <button onClick={save} className="btn btn-primary">Salvar</button>
        </div >
    )
}

export default NovoFilme