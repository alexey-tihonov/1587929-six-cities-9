import {useAppSelector, useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/app-process/app-process';

type CityProps = {
  city: string
}

function City({city}: CityProps) {
  const {activeCity} = useAppSelector(({APP}) => APP);
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
