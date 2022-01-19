import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [result, setResult] = React.useState([]);
  const [poke, setPoke] = React.useState([]);
  const [load, setLoad] = React.useState("true");
  const [escrito, setEscrito] = React.useState("");
  const [respuesta, setRespuesta] = useState([]);
  const handleChange = (e) =>{
    setEscrito(e.target.value)
  }
  console.log(poke)


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
    <div className="container-fluid">

      <div className="titulo">
        <h1>Poké Tienda</h1>
      <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Pokemons..."
                value={escrito}
                onChange={handleChange}
              />
            </div>
          </form>
      </div>
      <div className="grid-container">
        </div>
        {poke.map((img, i) => {
          return (
            <div className="item1" key={img.id} key={img.id}>
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

        <Link to="/cards">
          <button>homi</button>
        </Link>
      </div>
  );
};

export default Home;

