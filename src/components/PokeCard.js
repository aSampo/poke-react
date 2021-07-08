import React from 'react';
import { Box, Text, Image, Center } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function PokeCard({ url }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(url).then(res => {
      setPokemon(res.data);
    });
  }, [url]);

  return (
    <Box m="15" borderWidth="1px" borderRadius="lg" overflow="hidden" height="200px" bg='#CBD5E0' textAlign="center"> 
      {/* bgGradient="linear(to-r, green.200, pink.500)"   */}
      <Text fontSize="2xl">
        {pokemon.name ?  pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) : null}
      </Text>
      <Center>
        <Image src={pokemon.sprites ? pokemon.sprites.front_default : null} />
      </Center>
    </Box>
  );
}

export default PokeCard;
