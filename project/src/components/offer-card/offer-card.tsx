import {memo, MouseEvent, useState} from 'react';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {AppRoute, AuthorizationStatus, MAX_RATING, OfferType} from '../../const';
import {getPercent} from '../../utils';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setIsFavoriteAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {redirectToRoute} from '../../store/action';

type OfferCardProps = {
  offer: Offer;
  offerType: string,
  setActiveOffer: (id: number) => void;
}

function OfferCard(props: OfferCardProps): JSX.Element {
  const {offer, offerType, setActiveOffer} = props;

  const [isFavorite, setIsFavorite] = useState(offer.isFavorite);
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleMouseEnter = () => {
    setActiveOffer(offer.id);
  };

  const handleAddToFavorites = (evt: MouseEvent): void => {
    evt.preventDefault();

    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(setIsFavoriteAction({
        offerId: offer.id,
        isFavorite: !isFavorite,
      }));

      setIsFavorite(!isFavorite);
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };

  let placeCardClassName = '';
  let placeCardInfoClassName = '';
  let placeCardImageWrapperClassName = '';
  let placeCardImageWidth = '260';
  let placeCardImageHeight = '200';

  switch (offerType) {
    case OfferType.City:
      placeCardClassName = 'cities__place-card';
      placeCardImageWrapperClassName = 'cities__image-wrapper';
      break;
    case OfferType.Favorite:
      placeCardClassName = 'favorites__card';
      placeCardInfoClassName = 'favorites__card-info';
      placeCardImageWrapperClassName = 'favorites__image-wrapper';
      placeCardImageWidth = '150';
      placeCardImageHeight = '110';
      break;
    case OfferType.NearPlace:
      placeCardClassName = 'near-places__card';
      placeCardImageWrapperClassName = 'near-places__image-wrapper';
      break;
  }

  return (
    <article className={`${placeCardClassName} place-card`} onMouseEnter={handleMouseEnter}>
      <div className="place-card__mark">
        {offer.isPremium && <span>Premium</span>}
      </div>
      <div className={`${placeCardImageWrapperClassName} place-card__image-wrapper`}>
        <Link className="header__logo-link" to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width={placeCardImageWidth} height={placeCardImageHeight} alt="Place image"/>
        </Link>
      </div>
      <div className={`${placeCardInfoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button${isFavorite ? ' place-card__bookmark-button--active' : ''} button`}
            type="button"
            onClick={handleAddToFavorites}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getPercent(offer.rating, MAX_RATING)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link className="header__logo-link" to={`/offer/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default memo(OfferCard, (prevProps, nextProps) => prevProps.offer.id === nextProps.offer.id);
