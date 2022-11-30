import { useEffect } from 'react';
import FilmCardList from './FilmCardList/FilmCardList';
import { observer } from 'mobx-react-lite';
import PopupState from '../../store/PopupState';
import Popup from '../Popup/Popup';
import FilmsState from '../../store/FilmsState';
import Loader from '../Loader/Loader';
import { FecthStatus } from '../../const';

const Films = observer(() => {
  useEffect(() => {
    FilmsState.fetchMovieList();
  }, []);

  if (FilmsState.state === FecthStatus.Pending) {
    return <Loader />;
  }
  if (FilmsState.state === FecthStatus.Rejected) {
    return <div>Произошла ошибка</div>;
  }
  return (
    <>
      <section className='films'>
        <FilmCardList />
      </section>
      {PopupState.activeFilm && <Popup film={PopupState.activeFilm} />}
    </>
  );
});

export default Films;
