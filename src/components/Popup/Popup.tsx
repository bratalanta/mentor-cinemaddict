import { useRef, useEffect } from 'react';
import PopupCommentsBlock from './PopupCommentsBlock/PopupCommentsBlock';
import PopupControls from './PopupControls/PopupControls';
import PopupDetails from './PopupDetails/PopupDetails';
import { observer } from 'mobx-react-lite';
import PopupState from '../../store/PopupState';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import CommentsState from '../../store/CommentsState';

const Popup = observer(() => {
  const film = PopupState.activeFilm;
  useEffect(() => {
    if (!PopupState.activeFilm.id) {
      return;
    }
    CommentsState.fetchCommentList(PopupState.activeFilm.id);
  }, []);

  const popupRef = useRef(null);

  useOutsideClick(popupRef, () => PopupState.close());

  if (!PopupState.activeFilm.id) {
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
                onClick={() => PopupState.close()}
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
