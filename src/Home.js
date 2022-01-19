import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [poke,setPoke] = useState([]);
  

  useEffect(() => {
    getPoke();
  }, []);

  const getPoke = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=00");
    const poke = await data.json();
    setPokemons(poke.results);
  };

  return (
    <div className="container-fluid">
    <div className="titulo">
      <h1>Poké Tienda</h1>
    </div>

    <div className="grid-container">
    {pokemons.map((item) =>{
        return (
            <div className="item1" key={item.keys}>
          <Link to={`/pokemons/${item.keys}`}><button>
            <img src="https://p4.wallpaperbetter.com/wallpaper/364/776/981/poke-balls-wallpaper-preview.jpg" />
          </button></Link> 
          {item.name}
          
        </div>
        )
    })}
    
    

      <Link to="/">
        <button>homi</button>
      </Link>
    </div>
  </div>
  )
    
};

export default Home;
