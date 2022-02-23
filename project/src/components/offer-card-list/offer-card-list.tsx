import React, {Fragment, useState} from 'react';
import {Offer} from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';

type OfferCardListProps = {
  offers: Offer[];
  offerType: string,
}

function OfferCardList(props: OfferCardListProps): JSX.Element {
  const {offers, offerType} = props;
  const [firstOffer] = offers;
  const [activeOffer, setActiveOffer] = useState(firstOffer.id);
  const changeActiveOffer = (currentActiveOffer: number, {id}: Offer) => setActiveOffer(id);

  return (
    <Fragment>
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} offerType={offerType} onMouseEnterHandler={() => changeActiveOffer(activeOffer, offer)} />)}
    </Fragment>
  );
}

export default OfferCardList;
