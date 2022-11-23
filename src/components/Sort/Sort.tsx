import React from 'react';
import { Link } from 'react-router-dom';

const Sort = () => {
  return (
    <ul className='sort'>
      <li>
        <Link to='/' className='sort__button sort__button--active'>
          Sort by default
        </Link>
      </li>
      <li>
        <Link to='/' className='sort__button'>
          Sort by date
        </Link>
      </li>
      <li>
        <Link to='/' className='sort__button '>
          Sort by rating
        </Link>
      </li>
    </ul>
  );
};

export default Sort;
