import React, {useEffect} from 'react';
import Header from '../../components/header/header';
import CityList from '../../components/city-list/city-list';
import {fetchOffersAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type PageMainProps = {
  offerType: string;
}

function Main({offerType}: PageMainProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [authorizationStatus, dispatch]);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <CityList offerType={offerType}/>
      </main>
    </div>
  );
}

export default Main;
