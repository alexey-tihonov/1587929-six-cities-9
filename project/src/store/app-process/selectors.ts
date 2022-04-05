import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';

export const getActiveCity = (state: State): string => state[NameSpace.app].activeCity;
export const getActiveCityOffers = (state: State): Offer[] => state[NameSpace.app].activeCityOffers;
export const getReviewSendStatus = (state: State): string => state[NameSpace.app].reviewSendStatus;
export const getSortType = (state: State): string => state[NameSpace.app].sortType;
