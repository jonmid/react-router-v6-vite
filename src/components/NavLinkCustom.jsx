import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkCustom = ({ to, children, ...props }) => {
  const activeStyle =
    'px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-800 bg-yellow-200 transition-colors duration-200 transform rounded-md md:mt-0';
  const noActiveStyle =
    'px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-200 transition-colors duration-200 transform rounded-md md:mt-0 hover:bg-gray-700';

  return (
    <NavLink
      className={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
      to={to}
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkCustom;
