import {createReducer} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {Review} from '../types/review';
import {changeCityAction, fillOffersAction, loadDataAction, loadNearbyOffersAction, loadReviewsAction, requireAuthorizationAction} from './action';
import {cities, AuthorizationStatus} from '../const';

const initialState = {
  activeCity: cities[0],
  authorizationStatus: AuthorizationStatus.Unknown,
  data: [] as Offer[],
  isDataLoaded: false,
  offers: [] as Offer[],
  nearbyOffers: [] as Offer[],
  reviews: [] as Review[],
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
    .addCase(loadNearbyOffersAction, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadReviewsAction, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
