import {useEffect, useState} from 'react';
import {cities, SortType} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fillOffers} from '../../store/app-process/app-process';
import {getData} from '../../store/app-data/selectors';
import {getActiveCity, getCurrentOffers} from '../../store/app-process/selectors';
import {getOffers, sortOffers} from '../../utils';
import CityList from '../../components/city-list/city-list';
import Places from '../../components/places/places';
import NoPlaces from '../../components/no-places/no-places';

type PageMainProps = {
  offerType: string;
}

function Main({offerType}: PageMainProps): JSX.Element {
  const activeCity = useAppSelector(getActiveCity);
  const data = useAppSelector(getData);
  const offers = useAppSelector(getCurrentOffers);
  const dispatch = useAppDispatch();

  const [sort, setSort] = useState(SortType.Default.toString());
  const isExistOffers = (offers.length > 0);
  let currentOffers = getOffers(activeCity, data);

  useEffect(() => {
    currentOffers = getOffers(activeCity, data);
    setSort(SortType.Default);
    dispatch(fillOffers(currentOffers));
  }, [activeCity]);

  useEffect(() => {
    if (isExistOffers) {
      dispatch(fillOffers(sortOffers(sort, currentOffers)));
    }
  }, [sort]);

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityList cities={cities}/>
      </div>
      <div className="cities">
        <div className={`cities__places-container${(isExistOffers) ? '' : ' cities__places-container--empty'} container`}>
          {isExistOffers ? (
            <Places cityName={activeCity} offers={offers} offerType={offerType} sort={sort} setSort={setSort}/>
          ) : (
            <NoPlaces cityName={activeCity}/>
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
