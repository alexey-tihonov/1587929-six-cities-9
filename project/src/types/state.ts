import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {Offer} from './offer';
import {Review} from './review';
import {UserInfo} from './user-info';

export type AppData = {
  isDataLoaded: boolean,
  favoriteOffers: Offer[],
  nearbyOffers: Offer[],
  offer: null,
  offers: Offer[],
  reviews: Review[],
};

export type AppProcess = {
  activeCity: string,
  activeCityOffers: Offer[],
  reviewSendStatus: string,
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
  userInfo: UserInfo | null
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
