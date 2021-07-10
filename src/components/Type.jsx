import React from 'react';
import { SimpleGrid, Image, Center } from '@chakra-ui/react';
import { getTypeImg } from '../utils/utils';

function Type({ types }) {
  return (
    <SimpleGrid m="10px" columns={2} minChildWidth="30px">
      {types.map(x => {
        return (
          <Center m="auto" p="auto" key={x.slot}>
            <Image
              boxSize="30px"
              objectFit="cover"
              src={getTypeImg(x.type.name)}
              alt={x.type.name}
            />
          </Center>
        );
      })}
    </SimpleGrid>
  );
}

export default Type;
