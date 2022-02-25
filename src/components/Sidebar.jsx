import React, { useEffect, useState } from 'react';
import ButtonLogout from './ButtonLogout';
import { useAuth } from './hooks/useAuth';

import { IconX } from '@tabler/icons';
import NavLinkCustom from './NavLinkCustom';
import NavLinkTitle from './NavLinkTitle';

const Sidebar = () => {
  const { showSidebar, changeShowSidebar } = useAuth();
  const [hidden, setHidden] = useState(showSidebar);

  useEffect(() => {
    if (showSidebar) {
      setHidden(showSidebar);
    }
  }, [showSidebar]);

  const handleTransitionEnd = (e) => {
    if (e.target.id === 'sidebar_background') {
      changeShowSidebar(hidden);
    }
  };

  return (
    <>
      {showSidebar && (
        <div
          id="sidebar_index"
          onTransitionEnd={(e) => handleTransitionEnd(e)}
          className="fixed top-0 left-0 h-screen w-screen z-40 md:hidden"
        >
          <div className="relative h-screen w-screen">
            <div
              id="sidebar_background"
              onClick={() => setHidden(!hidden)}
              className={`absolute top-0 right-0 h-screen w-screen bg-gray-700/40 backdrop-blur-md transition-opacity ease-in-out duration-1000 ${
                hidden ? 'opacity-100' : 'opacity-0'
              }`}
            ></div>

            <div
              id="sidebar_menu"
              className={`flex flex-col px-4 absolute top-0 right-0 h-full w-[80vw] text-white bg-gray-800 sm:w-[50vw] md:w-[35vw] ease-in-out duration-500 ${
                hidden ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="flex justify-end mt-5">
                <button onClick={() => setHidden(!hidden)}>
                  <IconX stroke={4} />
                </button>
              </div>

              <h3 className="mt-10 text-2xl font-bold text-center text-yellow-200 transition-colors duration-200 transform hover:text-yellow-100">
                React Router V6
              </h3>
              <ul className="flex flex-col space-y-6 mt-10">
                <li>
                  <NavLinkCustom to="/users">
                    <NavLinkTitle name="Usuarios" />
                  </NavLinkCustom>
                </li>
                <li>
                  <NavLinkCustom to="/page2">Page 2</NavLinkCustom>
                </li>
                <li>
                  <NavLinkCustom to="/page3">Page 3</NavLinkCustom>
                </li>
                <li>
                  <NavLinkCustom to="/page4">
                    <NavLinkTitle name="Page 4" />
                  </NavLinkCustom>
                </li>
                <li className="pl-4">
                  <ButtonLogout />
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
