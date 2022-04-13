
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Pokemons = props => {

    const { id } = useParams();

    const [stats, setStats] = useState([])

    useEffect(() => {
        getPoke()
    }, [])


      const getPoke = id => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((response) => response.json())
          .then((stats) => setStats(stats.results));
      };

      console.log(stats);
    

    return (
        <div className="col-6 container my-3 text-light text-center">
            <div className="card bg-dark py-3">
            <h3 className="card-title">s: {stats.name}</h3>
            <p>Gender: {stats.id}</p>
                
                <Link to="/"><button>Volver</button></Link>
            </div>
        </div>
    )
}

export default Pokemons;