import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import PokeCard from './PokeCard';

export const PokeGrid = ({ pokemons, nameFilter }) => {
  return (
    <SimpleGrid columns={6} minChildWidth="220px" spacing={10}>
      {pokemons
        .filter(pokemon => pokemon.name.includes(nameFilter))
        .map(pokemon => <PokeCard key={pokemon.id} pokemon={pokemon} />)}
    </SimpleGrid>
  );
};
