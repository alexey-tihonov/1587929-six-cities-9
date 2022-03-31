import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {Offer} from './offer';
import {Review} from './review';
import {UserInfo} from './user-info';

export type AppData = {
  data: Offer[],
  isDataLoaded: boolean,
  favoriteOffers: Offer[],
  nearbyOffers: Offer[],
  reviews: Review[],
};

export type AppProcess = {
  activeCity: string,
  currentOffers: Offer[],
  reviewSendStatus: string,
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
  userInfo: UserInfo | undefined
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
