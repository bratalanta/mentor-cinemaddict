import { useSearchParams } from 'react-router-dom';
import sortState from '../../../store/sortState';
import { SortOptionValue } from '../../../types/sort';

type SortItemProps = {
  sortOption: SortOptionValue;
};

const SortItem = ({ sortOption }: SortItemProps) => {
  const [_, setParam] = useSearchParams();
  const isActive = sortOption === sortState.activeSortOption;

  const handleClick = () => {
    sortState.setActiveSortOption(sortOption);
    setParam({ sort: sortOption });
  };

  return (
    <button
      className={`sort__button ${isActive ? 'sort__button--active' : null}`}
      onClick={handleClick}
    >
      Sort by {sortOption}
    </button>
  );
};

export default SortItem;
