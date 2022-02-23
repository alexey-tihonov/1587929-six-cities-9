import {Fragment} from 'react';
import {Offer} from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';

type OfferCardListProps = {
  offers: Offer[];
}

function OfferCardList({offers}: OfferCardListProps): JSX.Element {
  return (
    <Fragment>
      {offers.map((offer) => <OfferCard offer={offer} key={offer.id}/>)}
    </Fragment>
  );
}

export default OfferCardList;
