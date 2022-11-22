import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='main-navigation'>
      <Link
        to='#all'
        className='main-navigation__item main-navigation__item--active'
      >
        All movies
      </Link>
      <Link to='#watchlist' className='main-navigation__item'>
        Watchlist <span className='main-navigation__item-count'>13</span>
      </Link>
      <Link to='#history' className='main-navigation__item'>
        History <span className='main-navigation__item-count'>4</span>
      </Link>
      <Link to='#favorites' className='main-navigation__item'>
        Favorites <span className='main-navigation__item-count'>8</span>
      </Link>
    </nav>
  );
}

export default Navigation;
