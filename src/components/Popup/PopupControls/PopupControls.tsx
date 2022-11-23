import React from 'react';
import { ActiveClass, PopupControl } from '../../../const';

const PopupControls = () => {
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
};

export default PopupControls;
