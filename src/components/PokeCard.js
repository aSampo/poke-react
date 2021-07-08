import React from "react";
import { Box } from "@chakra-ui/react";

function PokeCard({ pokemonName }) {
  return (
    <Box m="15" borderRadius="6" height="200px" bg="grey" textAlign="center">
      {pokemonName}
    </Box>
  );
}

export default PokeCard;
