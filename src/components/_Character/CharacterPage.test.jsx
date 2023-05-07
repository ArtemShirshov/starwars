import React from 'react';
import renderer from 'react-test-renderer';

import { CharacterPage } from './CharacterPage';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  Typography: 'Typography',
  Grid: 'Grid',
  Stack: 'Stack',
  Box: 'Box',
  Skeleton: 'Skeleton',
  Button: 'Button',
  TextField: 'TextField',
}));

jest.mock('./Breadcrumbs/Breadcrumbs', () => ({
  Breadcrumbs: 'Breadcrumbs',
}));

jest.mock('./Description/Description', () => ({
  Description: 'Description',
}));

let mockData;

jest.mock('./CharacterPage.viewmodel', () => ({
  CharacterPageViewModel: () => mockData,
}));

beforeEach(() => {
  mockData = {
    character: {
      name: 'Luke',
      birth_year: 'Y1231',
    },
    editing: false,
    id: '1',
    loading: false,
    onChange: jest.fn(),
    onReset: jest.fn(),
    onSubmit: jest.fn(),
    setEditing: jest.fn(),
  };
});

describe('CharacterPage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CharacterPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with loading', () => {
    mockData = {
      ...mockData,
      loading: true,
    };

    const tree = renderer.create(<CharacterPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with editing', () => {
    mockData = {
      ...mockData,
      loading: false,
      editing: true,
    };

    const tree = renderer.create(<CharacterPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
