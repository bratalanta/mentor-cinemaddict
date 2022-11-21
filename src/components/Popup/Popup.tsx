import React from 'react';
import PopupComments from '../PopupComments/PopupComments';
import PopupControl from '../PopupControl/PopupControl';
import PopupInfo from '../PopupInfo/PopupInfo';

function Popup(props) {
  return (
    <section className='film-details'>
      <form className='film-details__inner' action='' method='get'>
        <div className='film-details__top-container'>
          <div className='film-details__close'>
            <button className='film-details__close-btn' type='button'>
              close
            </button>
          </div>
          <PopupInfo />

          <PopupControl />
        </div>

        <div className='film-details__bottom-container'>
          <PopupComments />
        </div>
      </form>
    </section>
  );
}

export default Popup;
