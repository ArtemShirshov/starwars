import React from 'react';
import { Box } from '@mui/material';

import { CharacterItems } from 'components/CharacterItems/CharacterItems';
import { Search } from 'components/Search/Search';

export const Home = () => {
  return (
    <>
      <Box my={4}>
        <Search />
      </Box>

      <CharacterItems />
    </>
  );
};
