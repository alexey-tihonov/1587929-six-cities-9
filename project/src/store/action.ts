import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';

export const changeCityAction = createAction<string>('app/changeCity');
export const fillOffersAction = createAction<Offer[]>('app/fillOffers');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
