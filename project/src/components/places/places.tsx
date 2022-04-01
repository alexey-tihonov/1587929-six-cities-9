import Sort from '../sort/sort';
import OfferCardList from '../offer-card-list/offer-card-list';
import Map from '../map/map';
import {useState} from 'react';
import {Offer} from '../../types/offer';

type Places = {
  cityName: string
  offers: Offer[],
  offerType: string,
  sort: string,
  onSortChange: (sort: string) => void,
}

function Places({cityName, offers, offerType, sort, onSortChange}: Places) {
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {cityName}</b>
        <Sort sort={sort} onSortChange={onSortChange}/>
        <div className="cities__places-list places__list tabs__content">
          <OfferCardList offers={offers} offerType={offerType} onActiveOfferChange={setActiveOffer}/>
        </div>
      </section>
      <div className="cities__right-section">
        <Map className="cities__map" activeOffer={activeOffer} offers={offers}/>
      </div>
    </>
  );
}

export default Places;
