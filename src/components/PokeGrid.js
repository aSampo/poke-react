import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import PokeCard from './PokeCard';


export const PokeGrid = ({ pokemons }) => {
  return (
    <SimpleGrid columns={6} minChildWidth="220px" spacing={10}>
      {pokemons.map(pokemon => {
        return <PokeCard key={pokemon.name} url={pokemon.url} />;
      })}
    </SimpleGrid>
  );
};
