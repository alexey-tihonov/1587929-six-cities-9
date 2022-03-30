import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {Offer} from './offer';
import {Review} from './review';

export type AppData = {
  data: Offer[],
  isDataLoaded: boolean,
  nearbyOffers: Offer[],
  reviews: Review[],
};

export type AppProcess = {
  activeCity: string,
  currentOffers: Offer[],
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
