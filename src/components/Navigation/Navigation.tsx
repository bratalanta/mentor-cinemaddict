import { FilterOption } from '../../const';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = Object.values(FilterOption);
const NavigationProperties = Object.keys(FilterOption);

const Navigation = () => {
  return (
    <nav className='main-navigation'>
      {NavigationItems.map((item, index) => (
        <NavigationItem
          to={item}
          title={NavigationProperties[index]}
          key={item}
        />
      ))}
    </nav>
  );
};

export default Navigation;
