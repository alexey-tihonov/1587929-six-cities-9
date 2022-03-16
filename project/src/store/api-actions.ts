import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import {
  loadDataAction,
  loadReviewsAction,
  requireAuthorizationAction,
  redirectToRouteAction,
  loadNearbyOffersAction
} from './action';
import {errorHandle} from '../services/error-handle';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {Offer} from '../types/offer';
import {Review} from '../types/review';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {saveToken, dropToken} from '../services/token';

export const fetchDataAction = createAsyncThunk(
  'data/fetchData',
  async () => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      store.dispatch(loadDataAction(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchNearbyOffersAction = createAsyncThunk(
  'data/fetchNearbyOffers',
  async (id: number) => {
    try {
      const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id.toString()}/nearby`);
      store.dispatch(loadNearbyOffersAction(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk(
  'data/fetchReviews',
  async (id: number) => {
    try {
      const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id.toString()}`);
      store.dispatch(loadReviewsAction(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
    } catch (error) {
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
      store.dispatch(redirectToRouteAction(AppRoute.Root));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
      store.dispatch(redirectToRouteAction(AppRoute.Login));
    } catch (error) {
      errorHandle(error);
    }
  },
);
