import {createReducer} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {changeCityAction, fillOffersAction, loadDataAction, requireAuthorizationAction} from './action';
import {cities, AuthorizationStatus} from '../const';

const initialState = {
  activeCity: cities[0],
  offers: [] as Offer[],
  data: [] as Offer[],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fillOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadDataAction, (state, action) => {
      state.data = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
