import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './css/Pokemons.css';

const Pokemons = (props) => {
  const [stats, setStats] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getPokes();
  }, []);

  const getPokes = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokes = await data.json();
    setStats(pokes);
  };

  return (
  
   <div className="poke-card">

      <div className="poke-img"> 
        <img
          src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${stats.name}.png`}
          alt="pokemon" 
        />
      </div>
      <div className="body-card"> 
        <h3>{stats.name}</h3>
        <p>order : {stats.order}</p>
        <p>height : {stats.height} lbs</p>
        <p>weight : {stats.weight}</p>
        <p>base experience: {stats.base_experience}</p>
        
        <Link to="/">
          <button>Volver</button>
        </Link>
        </div>
    
    </div> 
  );
};



export default Pokemons;
