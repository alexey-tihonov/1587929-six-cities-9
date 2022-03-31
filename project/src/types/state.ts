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
  offer: Offer | null,
  offers: Offer[],
  reviewSendStatus: string,
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
  userInfo: UserInfo | null
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
