import { useSearchParams } from 'react-router-dom';
import { SortOptionValue } from '../../../types/sort';

type SortItemProps = {
  sortOption: SortOptionValue;
  isActive: boolean;
  onSortClick: (option: SortOptionValue) => void;
};

const SortItem = ({ sortOption, isActive, onSortClick }: SortItemProps) => {
  const [_, setParam] = useSearchParams();

  const handleClick = () => {
    onSortClick(sortOption);
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
