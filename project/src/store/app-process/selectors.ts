import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';

export const getActiveCity = (state: State): string => state[NameSpace.app].activeCity;
export const getOffer = (state: State): Offer | null => state[NameSpace.app].offer;
export const getOffers = (state: State): Offer[] => state[NameSpace.app].offers;
export const getReviewSendStatus = (state: State): string => state[NameSpace.app].reviewSendStatus;
