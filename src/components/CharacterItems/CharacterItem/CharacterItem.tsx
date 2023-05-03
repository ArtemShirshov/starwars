import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';

export const CharacterItem = ({ name, id }: any) => {
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
