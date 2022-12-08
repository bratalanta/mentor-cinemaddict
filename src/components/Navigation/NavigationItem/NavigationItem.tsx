import React from 'react';
import { NavLink } from 'react-router-dom';
import filmsState from '../../../store/filmsState';

type NavigationItemProps = {
  to: string;
  title: string;
};

const NavigationItem = ({ to, title }: NavigationItemProps) => {
  return (
    <NavLink
      to={`/${to}`}
      className={({ isActive }) =>
        isActive
          ? 'main-navigation__item main-navigation__item--active'
          : 'main-navigation__item'
      }
      onClick={() => filmsState.filter(to)}
    >
      {title}
    </NavLink>
  );
};

export default NavigationItem;
