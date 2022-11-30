import React, { useRef } from 'react';
import PopupCommentsBlock from './PopupCommentsBlock/PopupCommentsBlock';
import PopupControls from './PopupControls/PopupControls';
import PopupDetails from './PopupDetails/PopupDetails';
import { observer } from 'mobx-react-lite';
import popupState from '../../store/PopupState';
import { TAdaptedFilm } from '../../types/adaptedFilm';
import { useOutsideClick } from '../../hooks/useOutsideClick';

type PopupProps = {
  film: TAdaptedFilm;
};

const Popup = observer(({ film }: PopupProps): JSX.Element => {
  const popup = useRef() as React.MutableRefObject<HTMLDivElement>;

  useOutsideClick(popup, () => popupState.close());

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
