import React from 'react';
import City from '../city/city';
import {cities} from '../../const';
import {useAppSelector} from '../../hooks';
import {getActiveCity, getActiveCityOffers} from '../../store/app-process/selectors';
import Places from '../places/places';
import NoPlaces from '../no-places/no-places';

type CityListProps = {
  offerType: string;
}

function CityList({offerType}: CityListProps) {
  const offers = useAppSelector(getActiveCityOffers);
  const activeCity = useAppSelector(getActiveCity);

  const isExistOffers = offers.length > 0;

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => <City city={city} key={city}/>)}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className={`cities__places-container${(isExistOffers) ? '' : ' cities__places-container--empty'} container`}>
          {isExistOffers ? (
            <Places cityName={activeCity} cityOffers={offers} offerType={offerType}/>
          ) : (
            <NoPlaces cityName={activeCity}/>
          )}
        </div>
      </div>
    </>
  );
}

export default CityList;
