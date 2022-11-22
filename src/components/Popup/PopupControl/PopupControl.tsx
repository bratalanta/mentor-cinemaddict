import React from 'react';

function PopupControl() {
  return (
    <section className='film-details__controls'>
      <button
        type='button'
        className='film-details__control-button film-details__control-button--watchlist'
        id='watchlist'
        name='watchlist'
      >
        Add to watchlist
      </button>
      <button
        type='button'
        className='film-details__control-button film-details__control-button--active film-details__control-button--watched'
        id='watched'
        name='watched'
      >
        Already watched
      </button>
      <button
        type='button'
        className='film-details__control-button film-details__control-button--favorite'
        id='favorite'
        name='favorite'
      >
        Add to favorites
      </button>
    </section>
  );
}

export default PopupControl;
