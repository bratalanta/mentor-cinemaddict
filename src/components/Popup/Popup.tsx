import React from 'react';
import PopupCommentsBlock from './PopupCommentsBlock/PopupCommentsBlock';
import PopupControls from './PopupControls/PopupControls';

import PopupDetails from './PopupDetails/PopupDetails';

function Popup() {
  return (
    <section className='film-details'>
      <form className='film-details__inner' action='' method='get'>
        <div className='film-details__top-container'>
          <div className='film-details__close'>
            <button className='film-details__close-btn' type='button'>
              close
            </button>
          </div>
          <PopupDetails />

          <PopupControls />
        </div>

        <div className='film-details__bottom-container'>
          <PopupCommentsBlock />
        </div>
      </form>
    </section>
  );
}

export default Popup;
