import React from 'react';
import { Box, Text, Image, Center } from '@chakra-ui/react';

function PokeCard({ pokemon }) {

  return (
    <Box
      m="15"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      height="200px"
      textAlign="center"
    >
      <Center>
        <Image src={pokemon.sprites.front_default} />
      </Center>
      <Text fontSize="2xl">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Text>
      {pokemon.types.map(type => (
        <Text key={type.type.name}>{type.type.name}</Text>
      ))}
    </Box>
  );
}

export default PokeCard;
