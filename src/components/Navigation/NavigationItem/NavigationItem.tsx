import React from 'react';
import { NavLink } from 'react-router-dom';
import sortState from '../../../store/sortState';

type NavigationItemProps = {
  to: string;
  title: string;
};

const NavigationItem = ({ to, title }: NavigationItemProps) => {
  return (
    <NavLink
      onClick={() => sortState.setActiveSortOption('default')}
      to={`/${to}`}
      className={({ isActive }) =>
        isActive
          ? 'main-navigation__item main-navigation__item--active'
          : 'main-navigation__item'
      }
    >
      {title}
    </NavLink>
  );
};

export default NavigationItem;
