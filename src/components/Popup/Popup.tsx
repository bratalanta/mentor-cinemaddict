import React, { useRef, useEffect } from 'react';
import PopupCommentsBlock from './PopupCommentsBlock/PopupCommentsBlock';
import PopupControls from './PopupControls/PopupControls';
import PopupDetails from './PopupDetails/PopupDetails';
import { observer } from 'mobx-react-lite';
import popupState from '../../store/PopupState';
import { TAdaptedFilm } from '../../types/adaptedFilm';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import CommentsState from '../../store/CommentsState';

type PopupProps = {
  film: TAdaptedFilm;
};

const Popup = observer(({ film }: PopupProps): JSX.Element => {
  useEffect(() => {
    CommentsState.fetchCommentList(film.id);
  }, []);

  const popup = useRef() as React.MutableRefObject<HTMLDivElement>;

  const popupHandler = () => {
    popupState.close();
    CommentsState.resetCommentList();
  };

  useOutsideClick(popup, popupHandler);

  return (
    <div className='overlay'>
      <section ref={popup} className='film-details'>
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
