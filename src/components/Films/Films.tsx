import React from 'react';
import FilmCardList from './FilmCardList/FilmCardList';
// import FilmsExtra from './FilmsExtra/FilmsExtra';
import filmsList from '../../store/filmsState';
import { observer } from 'mobx-react-lite';

const Films = observer(() => {
  return (
    <section className='films'>
      <FilmCardList filmsList={filmsList.filmsList} />
      {/* <FilmsExtra />
      <FilmsExtra /> */}
    </section>
  );
});

export default Films;
