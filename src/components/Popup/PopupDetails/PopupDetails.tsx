import React from 'react';
import { TAdaptedFilmInfo } from '../../../types/adaptedFilms';
import { getDate, getRuntime } from '../../../utils/utils';

const PopupDetails = (props: TAdaptedFilmInfo) => {
  const {
    actors,
    ageRating,
    alternativeTitle,
    description,
    director,
    genre,
    poster,
    release,
    runtime,
    title,
    totalRating,
    writers,
  } = props;
  return (
    <div className='film-details__info-wrap'>
      <div className='film-details__poster'>
        <img className='film-details__poster-img' src={poster} alt='poster' />

        <p className='film-details__age'>{ageRating}+</p>
      </div>

      <div className='film-details__info'>
        <div className='film-details__info-head'>
          <div className='film-details__title-wrap'>
            <h3 className='film-details__title'>{title}</h3>
            <p className='film-details__title-original'>{alternativeTitle}</p>
          </div>

          <div className='film-details__rating'>
            <p className='film-details__total-rating'>{totalRating}</p>
          </div>
        </div>

        <table className='film-details__table'>
          <tbody>
            <tr className='film-details__row'>
              <td className='film-details__term'>Director</td>
              <td className='film-details__cell'>{director}</td>
            </tr>
            <tr className='film-details__row'>
              <td className='film-details__term'>Writers</td>
              <td className='film-details__cell'>{writers.join(', ')}</td>
            </tr>
            <tr className='film-details__row'>
              <td className='film-details__term'>Actors</td>
              <td className='film-details__cell'>{actors.join(', ')}</td>
            </tr>
            <tr className='film-details__row'>
              <td className='film-details__term'>Release Date</td>
              <td className='film-details__cell'>{getDate(release.date)}</td>
            </tr>
            <tr className='film-details__row'>
              <td className='film-details__term'>Runtime</td>
              <td className='film-details__cell'>{getRuntime(runtime)}</td>
            </tr>
            <tr className='film-details__row'>
              <td className='film-details__term'>Country</td>
              <td className='film-details__cell'>{release.releaseCountry}</td>
            </tr>
            <tr className='film-details__row'>
              <td className='film-details__term'>Genres</td>
              <td className='film-details__cell'>
                {genre.map((item) => (
                  <span className='film-details__genre' key={item}>
                    {item}
                  </span>
                ))}
              </td>
            </tr>
          </tbody>
        </table>

        <p className='film-details__film-description'>{description}</p>
      </div>
    </div>
  );
};

export default PopupDetails;
