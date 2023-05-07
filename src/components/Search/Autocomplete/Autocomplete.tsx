import React from 'react';
import {
  Autocomplete as MuiAutocomplete,
  Avatar,
  CircularProgress,
  Grid,
  MenuItem,
  TextField,
} from '@mui/material';

import { Link } from 'components/Link/Link';

import { AutocompleteViewModel } from './Autocomplete.viewmodel';

export const Autocomplete = () => {
  const { loading, onChange, options, setOpen } = AutocompleteViewModel();

  return (
    <MuiAutocomplete
      getOptionLabel={(option) => option?.name}
      loading={loading}
      onClose={() => {
        setOpen(false);
      }}
      onOpen={() => {
        setOpen(true);
      }}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            onChange,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
          label="Search"
        />
      )}
      renderOption={(_, data) => {
        return (
          <Link href={`/character/${data.id}`}>
            <MenuItem>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar
                    alt="Remy Sharp"
                    src={`/assets/characters/${data.id}.jpg`}
                    sx={{
                      width: 50,
                      height: 50,
                    }}
                  />
                </Grid>
                <Grid
                  item
                  md
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {data.name}
                </Grid>
              </Grid>
            </MenuItem>
          </Link>
        );
      }}
      sx={{
        width: '100%',
      }}
    />
  );
};
