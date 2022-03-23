import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, cities} from '../../const';
import {AppProcess} from '../../types/state';
import {Offer} from '../../types/offer';

const initialState: AppProcess = {
  activeCity: cities[0],
  currentOffers: [] as Offer[],
};

export const appProcess = createSlice({
  name: NameSpace.app,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.activeCity = action.payload;
    },
    fillOffers: (state, action) => {
      state.currentOffers = action.payload;
    },
  },
});

export const {changeCity, fillOffers} = appProcess.actions;
