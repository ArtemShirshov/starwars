import React, { FC } from 'react';
import {
  Breadcrumbs as MuiBreadcrumbs,
  Skeleton,
  Typography,
} from '@mui/material';

import { Link } from 'components/Link/Link';

interface IBreadcrumbs {
  page: string;
  loading: boolean;
}

export const Breadcrumbs: FC<IBreadcrumbs> = ({ page, loading }) => {
  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      <Link href="/">Home</Link>
      <Typography color="text.primary">
        {loading ? <Skeleton animation="wave" width="150px" /> : page}
      </Typography>
    </MuiBreadcrumbs>
  );
};
