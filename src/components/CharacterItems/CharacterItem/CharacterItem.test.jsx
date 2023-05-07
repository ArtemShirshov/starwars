import React from 'react';
import renderer from 'react-test-renderer';

import { CharacterItem } from './CharacterItem';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  Card: 'Card',
  CardContent: 'CardContent',
  CardMedia: 'CardMedia',
  Typography: 'Typography',
  CardActionArea: 'CardActionArea',
}));

describe('CharacterItems', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CharacterItem id={1} name="Luke" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
