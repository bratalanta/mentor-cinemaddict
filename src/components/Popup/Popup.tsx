import React, { KeyboardEvent, MouseEvent, useEffect, useRef } from 'react';
import PopupCommentsBlock from './PopupCommentsBlock/PopupCommentsBlock';
import PopupControls from './PopupControls/PopupControls';
import PopupDetails from './PopupDetails/PopupDetails';
import { observer } from 'mobx-react-lite';
import popupState from '../../store/popupState';
import { TAdaptedFilm } from '../../types/adaptedFilm';

const Popup = observer((props: TAdaptedFilm): JSX.Element => {
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (overlay.current) {
      overlay.current.focus();
    }
  }, []);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      popupState.close();
    }
    document.body.style.overflowY = '';
  };

  const handleOverlayClick = (e: MouseEvent<HTMLElement>) => {
    if (overlay && e.target === overlay.current) {
      popupState.close();
    }
    document.body.style.overflowY = '';
  };

  return (
    <div
      className='overlay'
      ref={overlay}
      tabIndex={0}
      onClick={handleOverlayClick}
      onKeyDown={handleKeyPress}
    >
      <section className='film-details'>
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
            <PopupDetails filmInfo={props.filmInfo} />

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
