import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, OfferType} from '../../const';
import {useAppSelector} from '../../hooks';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import Preloader from '../preloader/preloader';

function App(): JSX.Element {
  const {isDataLoaded, data} = useAppSelector((state) => state);

  if (!isDataLoaded) {
    return <Preloader/>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main offerType={OfferType.City}/>}/>
          <Route path={AppRoute.Login} element={<Login/>}/>
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Favorites offers={data} offerType={OfferType.Favorite}/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Room} element={<Room offers={data} reviews={[]}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
