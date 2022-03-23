import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/app-process/app-process';
import {getActiveCity} from '../../store/app-process/selectors';

type CityProps = {
  city: string
}

function City({city}: CityProps) {
  const activeCity = useAppSelector(getActiveCity);
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item${activeCity === city ? ' tabs__item--active' : ''}`} onClick={() => dispatch(changeCity(city))}>
        <span>{city}</span>
      </a>
    </li>
  );
}

export default City;
