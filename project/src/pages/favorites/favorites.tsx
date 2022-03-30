import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFavoriteOffersAction} from '../../store/api-actions';
import {getFavoriteOffers} from '../../store/app-data/selectors';
import {AppRoute, cities, OfferType} from '../../const';
import {getOffers} from '../../utils';
import OfferCardList from '../../components/offer-card-list/offer-card-list';

function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isExistFavoriteOffers = (favoriteOffers.length > 0);

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, []);

  return (
    <div className="page__favorites-container container">
      <section className={`favorites${isExistFavoriteOffers ? ' favorites--empty' : ''}`}>
        {isExistFavoriteOffers ? (
          <>
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                cities.map((city) => {
                  const offers = getOffers(city, favoriteOffers);
                  if (offers.length > 0) {
                    return (
                      <li className="favorites__locations-items" key={city}>
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <Link
                              className="locations__item-link"
                              to={AppRoute.Root}
                            >
                              <span>{city}</span>
                            </Link>
                          </div>
                        </div>
                        <div className="favorites__places">
                          <OfferCardList offers={offers} offerType={OfferType.Favorite} setActiveOffer={() => false}/>
                        </div>
                      </li>
                    );
                  }
                })
              }
            </ul>
          </>
        ) : (
          <>
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default Favorites;
