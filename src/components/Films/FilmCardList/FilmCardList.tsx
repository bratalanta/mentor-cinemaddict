import FilmCard from '../FilmCard/FilmCard';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import { observer } from 'mobx-react-lite';
import { useParams, useSearchParams } from 'react-router-dom';
import { SortOptions } from '../../../const';
import { useFilter } from '../../../hooks/useFilter';

const FilmCardList = observer(() => {
  const { filter } = useParams();
  const [param] = useSearchParams();
  const queryParam = param.get('sort') || SortOptions.DEFAULT;
  const films = useFilter(filter, queryParam);
  return (
    <section className='films-list'>
      <h2 className='films-list__title visually-hidden'>
        All movies. Upcoming
      </h2>

      <div className='films-list__container'>
        {films.map((film) => (
          <FilmCard film={film} key={film.id} />
        ))}
      </div>

      <ShowMoreButton />
    </section>
  );
});

export default FilmCardList;
