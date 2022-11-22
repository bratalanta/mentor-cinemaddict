import React from 'react';
import FilmCard from '../FilmCard/FilmCard';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

function FilmCardList() {
  return (
    <section className='films-list'>
      <h2 className='films-list__title visually-hidden'>
        All movies. Upcoming
      </h2>

      <div className='films-list__container'>
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
      </div>

      <ShowMoreButton />
    </section>
  );
}

export default FilmCardList;
