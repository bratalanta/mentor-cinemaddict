import { SortOption } from '../../const';
import SortItem from './SortItem/SortItem';

const Sort = () => {
  return (
    <form className='sort'>
      {Object.values(SortOption).map((option) => (
        <SortItem sortOption={option} key={option} />
      ))}
    </form>
  );
};

export default Sort;
