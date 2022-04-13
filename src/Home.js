import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [pokemons, setPokemons] = React.useState([]);
  const [search, setSearch] = React.useState("");

  console.log(pokemons);

  useEffect(() => {
    fetchPokemons();
  }, []);


  const handleChange = (e) => {
    setSearch(e.target.value);
  };


  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=700&offset=0")
      .then((response) => response.json())
      .then((pokemons) => setPokemons(pokemons.results));
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Pokédex</h1>
      </div>

      <div className="search-bar">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Pokemons..."
            onChange={handleChange}
            value={search}
          />
        </form>
      </div>

      <div className="grid-container">
        {pokemons
          .filter((pokemon) =>
            pokemon.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((pokemon, index) => {
            return (
              <div className="item1" key={index} id={index}>
                 <Link to={`/pokemon/${pokemon.name}`}>
              <button>
                <img
                  src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`}
                  alt="pokemon"
                />
                
              </button>
            </Link>
                <h5>{pokemon.name}</h5>
               
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;

/*  
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
  const [result, setResult] = React.useState([]);
  const [poke, setPoke] = React.useState([]);
  const [load, setLoad] = React.useState("true");
  const [escrito, setEscrito] = React.useState("");
  const [respuesta, setRespuesta] = useState([]);
  const handleChange = (e) => {
    setEscrito(e.target.value);
  };
  console.log(poke);


  const arr = [];
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=00")
      .then((response) => response.json())
      .then((data) =>
        setResult(
          data.results.map((item) => {
            fetch(item.url)
              .then((response) => response.json())
              .then((allpokemon) => arr.push(allpokemon));
            setPoke(arr);
          })
        )
      );
  }, []);


  useEffect(() => {
    if (poke.results != null) {
      const results = poke.results.filter((item) =>
        item.name.toString().toLowerCase().includes(escrito)
      );
      setRespuesta(results);
    }
  }, [poke.results, escrito]);


  setTimeout(() => {
    setLoad(false);
  }, 1000);


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
              value={escrito}
              onChange={handleChange}
            />
          </form>
      </div>

      <div className="grid-container">
      {poke.map((img, i) => {
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
      })}
      </div>
    </div>
  );
};

export default Home;
*/
