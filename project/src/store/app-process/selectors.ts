import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';

export const getActiveCity = (state: State): string => state[NameSpace.app].activeCity;
export const getCurrentOffers = (state: State): Offer[] => state[NameSpace.app].currentOffers;
