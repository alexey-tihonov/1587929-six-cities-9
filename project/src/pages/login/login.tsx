import React, {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {changeCity} from '../../store/app-process/app-process';
import LoginForm from '../../components/login-form/login-form';
import {getRandomCity, isAuth} from '../../utils';
import {AppRoute} from '../../const';

function Login(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locationsItem = getRandomCity();

  useEffect(() => {
    if (isAuth(authorizationStatus)) {
      navigate('/');
    }
  }, [authorizationStatus]);

  return (
    <div className="page__login-container container">
      <LoginForm/>
      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={AppRoute.Root}
            onClick={() => dispatch(changeCity(locationsItem))}
          >
            <span>{locationsItem}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Login;
