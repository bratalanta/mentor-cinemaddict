import { FilterOption } from '../../const';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = () => {
  return (
    <nav className='main-navigation'>
      {Object.entries(FilterOption).map(([filterKey, filterValue]) => (
        <NavigationItem
          filterValue={filterValue}
          filterKey={filterKey}
          key={filterKey}
        />
      ))}
    </nav>
  );
};

export default Navigation;
