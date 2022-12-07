import { useSearchParams } from 'react-router-dom';
import { SortOptionValue } from '../../../types/sort';

type SortItemProps = {
  sortOption: SortOptionValue;
};

const SortItem = ({ sortOption }: SortItemProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <button
      className={`sort__button ${
        searchParams.get('sort') === sortOption ? 'sort__button--active' : null
      }`}
      onClick={() => setSearchParams({ sort: sortOption })}
    >
      Sort by {sortOption}
    </button>
  );
};

export default SortItem;
