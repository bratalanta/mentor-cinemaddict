import dayjs from 'dayjs';
import { TAdaptedFilm } from '../types/adaptedFilm';

const getRuntime = (runtime: number) => {
  const minutes = runtime % 60;
  const hours = (runtime - minutes) / 60;
  return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
};

const getDate = (date: string, format: string) => dayjs(date).format(format);

const sortByDate = (a: TAdaptedFilm, b: TAdaptedFilm) =>
  dayjs(b.filmInfo.release.date).year() - dayjs(a.filmInfo.release.date).year();

const sortByRating = (a: TAdaptedFilm, b: TAdaptedFilm) =>
  b.filmInfo.totalRating - a.filmInfo.totalRating;

export { getRuntime, getDate, sortByDate, sortByRating };
