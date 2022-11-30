import React from 'react';
import { TAdaptedUserDetails } from '../../../types/adaptedFilm';

type FilmCardControlsProps = {
  userDetails: TAdaptedUserDetails;
};

const FilmCardControls = ({ userDetails }: FilmCardControlsProps) => {
  const { alreadyWatched, favorite, watchlist } = userDetails;
  return (
    <div className='film-card__controls'>
      <button
        className={`film-card__controls-item film-card__controls-item--add-to-watchlist ${
          watchlist ? 'film-card__controls-item--active' : null
        }`}
        type='button'
      >
        Add to watchlist
      </button>
      <button
        className={`film-card__controls-item film-card__controls-item--mark-as-watched ${
          alreadyWatched ? 'film-card__controls-item--active' : null
        }`}
        type='button'
      >
        Mark as watched
      </button>
      <button
        className={`film-card__controls-item film-card__controls-item--favorite ${
          favorite ? 'film-card__controls-item--active' : null
        }`}
        type='button'
      >
        Mark as favorite
      </button>
    </div>
  );
};

export default FilmCardControls;
