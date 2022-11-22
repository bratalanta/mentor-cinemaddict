import React from 'react';
import { PopupControl } from '../../../const';

function PopupControls() {
  return (
    <section className='film-details__controls'>
      {Object.values(PopupControl).map(({ name, title }) => (
        <button
          type='button'
          className={`film-details__control-button film-details__control-button--${name}`}
          id={name}
          name={name}
          key={name}
        >
          {title}
        </button>
      ))}
    </section>
  );
}

export default PopupControls;
