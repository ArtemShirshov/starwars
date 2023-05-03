import React from 'react';
import { Box, Skeleton, Grid } from '@mui/material';
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
      <Grid container spacing={2}>
        {loading
          ? Array.from({
              length: 10,
            }).map((item, index) => (
              <Grid item key={index} md={3} xs={12}>
                <CharacterItemSkeleton />
              </Grid>
            ))
          : characterItems?.map((item: any) => (
              <Grid
                item
                key={item.name}
                md={3}
                xs={12}
                onClick={() => onClick(item.id)}
              >
                <CharacterItem {...item} />
              </Grid>
            ))}
      </Grid>

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
