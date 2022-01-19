import React, { useEffect } from "react";
import "./App.css";
function App() {
  const [result, setResult] = React.useState([]);
  const [poke, setPoke] = React.useState([]);
  const [load, setLoad] = React.useState("true");
  const arr = [];
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=50")
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
  setTimeout(() => {
    setLoad(false);
  }, 1000);
  return (
    <div className="App">
      <div className="pokegallery">
        {load ? (
          <p>Loading...</p>
        ) : (
          poke.map((img, i) => (
            <div id={img.id} key={img.id}>
              <div
                className="card"
                
              >
                <img src={img.sprites.front_default} alt="pokemon" />
                <div>
                  <h5>{img.name}</h5>
                  <h6>type: {img.types[0].type.name}</h6>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default App;
