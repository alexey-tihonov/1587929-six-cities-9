import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import {loadDataAction} from './action';
import {APIRoute} from '../const';
import {Offer} from '../types/offer';

export const fetchDataAction = createAsyncThunk(
  'data/fetchData',
  async () => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    store.dispatch(loadDataAction(data));
  },
);
