import React from 'react';
import renderer from 'react-test-renderer';

import { CharacterItems } from './CharacterItems';

let mockData = {
  loading: false,
  characterItems: [
    {
      name: 'Luke',
      id: '1',
    },
  ],
  handleChangePage: jest.fn(),
  page: 1,
  onClick: jest.fn(),
  characterPages: 8,
};

jest.mock('./CharacterItems.viewmodel', () => ({
  CharacterItemsViewModel: () => mockData,
}));

jest.mock('./CharacterItem/CharacterItem', () => ({
  CharacterItem: 'CharacterItem',
}));
jest.mock('./CharacterItem/CharacterItemSkeleton', () => ({
  CharacterItemSkeleton: 'CharacterItemSkeleton',
}));
jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  Pagination: 'Pagination',
  Skeleton: 'Skeleton',
}));

describe('CharacterItems', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CharacterItems />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with loading', () => {
    mockData = {
      ...mockData,
      loading: true,
    };

    const tree = renderer.create(<CharacterItems />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
