import React, { FC } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import { CharacterType } from 'store/CharacterItems';

type CharacterItemType = Pick<CharacterType, 'name' | 'id'>;

export const CharacterItem: FC<CharacterItemType> = ({ name, id }) => {
  return (
    <Card
      sx={{
        height: '100%',
      }}
    >
      <CardActionArea
        sx={{
          height: '100%',
        }}
      >
        <CardMedia
          alt="green iguana"
          component="img"
          height="400"
          image={`/assets/characters/${id}.jpg`}
        />
        <CardContent>
          <Typography
            color="primary"
            gutterBottom
            sx={{
              margin: 0,
            }}
            variant="h6"
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
