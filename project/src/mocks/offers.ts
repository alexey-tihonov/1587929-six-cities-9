import {Offer} from '../types/offer';
import {users} from './users';

export const offers: Offer[] = [
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [
      'Heating',
    ],
    'host': users[2],
    'id': 1,
    'images': [
      'img/1.png',
    ],
    'isFavorite': true,
    'isPremium': false,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8,
    },
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
  {
    'bedrooms': 10,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [
      'Heating',
    ],
    'host': users[1],
    'id': 2,
    'images': [
      'img/1.png',
    ],
    'isFavorite': true,
    'isPremium': false,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8,
    },
    'maxAdults': 2,
    'previewImage': 'img/1.png',
    'price': 200,
    'rating': 5.0,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [
      'Heating',
    ],
    'host': users[0],
    'id': 3,
    'images': [
      'img/1.png',
    ],
    'isFavorite': true,
    'isPremium': false,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8,
    },
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'price': 100,
    'rating': 3.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
];
