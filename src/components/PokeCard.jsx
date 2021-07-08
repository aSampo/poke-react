import React from 'react';
import { Box, Text, Image, Center } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function PokeCard({ url }) {
  const [pokemon, setPokemon] = useState({});
  const [status, setStatus] = useState('init');

  useEffect(() => {
    setStatus('pending');
    axios
      .get(url)
      .then(res => {
        setPokemon(res.data);
        setStatus('resolved');
      })
      .catch(error => {
        console.log(error);
        setStatus('rejected')
      });
  }, [url]);

  if (status !== 'resolved') {
    return (
      <Box
        m="15"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        height="200px"
        bg="#CBD5E0"
        textAlign="center"
      />
    );
  }

  return (
    <Box
      m="15"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      height="200px"
      bg="#CBD5E0"
      textAlign="center"
    >
      <Text fontSize="2xl">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Text>
      <Center>
        <Image src={pokemon.sprites.front_default} />
      </Center>
    </Box>
  );
}

export default PokeCard;