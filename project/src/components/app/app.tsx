import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {AppRoute, OfferType} from '../../const';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getData, getLoadedDataStatus} from '../../store/app-data/selectors';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import Preloader from '../preloader/preloader';
import HistoryRouter from '../history-route/history-route';
import {isCheckedAuth} from '../../utils';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const data = useAppSelector(getData);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <Preloader/>;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout/>}>
          <Route index element={<Main offerType={OfferType.City}/>}/>
          <Route path={AppRoute.Login} element={<Login/>}/>
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <Favorites offers={data} offerType={OfferType.Favorite}/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Room} element={<Room offers={data}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
