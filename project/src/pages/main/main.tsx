import {useEffect, useState} from 'react';
import {cities} from '../../const';
import Map from '../../components/map/map';
import OfferCardList from '../../components/offer-card-list/offer-card-list';
import CityList from '../../components/city-list/city-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fillOffers} from '../../store/action';
import {allOffers} from '../../mocks/offers';
import {getOffers} from '../../utils';

type PageMainProps = {
  offerType: string;
}

function Main({offerType}: PageMainProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {activeCity, offers} = useAppSelector((state) => state);
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const isExistOffers = (offers.length > 0);

  useEffect(() => {
    dispatch(fillOffers(getOffers(activeCity, allOffers)));
  }, [activeCity]);

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
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
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
