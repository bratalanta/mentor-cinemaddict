import React from 'react';
import FilmCard from '../FilmCard/FilmCard';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import movies from '../../../store/filmsState';

const FilmCardList = () => {
  return (
    <section className='films-list'>
      <h2 className='films-list__title visually-hidden'>
        All movies. Upcoming
      </h2>

      <div className='films-list__container'>
        {movies.filmsList.map((film) => (
          <FilmCard film={film} key={film.id} />
        ))}
      </div>

      <ShowMoreButton />
    </section>
  );
};

export default FilmCardList;
