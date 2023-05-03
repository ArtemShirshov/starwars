import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice } from '@reduxjs/toolkit';

export interface CharacterType {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
  id: string;
}

export interface CharacterItemsStateType {
  items: CharacterType[];
  pages: number;
}

const initialState: CharacterItemsStateType = {
  items: [],
  pages: 0,
};

export const characterItemsSlice = createSlice({
  name: 'characterItems',
  initialState,
  reducers: {
    setCharacterItems: (
      state: CharacterItemsStateType,
      action: PayloadAction<any[]>
    ) => {
      state.items = action.payload;
    },
    setPages: (
      state: CharacterItemsStateType,
      action: PayloadAction<number>
    ) => {
      state.pages = action.payload;
    },
  },
});

export const { setCharacterItems, setPages } = characterItemsSlice.actions;

export const getCharacterItemsState = (state: {
  characterItems: CharacterItemsStateType;
}) => state.characterItems;

export const getCharacterItems = createSelector(
  [getCharacterItemsState],
  (characterItemsState) => characterItemsState.items
);
export const getCharacterPages = createSelector(
  [getCharacterItemsState],
  (characterItemsState) => characterItemsState.pages
);

export default characterItemsSlice.reducer;
