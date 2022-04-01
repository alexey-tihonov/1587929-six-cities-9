import {SortType} from '../../const';

type SortProps = {
  sort: string,
  onSortChange: (sort: string) => void,
}

function Sort({sort, onSortChange}: SortProps) {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Object.values(SortType).map((sortName) => (
          <li
            className={`places__option${sort === sortName ? ' places__option--active' : ''}`}
            key={sortName}
            tabIndex={0}
            onClick={() => sort !== sortName && onSortChange(sortName)}
          >
            {sortName}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
