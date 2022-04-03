import React from 'react';
import {Offer} from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';

type OfferCardListProps = {
  offers: Offer[],
  offerType: string,
  onActiveOfferChange: (id: number) => void,
}

function OfferCardList(props: OfferCardListProps): JSX.Element {
  const {offers, offerType, onActiveOfferChange} = props;

  return (
    <>
      {offers.map((offer) =>
        <OfferCard key={offer.id} offer={offer} offerType={offerType} onActiveOfferChange={onActiveOfferChange}/>)}
    </>
  );
}

export default OfferCardList;
