import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconMenu2 } from '@tabler/icons';

import { useAuth } from './hooks/useAuth';
import NavLinkCustom from './NavLinkCustom';
import NavLinkTitle from './NavLinkTitle';
import Sidebar from './Sidebar';
import ButtonLogout from './ButtonLogout';

const Header = () => {
  const { isAuthenticated, changeShowSidebar } = useAuth();

  return (
    <>
      <nav className="shadow bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold text-gray-700">
                <Link
                  to="/"
                  className="text-2xl font-bold text-yellow-200 transition-colors duration-200 transform lg:text-2xl hover:text-yellow-100"
                >
                  React Router V6
                </Link>
              </div>

              <div className="flex md:hidden">
                <button
                  onClick={() => changeShowSidebar(true)}
                  className="text-yellow-200 hover:text-yellow-100 focus:outline-none focus:text-yellow-300"
                  aria-label="toggle menu"
                >
                  <IconMenu2 />
                </button>
              </div>
            </div>

            <div className="flex-1 md:flex md:items-center md:justify-between">
              <div className="hidden -mx-4 md:flex md:flex-row md:items-center md:mx-8">
                <NavLinkCustom to="/users">
                  <NavLinkTitle name="Usuarios" />
                </NavLinkCustom>
                <NavLinkCustom to="/page2">Page 2</NavLinkCustom>
                <NavLinkCustom to="/page3">Page 3</NavLinkCustom>
                <NavLinkCustom to="/page4">
                  <NavLinkTitle name="Page 4" />
                </NavLinkCustom>
              </div>

              {isAuthenticated && (
                <div className="hidden md:block">
                  <ButtonLogout />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <Sidebar />
    </>
  );
};

export default Header;
