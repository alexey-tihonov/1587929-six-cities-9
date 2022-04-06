export const MAX_RATING = 5;
export const MAX_REVIEWS = 10;

export const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HttpCode  {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum OfferType {
  City = 'cities',
  Favorite = 'favorites',
  NearPlace = 'near-places'
}

export enum SortType {
  Default = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum UrlMapMarker {
  Default = './img/pin.svg',
  Active = './img/pin-active.svg',
}

export enum MapMarker {
  Width = 27,
  Height = 39,
}

export enum NameSpace {
  App = 'APP',
  Data = 'DATA',
  User = 'USER',
}

export enum ReviewSendStatus {
  Error = 'ERROR',
  InProcess = 'IN_PROCESS',
  Success = 'SUCCESS',
  Unknown = 'UNKNOWN',
}
