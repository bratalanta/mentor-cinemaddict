/* eslint-disable camelcase */
import { TAdaptedFilm } from '../types/adaptedFilms';
import { TUnadaptedFilm } from '../types/films';
import dayjs from 'dayjs';
dayjs().format();

export function adaptFilm(film: TUnadaptedFilm): TAdaptedFilm {
  const { film_info: filmInfo, user_details: userDetails, ...filmProps } = film;
  const {
    age_rating: ageRating,
    alternative_title: alternativeTitle,
    total_rating: totalRating,
    release,
    ...filmInfoProps
  } = film.film_info;
  const {
    already_watched: alreadyWatched,
    watching_date: watchingDate,
    ...userProps
  } = film.user_details;
  return {
    ...filmProps,
    filmInfo: {
      ...filmInfoProps,
      ageRating,
      alternativeTitle,
      totalRating,
      release: {
        releaseCountry: release.release_country,
        date: dayjs(release.date),
      },
    },
    userDetails: {
      ...userProps,
      alreadyWatched,
      watchingDate: watchingDate ? dayjs(watchingDate) : null,
    },
  };
}
