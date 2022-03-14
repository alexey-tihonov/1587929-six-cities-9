import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';

function Login(): JSX.Element {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const {authorizationStatus} = useAppSelector((state) => state);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (login && password) {
      dispatch(loginAction({login, password}));
    }
  };
  const handleLoginChange = ({target}: ChangeEvent<HTMLInputElement>) => setLogin(target.value);
  const handlePasswordChange = ({target}: ChangeEvent<HTMLInputElement>) => setPassword(target.value);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    navigate('/');
  }

  return (
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form
          className="login__form form"
          action=""
          onSubmit={handleFormSubmit}
        >
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input
              onChange={handleLoginChange}
              className="login__input form__input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input
              onChange={handlePasswordChange}
              className="login__input form__input"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <button className="login__submit form__submit button" type="submit">Sign in</button>
        </form>
      </section>
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
