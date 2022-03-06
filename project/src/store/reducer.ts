import {createReducer} from '@reduxjs/toolkit';
import {City, Offer} from '../types/offer';
import {changeCity, fillOffers} from './action';

const initialState = {
  city: {} as City,
  offers: [] as Offer[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      action.payload.forEach((offer) => state.offers.push(offer));
    });
});

export {reducer};
