
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Pokemons = () => {

    const { id } = useParams();

    const [stats, setStats] = useState([])

    useEffect(() => {
        obtenerDatos()
    }, [stats])

    const obtenerDatos = async () => {
        const data = await fetch( `https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokes = await data.json()
        setStats(pokes)
    }


    return (
        <div className="col-6 container my-3 text-light text-center">
            <div className="card bg-dark py-3">
            <h3 className="card-title">{stats.name}</h3>
            <p>Gender: {stats.abilities}</p>
                
                <Link to="/"><button>Volver</button></Link>
            </div>
        </div>
    )
}

export default Pokemons;