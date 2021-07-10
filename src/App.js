import * as React from 'react';
import { theme, ChakraProvider, Box } from '@chakra-ui/react';
import { Header } from './components/Header';
import { PokeGrid } from './components/PokeGrid';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemons, setpokemons] = useState([]);

  useEffect(() => {
    getAllPokemons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getAllPokemons() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
      .then(res => getPokemonData(res.data.results))
      .catch(err => console.log('Error:', err));
    
  }

  async function getPokemonData(result) {
    const pokemonArr = [];

    await Promise.all(
      result.map(pokemonItem => {
        return axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemonItem.name}`)
          .then(result => {
            pokemonArr.push(result.data);
          });
      })
    );

    pokemonArr.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));

    setpokemons(pokemonArr);
  }

  return (
    <ChakraProvider theme={theme}>
      <Box
        backgroundImage="url('/images/kyuubi.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Header />
        <PokeGrid pokemons={pokemons} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
