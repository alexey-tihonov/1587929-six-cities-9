import {Link, Outlet, useLocation} from 'react-router-dom';
import Icons from '../icons/icons';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {isAuth} from '../../utils';
import {AppRoute} from '../../const';
import {logoutAction} from '../../store/api-actions';

function Layout(): JSX.Element {
  const location = useLocation();
  const {authorizationStatus} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <>
      <Icons/>
      <div className={`page page--gray${location.pathname === AppRoute.Root ? 'page--main' : ''}`}>
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to={AppRoute.Root}>
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    {
                      isAuth(authorizationStatus) ?
                        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                          </div>
                          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        </Link> :
                        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                          </div>
                          <span className="header__login">Sign in</span>
                        </Link>
                    }
                  </li>
                  {
                    isAuth(authorizationStatus) &&
                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        onClick={(evt) => {
                          evt.preventDefault();
                          dispatch(logoutAction());
                        }}
                        to={AppRoute.Login}
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  }
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <Outlet/>
        </main>

        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.Root}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      </div>
    </>);
}

export default Layout;
