import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFavoriteOffersAction} from '../../store/api-actions';
import {getFavoriteOffers} from '../../store/app-data/selectors';
import {changeCity} from '../../store/app-process/app-process';
import {AppRoute, cities, OfferType} from '../../const';
import {filterOffers} from '../../utils';
import OfferCardList from '../../components/offer-card-list/offer-card-list';
import Preloader from '../../components/preloader/preloader';

function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  const isExistFavoriteOffers = favoriteOffers !== null && (favoriteOffers.length > 0);

  if (favoriteOffers === null) {
    return <Preloader/>;
  }

  return (
    <div className="page__favorites-container container">
      <section className={`favorites${isExistFavoriteOffers ? ' favorites--empty' : ''}`}>
        {isExistFavoriteOffers ? (
          <>
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                cities.map((city) => {
                  const offers = filterOffers(city, favoriteOffers);
                  if (offers.length > 0) {
                    return (
                      <li className="favorites__locations-items" key={city}>
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <Link
                              className="locations__item-link"
                              to={AppRoute.Root}
                              onClick={() => dispatch(changeCity(city))}
                            >
                              <span>{city}</span>
                            </Link>
                          </div>
                        </div>
                        <div className="favorites__places">
                          <OfferCardList offers={offers} offerType={OfferType.Favorite} onActiveOfferChange={() => false}/>
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
