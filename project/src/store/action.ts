import {createAction} from '@reduxjs/toolkit';
import {City, Offer} from '../types/offer';

export const changeCity = createAction<City>('changeCity');
export const fillOffers = createAction<Offer[]>('fillOffers');
