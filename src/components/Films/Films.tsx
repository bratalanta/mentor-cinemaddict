import FilmCardList from './FilmCardList/FilmCardList';
import { observer } from 'mobx-react-lite';
import Popup from '../Popup/Popup';

const Films = observer(() => {
  return (
    <>
      <section className='films'>
        <FilmCardList />
      </section>
      <Popup />
    </>
  );
});

export default Films;
