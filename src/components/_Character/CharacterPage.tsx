import React from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { CharacterPageViewModel } from './CharacterPage.viewmodel';
import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs';
import { Description } from './Description/Description';
import { descriptionItems } from './CharacterPage.constatns';

export const CharacterPage = () => {
  const {
    character,
    editing,
    id,
    loading,
    onChange,
    onReset,
    onSubmit,
    setEditing,
  } = CharacterPageViewModel();
  return (
    <>
      <Box my={2}>
        <Breadcrumbs loading={loading} page={character?.name} />
      </Box>

      <Paper
        sx={{
          mb: 10,
          overflow: 'hidden',
        }}
      >
        <Grid container>
          <Grid
            height={550}
            item
            sx={{
              minWidth: 400,
            }}
            xs="auto"
          >
            <img alt="" src={`/assets/characters/${id}.jpg`} />
          </Grid>
          <Grid
            item
            sx={{
              p: 2,
            }}
            xs
          >
            <Box mb={3}>
              {editing ? (
                <TextField
                  defaultValue={character?.name}
                  fullWidth
                  label="Name"
                  name="name"
                  onChange={onChange}
                />
              ) : (
                <Typography color="primary" variant="h4">
                  {loading ? <Skeleton /> : character?.name}
                </Typography>
              )}
            </Box>

            <Stack spacing={1}>
              {descriptionItems.map((item) => (
                <>
                  {character[item.key] ? (
                    <>
                      {editing ? (
                        <TextField
                          defaultValue={character[item.key]}
                          key={item.label}
                          label={item.label}
                          name={item.key}
                          onChange={onChange}
                          type={item.type}
                        />
                      ) : (
                        <Description
                          key={item.label}
                          label={item.label}
                          loading={loading}
                          value={`${character[item.key]}${
                            item.additionalLabel ? item.additionalLabel : ''
                          }`}
                        />
                      )}
                    </>
                  ) : null}
                </>
              ))}
            </Stack>

            <Box my={2}>
              {editing ? (
                <>
                  <Button onClick={onSubmit}>Save</Button>
                  <Button onClick={onReset}>Reset</Button>
                </>
              ) : (
                <Button
                  disabled={loading}
                  onClick={() => setEditing(true)}
                  type="submit"
                >
                  Edit
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
