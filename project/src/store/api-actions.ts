import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import {redirectToRoute} from './action';
import {loadData, loadFavoriteOffers, loadNearbyOffers, loadReviews} from './app-data/app-data';
import {addUserInfo, requireAuthorization} from './user-process/user-process';
import {errorHandle} from '../services/error-handle';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {Offer} from '../types/offer';
import {Review} from '../types/review';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {UserInfo} from '../types/user-info';
import {Favorite} from '../types/favorite';
import {saveToken, dropToken} from '../services/token';

export const fetchDataAction = createAsyncThunk(
  'data/fetchData',
  async () => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      store.dispatch(loadData(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk(
  'data/fetchFavoriteOffers',
  async () => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Favorite);
      store.dispatch(loadFavoriteOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const setIsFavoriteAction = createAsyncThunk(
  'data/setIsFavorite',
  async ({offerId, isFavorite}: Favorite) => {
    try {
      await api.post<Offer>(`${APIRoute.Favorite}/${offerId}/${isFavorite ? 1 : 0}`);
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchNearbyOffersAction = createAsyncThunk(
  'data/fetchNearbyOffers',
  async (offerId: number) => {
    try {
      const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId.toString()}/nearby`);
      store.dispatch(loadNearbyOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk(
  'data/fetchReviews',
  async (offerId: number) => {
    try {
      const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${offerId.toString()}`);
      store.dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const postReviewsAction = createAsyncThunk(
  'data/postReviews',
  async (params: {data: {comment: string, rating: number}, offerId: number }) => {
    try {
      const {data, offerId} = params;
      await api.post<Review[]>(`${APIRoute.Comments}/${offerId.toString()}`, data);
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const {data} = await api.get<UserInfo>(APIRoute.Login);
      store.dispatch(addUserInfo({
        avatarUrl: data.avatarUrl,
        email: data.email,
        id: data.id,
        isPro: data.isPro,
        name: data.name,
      }));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      store.dispatch(addUserInfo(undefined));
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      const {token} = data;
      saveToken(token);
      store.dispatch(addUserInfo({
        avatarUrl: data.avatarUrl,
        email: data.email,
        id: data.id,
        isPro: data.isPro,
        name: data.name,
      }));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Root));
    } catch (error) {
      errorHandle(error);
      store.dispatch(addUserInfo(undefined));
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(addUserInfo(undefined));
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      store.dispatch(redirectToRoute(AppRoute.Login));
    } catch (error) {
      errorHandle(error);
    }
  },
);
