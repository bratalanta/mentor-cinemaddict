import dayjs from 'dayjs';
import { TAdaptedFilm } from '../types/adaptedFilm';

const getRuntime = (runtime: number) => {
  const minutes = runtime % 60;
  const hours = (runtime - minutes) / 60;
  return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
};

const getDate = (date: string, format: string) => dayjs(date).format(format);

const sortByDate = (
  {
    filmInfo: {
      release: { date: firstDate },
    },
  }: TAdaptedFilm,
  {
    filmInfo: {
      release: { date: secondDate },
    },
  }: TAdaptedFilm
) => dayjs(secondDate).year() - dayjs(firstDate).year();

const sortByRating = (
  { filmInfo: { totalRating: firstTotalRating } }: TAdaptedFilm,
  { filmInfo: { totalRating: secondTotalRating } }: TAdaptedFilm
) => secondTotalRating - firstTotalRating;

export { getRuntime, getDate, sortByDate, sortByRating };
