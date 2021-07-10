import React from 'react';
import { Box, Text, Image, Center } from '@chakra-ui/react';
import Type from './Type'
function PokeCard({ pokemon }) {

  return (
    <Box
      m="auto"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      minH="200px"
      maxH="200px"
      minW="200px"
      maxW="200px"
      textAlign="center"
    >
      <Center>
        <Image src={pokemon.sprites.front_default} />
      </Center>
      <Text fontSize="2xl">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Text>
      <Type types={pokemon.types}/>
    </Box>
  );
}

export default PokeCard;
