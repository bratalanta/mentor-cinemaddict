/* eslint-disable arrow-body-style */
import React, { KeyboardEvent, MouseEvent, useEffect, useRef } from 'react';
import PopupCommentsBlock from './PopupCommentsBlock/PopupCommentsBlock';
import PopupControls from './PopupControls/PopupControls';
import PopupDetails from './PopupDetails/PopupDetails';
import { observer } from 'mobx-react-lite';
import popup from '../../store/Popup';
import { TAdaptedFilm } from '../../types/adaptedFilms';

const Popup = observer((props: TAdaptedFilm): JSX.Element => {
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (overlay.current) {
      overlay.current.focus();
    }
  }, []);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      popup.close();
    }
  };

  const handleOverlayClick = (e: MouseEvent<HTMLElement>) => {
    if (overlay && e.target === overlay.current) {
      popup.close();
    }
  };

  return (
    <div
      className='overlay'
      onClick={handleOverlayClick}
      ref={overlay}
      tabIndex={0}
      onKeyDown={handleKeyPress}
    >
      <section className='film-details'>
        <form className='film-details__inner' action='' method='get'>
          <div className='film-details__top-container'>
            <div className='film-details__close'>
              <button
                className='film-details__close-btn'
                type='button'
                onClick={() => popup.close()}
              >
                close
              </button>
            </div>
            <PopupDetails {...props.filmInfo} />

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
