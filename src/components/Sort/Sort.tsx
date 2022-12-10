import { SortOption } from '../../const';
import SortItem from './SortItem/SortItem';

const Sort = () => {
  return (
    <form className='sort'>
      {Object.values(SortOption).map((option, index) => (
        <SortItem sortOption={option} key={index} />
      ))}
    </form>
  );
};

export default Sort;
