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
        // При таком подходе при первой отрисовке приложения Sort by default не получает класс активности, так как параметры сортировки не заданы изначально. В таком случае отпадает необходимость в кнопке сортировки по дефолту, потому что при смене фильтрации параметры сортировки сбрасываются.
      }`}
      onClick={() => setSearchParams({ sort: sortOption })}
    >
      Sort by {sortOption}
    </button>
  );
};

export default SortItem;
