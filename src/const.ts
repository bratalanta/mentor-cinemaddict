const PopupControl = {
  WatchList: {
    title: 'Add to watchlist',
    name: 'watchlist',
  },
  Watched: {
    title: 'Already watched',
    name: 'watched',
  },
  Favorite: {
    title: 'Add to favorites',
    name: 'favorite',
  },
} as const;

const ActiveClass = {
  FilmCardButton: 'film-card__controls-item--active',
  PopupControlButton: 'film-details__control-button--active',
} as const;

export { PopupControl, ActiveClass };
