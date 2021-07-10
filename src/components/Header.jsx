import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Heading, Grid } from '@chakra-ui/react';
export const Header = () => {
  return (
    <Grid gap={1}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Heading m="auto" mb="30px"  size="lg">
        Pokedex
      </Heading>
    </Grid>
  );
};
