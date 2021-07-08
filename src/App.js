import * as React from 'react';
import { theme, ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/Header';
import { PokeGrid } from './components/PokeGrid';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemons, setpokemons] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=21&offset=0`)
      .then((res) => {
        setpokemons(res.data.results);
      })
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <PokeGrid pokemons={pokemons} />
    </ChakraProvider>
  );
}

export default App;
