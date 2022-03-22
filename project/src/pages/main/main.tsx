import {useEffect, useState} from 'react';
import {cities, SortType} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fillOffers} from '../../store/app-process/app-process';
import {getOffers, sortOffers} from '../../utils';
import CityList from '../../components/city-list/city-list';
import Map from '../../components/map/map';
import OfferCardList from '../../components/offer-card-list/offer-card-list';
import Sort from '../../components/sort/sort';

type PageMainProps = {
  offerType: string;
}

function Main({offerType}: PageMainProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(({DATA}) => DATA);
  const {activeCity, offers} = useAppSelector(({APP}) => APP);
  const [activeOffer, setActiveOffer] = useState<number | null>(null);
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
            <>
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in Amsterdam</b>
                <Sort sort={sort} setSort={setSort}/>
                <div className="cities__places-list places__list tabs__content">
                  <OfferCardList offers={offers} offerType={offerType} setActiveOffer={setActiveOffer}/>
                </div>
              </section>
              <div className="cities__right-section">
                <Map className="cities__map" activeOffer={activeOffer} offers={offers}/>
              </div>
            </>
          ) : (
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
