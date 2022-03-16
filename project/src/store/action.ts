import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {Review} from '../types/review';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeCityAction = createAction<string>('app/changeCity');
export const fillOffersAction = createAction<Offer[]>('app/fillOffers');
export const loadDataAction = createAction<Offer[]>('data/loadData');
export const loadReviewsAction = createAction<Review[]>('data/loadReviews');
export const loadNearbyOffersAction = createAction<Offer[]>('data/loadNearbyOffers');
export const redirectToRouteAction = createAction<AppRoute>('app/redirectToRoute');
export const requireAuthorizationAction = createAction<AuthorizationStatus>('user/requireAuthorization');
