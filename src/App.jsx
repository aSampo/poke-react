import * as React from 'react';
import { theme, ChakraProvider, Box, Input, Center } from '@chakra-ui/react';
import { Header } from './components/Header';
import { PokeGrid } from './components/PokeGrid';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemons, setpokemons] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
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

  function onSearchChange(e) {
    console.log(e.target.value);
    setNameFilter(e.target.value);
  }

  return (
    <ChakraProvider theme={theme}>
      <Box w="100%">
        <Header />
        <Center>
          <Input
            autocomplete="off"
            width="30%"
            mb="20px"
            id="searchInput"
            onChange={onSearchChange}
            placeholder="Search by name"
          />
        </Center>
        <PokeGrid mb="20px" nameFilter={nameFilter} pokemons={pokemons} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
