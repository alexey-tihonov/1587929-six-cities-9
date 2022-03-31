import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, cities, ReviewSendStatus} from '../../const';
import {AppProcess} from '../../types/state';
import {Offer} from '../../types/offer';

const initialState: AppProcess = {
  activeCity: cities[0],
  offer: null,
  offers: [] as Offer[],
  reviewSendStatus: ReviewSendStatus.Unknown,
};

export const appProcess = createSlice({
  name: NameSpace.app,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.activeCity = action.payload;
    },
    setOffers: (state, action) => {
      state.offers = action.payload;
    },
    setReviewSendStatus: (state, action) => {
      state.reviewSendStatus = action.payload;
    },
    setOffer: (state, action) => {
      state.offer = action.payload;
    },
  },
});

export const {changeCity, setOffer, setOffers, setReviewSendStatus} = appProcess.actions;
