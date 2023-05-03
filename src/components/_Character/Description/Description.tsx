import React, { FC } from 'react';
import { Skeleton, Typography } from '@mui/material';

interface IDescription {
  value: string;
  label: string;
  loading: boolean;
}

export const Description: FC<IDescription> = ({ value, label, loading }) => {
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
