import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {AppData} from '../../types/state';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';

const initialState: AppData = {
  isDataLoaded: false,
  favoriteOffers: null,
  nearbyOffers: [] as Offer[],
  offer: null,
  offers: [] as Offer[],
  reviews: [] as Review[],
};

export const appData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadOffer: (state, action) => {
      state.offer = action.payload;
    },
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    },
    loadFavoriteOffers: (state, action) => {
      state.favoriteOffers = action.payload;
    },
    loadNearbyOffers: (state, action) => {
      state.nearbyOffers = action.payload;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const {loadOffer, loadOffers, loadFavoriteOffers, loadNearbyOffers, loadReviews} = appData.actions;
