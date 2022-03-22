import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {AppData} from '../../types/state';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';

const initialState: AppData = {
  data: [] as Offer[],
  isDataLoaded: false,
  nearbyOffers: [] as Offer[],
  reviews: [] as Review[],
};

export const appData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadData: (state, action) => {
      state.data = action.payload;
      state.isDataLoaded = true;
    },
    loadNearbyOffers: (state, action) => {
      state.nearbyOffers = action.payload;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const {loadData, loadNearbyOffers, loadReviews} = appData.actions;
