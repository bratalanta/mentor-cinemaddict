import React from 'react';
import FilmCardList from './FilmCardList/FilmCardList';
import { observer } from 'mobx-react-lite';
import PopupState from '../../store/PopupState';
import Popup from '../Popup/Popup';

const Films = observer(() => {
  return (
    <>
      <section className='films'>
        <FilmCardList />
      </section>
      {PopupState.activeId && <Popup film={PopupState.activeFilm} />}
    </>
  );
});

export default Films;
