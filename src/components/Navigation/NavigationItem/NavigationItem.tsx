import { NavLink } from 'react-router-dom';
import filmsState from '../../../store/filmsState';
import { FilterOptionValue } from '../../../types/filter';

interface NavigationItemProps {
  filterValue: FilterOptionValue;
  filterKey: string;
}

const NavigationItem = ({ filterValue, filterKey }: NavigationItemProps) => {
  return (
    <NavLink
      to={`/${filterValue}`}
      className={({ isActive }) =>
        isActive
          ? 'main-navigation__item main-navigation__item--active'
          : 'main-navigation__item'
      }
      onClick={() => filmsState.filter(filterValue)}
    >
      {filterKey}
    </NavLink>
  );
};

export default NavigationItem;
