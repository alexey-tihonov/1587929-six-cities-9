import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {store} from './store';

const Setting = {
  RENT_OFFERS_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        rentOffersCount = {Setting.RENT_OFFERS_COUNT}
        offers = {offers}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
