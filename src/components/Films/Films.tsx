import React from 'react';
import FilmCardList from './FilmCardList/FilmCardList';
import FilmsExtra from './FilmsExtra/FilmsExtra';

function Films() {
  return (
    <section className='films'>
      <FilmCardList />
      <FilmsExtra />
      <FilmsExtra />
    </section>
  );
}

export default Films;
