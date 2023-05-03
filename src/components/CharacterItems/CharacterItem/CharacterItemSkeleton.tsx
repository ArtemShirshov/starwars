import { Card, CardActionArea, CardContent, Skeleton } from '@mui/material';
import React from 'react';

export const CharacterItemSkeleton = () => {
  return (
    <Card>
      <CardActionArea>
        <Skeleton
          animation="wave"
          sx={{
            height: 400,
          }}
          variant="rectangular"
        />
        <CardContent>
          <Skeleton animation="wave" height={32} width="80%" />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
