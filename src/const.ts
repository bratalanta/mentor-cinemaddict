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

const API = 'https://17.ecmascript.pages.academy/cinemaddict';

const enum APIRoutes {
  Movies = '/movies',
  Comments = '/comments',
}

const enum FecthStatus {
  Pending = 'pending',
  Rejected = 'rejected',
  Idle = 'idle',
  Fulfilled = 'fulfilled',
}

export { PopupControl, API, APIRoutes, FecthStatus };
