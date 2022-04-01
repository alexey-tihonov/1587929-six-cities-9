import React, {useEffect, useState} from 'react';
import {cities, SortType} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setActiveCityOffers} from '../../store/app-process/app-process';
import {getOffers} from '../../store/app-data/selectors';
import {getActiveCity, getActiveCityOffers} from '../../store/app-process/selectors';
import {filterOffers, sortOffers} from '../../utils';
import CityList from '../../components/city-list/city-list';
import Places from '../../components/places/places';
import NoPlaces from '../../components/no-places/no-places';
import Preloader from '../../components/preloader/preloader';

type PageMainProps = {
  offerType: string;
}

function Main({offerType}: PageMainProps): JSX.Element {
  const activeCity = useAppSelector(getActiveCity);
  const data = useAppSelector(getOffers);
  const offers = useAppSelector(getActiveCityOffers);
  const dispatch = useAppDispatch();

  const [sort, setSort] = useState(SortType.Default.toString());
  const isExistOffers = offers !== null && (offers.length > 0);
  const unsortedOffers = filterOffers(activeCity, data);

  useEffect(() => {
    setSort(SortType.Default);
    dispatch(setActiveCityOffers(filterOffers(activeCity, data)));
  }, [activeCity]);

  useEffect(() => {
    if (isExistOffers) {
      dispatch(setActiveCityOffers(sortOffers(sort, unsortedOffers)));
    }
  }, [sort]);

  if (offers === null) {
    return <Preloader/>;
  }

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityList cities={cities}/>
      </div>
      <div className="cities">
        <div className={`cities__places-container${(isExistOffers) ? '' : ' cities__places-container--empty'} container`}>
          {isExistOffers ? (
            <Places cityName={activeCity} offers={offers} offerType={offerType} sort={sort} onSortChange={setSort}/>
          ) : (
            <NoPlaces cityName={activeCity}/>
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
