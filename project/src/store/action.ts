import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';

export const changeCity = createAction<string>('changeCity');
export const fillOffers = createAction<Offer[]>('fillOffers');
