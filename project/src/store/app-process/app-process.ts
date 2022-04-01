import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, cities, ReviewSendStatus} from '../../const';
import {AppProcess} from '../../types/state';

const initialState: AppProcess = {
  activeCity: cities[0],
  activeCityOffers: null,
  reviewSendStatus: ReviewSendStatus.Unknown,
};

export const appProcess = createSlice({
  name: NameSpace.app,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.activeCity = action.payload;
    },
    setActiveCityOffers: (state, action) => {
      state.activeCityOffers = action.payload;
    },
    setReviewSendStatus: (state, action) => {
      state.reviewSendStatus = action.payload;
    },
  },
});

export const {changeCity, setActiveCityOffers, setReviewSendStatus} = appProcess.actions;
