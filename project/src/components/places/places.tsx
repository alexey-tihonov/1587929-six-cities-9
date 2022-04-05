import Sort from '../sort/sort';
import OfferCardList from '../offer-card-list/offer-card-list';
import Map from '../map/map';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getOffers} from '../../store/app-data/selectors';
import {getSortType} from '../../store/app-process/selectors';
import {setActiveCityOffers, setSortType} from '../../store/app-process/app-process';
import {filterOffers, sortOffers} from '../../utils';
import {Offer} from '../../types/offer';

type PlacesProps = {
  cityName: string,
  cityOffers: Offer[],
  offerType: string,
}

function Places({cityName, cityOffers, offerType}: PlacesProps) {
  const dispatch = useAppDispatch();
  const sortType = useAppSelector(getSortType);
  const offers = useAppSelector(getOffers);

  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const setSort = (sort: string) => dispatch(setSortType(sort));

  useEffect(() => {
    const unsortedOffers = filterOffers(cityName, offers);
    dispatch(setActiveCityOffers(sortOffers(sortType, unsortedOffers)));
  }, [dispatch, cityName, offers, sortType]);

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{cityOffers.length} places to stay in {cityName}</b>
        <Sort sort={sortType} onSortChange={setSort}/>
        <div className="cities__places-list places__list tabs__content">
          <OfferCardList offers={cityOffers} offerType={offerType} onActiveOfferChange={setActiveOffer}/>
        </div>
      </section>
      <div className="cities__right-section">
        <Map className="cities__map" activeOffer={activeOffer} offers={cityOffers}/>
      </div>
    </>
  );
}

export default Places;
