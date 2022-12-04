import FilmCard from '../FilmCard/FilmCard';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import { observer } from 'mobx-react-lite';
import { useSearchParams } from 'react-router-dom';
import { getCurrentSortedFilms } from '../helper';
import { SortOptions } from '../../../const';

const FilmCardList = observer(() => {
  const [param] = useSearchParams();
  const queryParam = param.get('sort') || SortOptions.DEFAULT;
  return (
    <section className='films-list'>
      <h2 className='films-list__title visually-hidden'>
        All movies. Upcoming
      </h2>

      <div className='films-list__container'>
        {getCurrentSortedFilms(queryParam).map((film) => (
          <FilmCard film={film} key={film.id} />
        ))}
      </div>

      <ShowMoreButton />
    </section>
  );
});

export default FilmCardList;
