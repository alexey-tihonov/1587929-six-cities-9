import React, {Fragment, useState} from 'react';
import {Offer} from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';

type OfferCardListProps = {
  offers: Offer[];
}

function OfferCardList({offers}: OfferCardListProps): JSX.Element {
  const [firstOffer] = offers;
  const [activeOffer, setActiveOffer] = useState(firstOffer.id);
  const changeActiveOffer = (currentActiveOffer: number, {id}: Offer) => {
    setActiveOffer(id);
  };

  return (
    <Fragment>
      {offers.map((offer) => <OfferCard offer={offer} key={offer.id} onMouseEnterHandler={() => changeActiveOffer(activeOffer, offer)} />)}
    </Fragment>
  );
}

export default OfferCardList;
