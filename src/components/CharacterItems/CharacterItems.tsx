import React from 'react';
import { Box, Skeleton } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import { CharacterItemsViewModel } from './CharacterItems.viewmodel';
import { CharacterItem } from './CharacterItem/CharacterItem';
import { CharacterItemSkeleton } from './CharacterItem/CharacterItemSkeleton';

export const CharacterItems = () => {
  const {
    loading,
    characterItems,
    handleChangePage,
    page,
    onClick,
    characterPages,
  } = CharacterItemsViewModel();

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
      >
        {loading
          ? Array.from({
              length: 10,
            }).map((item, index) => (
              <Box key={index} p={2}>
                <CharacterItemSkeleton />
              </Box>
            ))
          : characterItems?.map((item: any) => (
              <Box key={item.name} onClick={() => onClick(item.id)} p={2}>
                <CharacterItem {...item} />
              </Box>
            ))}
      </Box>

      <Box
        my={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {loading && characterPages === 0 ? (
          <Skeleton height={32} width={150} />
        ) : (
          <Pagination
            color="primary"
            count={characterPages}
            onChange={handleChangePage}
            page={page}
            shape="rounded"
          />
        )}
      </Box>
    </>
  );
};
