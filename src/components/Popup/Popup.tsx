import { useRef } from 'react';
import PopupCommentsBlock from './PopupCommentsBlock/PopupCommentsBlock';
import PopupControls from './PopupControls/PopupControls';
import PopupDetails from './PopupDetails/PopupDetails';
import { observer } from 'mobx-react-lite';
import popupState from '../../store/popupState';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const Popup = observer(() => {
  const film = popupState.activeFilm;

  const popupRef = useRef(null);

  useOutsideClick(popupRef, () => popupState.close());

  if (!film.id) {
    return null;
  }
  return (
    <div className='overlay'>
      <section ref={popupRef} className='film-details'>
        <form className='film-details__inner' action='' method='get'>
          <div className='film-details__top-container'>
            <div className='film-details__close'>
              <button
                className='film-details__close-btn'
                type='button'
                onClick={() => popupState.close()}
              >
                close
              </button>
            </div>
            <PopupDetails filmInfo={film.filmInfo} />

            <PopupControls />
          </div>

          <div className='film-details__bottom-container'>
            <PopupCommentsBlock />
          </div>
        </form>
      </section>
    </div>
  );
});

export default Popup;
