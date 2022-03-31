import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import LoginForm from '../../components/login-form/login-form';

function Login(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const navigate = useNavigate();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate('/');
    }
  }, [authorizationStatus]);

  return (
    <div className="page__login-container container">
      <LoginForm/>
      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Login;
