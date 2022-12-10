import FilmCard from '../FilmCard/FilmCard';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import { observer } from 'mobx-react-lite';
import { useSearchParams } from 'react-router-dom';
import { SortOption } from '../../../const';
import filmsState from '../../../store/filmsState';
import { SortOptionValue } from '../../../types/sort';

const FilmCardList = observer(() => {
  const [searchParam] = useSearchParams();
  const queryParam =
    (searchParam.get('sort') as SortOptionValue) || SortOption.DEFAULT;

  return (
    <section className='films-list'>
      <h2 className='films-list__title visually-hidden'>
        All movies. Upcoming
      </h2>
      <div className='films-list__container'>
        {filmsState.sort(queryParam).map((film) => (
          <FilmCard film={film} key={film.id} />
        ))}
      </div>
      <ShowMoreButton />
    </section>
  );
});

export default FilmCardList;
