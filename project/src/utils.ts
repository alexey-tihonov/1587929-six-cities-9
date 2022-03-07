import {Offer} from './types/offer';

export const getDate = (dateString: string) => {
  const date = new Date(dateString);
  const dateTime = date.toISOString().split('T')[0];
  const dateText = date.toLocaleDateString('en-US', {month: 'long', year: 'numeric'});
  return {dateTime: dateTime, dateText: dateText};
};

export const getPercent = (partialValue: number, totalValue: number) => (100 * partialValue) / totalValue;

export const getOffers = (city: string, offers: Offer[]) => offers.filter((offer) => offer.city.name === city);
