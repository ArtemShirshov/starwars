import React from 'react';
import {
  Typography,
  Breadcrumbs as MuiBreadcrumbs,
  Skeleton,
} from '@mui/material';

import { Link } from 'components/Link/Link';

export const Breadcrumbs = ({ page, loading }: any) => {
  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      <Link href="/">Home</Link>
      <Typography color="text.primary">
        {loading ? <Skeleton width="150px" animation="wave" /> : page}
      </Typography>
    </MuiBreadcrumbs>
  );
};
