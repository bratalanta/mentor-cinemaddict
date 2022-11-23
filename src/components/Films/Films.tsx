import React from 'react';
import FilmCardList from './FilmCardList/FilmCardList';
// import FilmsExtra from './FilmsExtra/FilmsExtra';

const Films = () => {
  return (
    <section className='films'>
      <FilmCardList />
      {/* <FilmsExtra />
      <FilmsExtra /> */}
    </section>
  );
};

export default Films;
