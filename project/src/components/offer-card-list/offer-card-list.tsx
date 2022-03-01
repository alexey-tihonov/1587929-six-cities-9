import React, {Fragment} from 'react';
import {Offer} from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';

type OfferCardListProps = {
  offers: Offer[];
  offerType: string,
  setActiveOffer: (id: number) => void;
}

function OfferCardList(props: OfferCardListProps): JSX.Element {
  const {offers, offerType, setActiveOffer} = props;

  return (
    <Fragment>
      {offers.map((offer) =>
        <OfferCard key={offer.id} offer={offer} offerType={offerType} setActiveOffer={setActiveOffer}/>)}
    </Fragment>
  );
}

export default OfferCardList;
