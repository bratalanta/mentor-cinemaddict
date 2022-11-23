import dayjs from 'dayjs';
dayjs().format();

export type TAdaptedFilm = {
  id: string;
  filmInfo: TAdaptedFilmInfo;
  userDetails: TAdaptedUserDetails;
  comments: string[];
};

export type TAdaptedFilmInfo = {
  title: string;
  alternativeTitle: string;
  totalRating: number;
  poster: string;
  ageRating: number;
  director: string;
  writers: string[];
  actors: string[];
  release: {
    date: dayjs.Dayjs;
    releaseCountry: string;
  };
  runtime: number;
  genre: string[];
  description: string;
};

export type TAdaptedUserDetails = {
  watchlist: boolean;
  alreadyWatched: boolean;
  watchingDate: dayjs.Dayjs | null;
  favorite: boolean;
};
