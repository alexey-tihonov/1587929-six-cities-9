import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';

export const getOffer = (state: State): Offer | null => state[NameSpace.data].offer;
export const getOffers = (state: State): Offer[] => state[NameSpace.data].offers;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;
export const getFavoriteOffers = (state: State): Offer[] | null => state[NameSpace.data].favoriteOffers;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.data].nearbyOffers;
export const getReviews = (state: State): Review[] => state[NameSpace.data].reviews;
