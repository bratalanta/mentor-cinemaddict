import React from 'react';
import FilmCard from '../FilmCard/FilmCard';

function FilmsExtra() {
  return (
    <section className='films-list films-list--extra'>
      <h2 className='films-list__title'>Top rated</h2>

      <div className='films-list__container'>
        <FilmCard />
        <FilmCard />
      </div>
    </section>
  );
}

export default FilmsExtra;
