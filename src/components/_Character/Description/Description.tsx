import React from 'react';
import { Skeleton, Typography } from '@mui/material';

export const Description = ({ value, label, loading }: any) => {
  return (
    <Typography variant="body2">
      {loading ? (
        <Skeleton />
      ) : (
        <span>
          {label}: {value}
        </span>
      )}
    </Typography>
  );
};
