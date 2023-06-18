import { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./Components/Pokemon";

function App() {
  const [pokemon, setPokemon] = useState({});

  const getPokemonData = async () => {
    try {
      const pokemonAPI = ` https://pokeapi.co/api/v2/pokemon?limit=151`;

      const { data } = await axios.get(
        // `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        pokemonAPI
      );

      // console.log(data.results);
      // results.data.forEach((item) => {
      //   item.uniqueId = results.data.name;
      // });

      setPokemon(data);
      // console.log(data);

      // console.log(results.data.results[0].name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  // let _pokemon = [...pokemon];

  if (!pokemon) return <p>Loading.</p>; // unsure this is working?
  // console.log(pokemon);
  return (
    <>
      <Pokemon pokemon={pokemon} />
    </>
  );
}

export default App;
