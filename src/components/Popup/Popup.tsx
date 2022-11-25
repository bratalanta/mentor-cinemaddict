import React, { KeyboardEvent, MouseEvent, useEffect, useRef } from 'react';
import PopupCommentsBlock from './PopupCommentsBlock/PopupCommentsBlock';
import PopupControls from './PopupControls/PopupControls';
import PopupDetails from './PopupDetails/PopupDetails';
import { observer } from 'mobx-react-lite';
import popupState from '../../store/popupState';
import { TAdaptedFilm } from '../../types/adaptedFilm';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const Popup = observer((props: TAdaptedFilm): JSX.Element => {
  const overlay = useRef<HTMLElement>(null);

  useOutsideClick(overlay, () => popupState.close());

  return (
    <section ref={overlay} className='film-details'>
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
  );
});

export default Popup;
