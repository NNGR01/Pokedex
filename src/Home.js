import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {

  const [pokemons, setPokemons] = React.useState([]);
  const [search, setSearch]     = React.useState("");


  console.log(pokemons);



  useEffect(() =>{
    fetchPokemons();
  },[]);


  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=500")
    .then((response) => response.json())
    .then((pokemons) => setPokemons(pokemons.results));

  }


  return (
    <div className="container">

      <div className="title">
        <h1>Poké Tienda</h1>
      </div>

      <div className="search-bar">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Pokemons..."
              onChange={(value) => {setSearch(value)}}
              value={search}
              
             
            />
          </form>
      </div>

      <div className="grid-container">
   {pokemons
      .filter((pokemon) => 
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((pokemon, index) =>{
          return(
            <div className="item1" key={index} id={index} >
            <img src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`} alt="pokemon" />
            <h5>{pokemon.name}</h5>
            </div>
          )


      })}
      </div>
    </div>
  );
};

export default Home;

/*    {poke.map((img, i) => {
   return (
     <div className="item1" key={img.id} id={img.id}>
       <Link to={`/pokemons/${img.id}`}>
         <button>
           <img src={img.sprites.front_default} alt="pokemon" />
         </button>
       </Link>
       <h5>{img.name}</h5>
       <h6>type: {img.types[0].type.name}</h6>
       <h6>id : {img.id}</h6>
     </div>
   );
 })} */