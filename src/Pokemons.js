import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Pokemons = (props) => {

  const [stats, setStats] = useState([]);  
  let params = useParams();
  const { id } = useParams();
  console.log(stats.abilities);

  useEffect(() => {
    getPokes()
}, [])

const getPokes = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokes = await data.json()
    setStats(pokes)
}
  


  return (
    <div className="col-6 container my-3 text-light text-center">
      <div className="card bg-dark py-3">
        <h3 className="card-title">Name: {stats.name}</h3>
        <p>order  : {stats.order}</p>
        <p>height  : {stats.height}</p>
        <p>weight : {stats.weight}</p>
        <p>base_experience: {stats.base_experience}</p>
        <img
                  src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${stats.name}.png`}
                  alt="pokemon"
                />

        <Link to="/">
          <button>Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default Pokemons;
