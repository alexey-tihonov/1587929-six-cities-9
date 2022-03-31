import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, cities, ReviewSendStatus} from '../../const';
import {AppProcess} from '../../types/state';
import {Offer} from '../../types/offer';

const initialState: AppProcess = {
  activeCity: cities[0],
  currentOffers: [] as Offer[],
  reviewSendStatus: ReviewSendStatus.Unknown,
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
    setReviewSendStatus: (state, action) => {
      state.reviewSendStatus = action.payload;
    },
  },
});

export const {changeCity, fillOffers, setReviewSendStatus} = appProcess.actions;
