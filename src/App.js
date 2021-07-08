import * as React from 'react';
import { theme, ChakraProvider, Box } from '@chakra-ui/react';
import { Header } from './components/Header';
import { PokeGrid } from './components/PokeGrid';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemons, setpokemons] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=21&offset=0`)
      .then(res => {
        setpokemons(res.data.results);
      });
  }, []);

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
