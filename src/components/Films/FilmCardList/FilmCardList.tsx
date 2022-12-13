import { useEffect } from 'react';
import FilmCard from '../FilmCard/FilmCard';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import { observer } from 'mobx-react-lite';
import { useSearchParams } from 'react-router-dom';
import filmsState from '../../../store/filmsState';
import { SortOptionValue } from '../../../types/sort';

const FilmCardList = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      sort: searchParams.get('sort') || filmsState.activeSortOption,
    });
    filmsState.setActiveSortOption(searchParams.get('sort') as SortOptionValue);
    // Сделано для синхронизации состояния сортировки и адресной строки при перезагрузке страницы и смены параметра фильтрации. Можно, конечно, передавать это состояние через NavLink, но я решил сделать это с MobX
  }, [searchParams, setSearchParams]);

  return (
    <section className='films-list'>
      <h2 className='films-list__title visually-hidden'>
        All movies. Upcoming
      </h2>
      <div className='films-list__container'>
        {/* Тут не получится сделать фильтрацию и сортировку подряд, потому что у отфильтрованных фильмов нет метода сортировки, он есть только в классе состояния filmsState. Поэтому было создано поле для хранения отфильтрованных фильмов. Либо нужно создавать константу, которую сначала надо отфильтровать, потом отсортировать, и только потом отрисовать. Грубо говоря, перенести ту логику, которая сейчас в сторе, в компонент */}
        {filmsState.sort(filmsState.activeSortOption).map((film) => (
          <FilmCard film={film} key={film.id} />
        ))}
      </div>
      <ShowMoreButton />
    </section>
  );
});

export default FilmCardList;
