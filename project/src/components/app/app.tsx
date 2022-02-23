import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';

type AppProps = {
  rentOffersCount: number;
  offers: Offer[];
  reviews: Review[];
}

function App({rentOffersCount, offers, reviews}: AppProps): JSX.Element {
  const [firstOffer] = offers;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main rentOffersCount={rentOffersCount} offers={offers}/>}/>
          <Route path={AppRoute.Login} element={<Login/>}/>
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Room} element={<Room property={firstOffer} reviews={reviews}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
