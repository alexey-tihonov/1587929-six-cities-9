import {AuthorizationStatus, SortType, cities} from './const';
import {Offer} from './types/offer';
import {Review} from './types/review';

export const getDate = (dateString: string) => {
  const date = new Date(dateString);
  const dateTime = date.toISOString().split('T')[0];
  const dateText = date.toLocaleDateString('en-US', {month: 'long', year: 'numeric'});
  return {dateTime: dateTime, dateText: dateText};
};

export const getPercent = (partialValue: number, totalValue: number) => (100 * Math.round(partialValue)) / totalValue;

export const filterOffers = (city: string, offers: Offer[]) => offers.filter((offer) => offer.city.name === city);

export const sortOffers = (sort: string, offers: Offer[]) => {
  switch (sort) {
    case SortType.PriceLowToHigh:
      return offers.sort((prev, next) => prev.price - next.price);
    case SortType.PriceHighToLow:
      return offers.sort((prev, next) => next.price - prev.price);
    case SortType.TopRatedFirst:
      return offers.sort((prev, next) => next.rating - prev.rating);
    case SortType.Default:
    default:
      return offers;
  }
};

export const sortReviews = (reviews: Review[]) => {
  if (reviews === []) {
    return reviews;
  }

  return reviews.sort((prev, next) => Date.parse(next.date) - Date.parse(prev.date));
};

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean => authorizationStatus === AuthorizationStatus.Unknown;
export const isAuth = (authorizationStatus: AuthorizationStatus): boolean => authorizationStatus === AuthorizationStatus.Auth;

export const getRandomNumber = (min: number, max: number):number => Math.floor(Math.random() * (max - min + 1)) + min;
export const getRandomCity = () => cities[getRandomNumber(0, cities.length - 1)];
