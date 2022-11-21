import React from 'react';
import FilmCard from '../FilmCard/FilmCard';

function FilmCardList(props) {
  return (
    <>
      <h2 className='films-list__title visually-hidden'>
        All movies. Upcoming
      </h2>

      <div className='films-list__container'>
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
      </div>

      <button className='films-list__show-more'>Show more</button>
    </>
  );
}

export default FilmCardList;
