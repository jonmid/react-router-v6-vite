import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { listUsers } from '../../data/data';

const Users = () => {
  const navigate = useNavigate();

  const handleClickItemUser = (id) => {
    navigate(`/users/${id}`);
  };

  return (
    <div className="grid gap-4 rounded-lg sm:mx-8 md:grid-cols-[auto_4fr] md:gap-0">
      <section className="px-3">
        <div className="flex flex-col w-full bg-white rounded-lg shadow md:max-w-sm">
          <div className="px-4 py-5 border-b">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User list
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Details and informations about user.
            </p>
          </div>
          <ul className="flex flex-col divide divide-y">
            {listUsers.map((item) => (
              <li
                key={item.id}
                onClick={() => handleClickItemUser(item.id)}
                className="flex items-center space-x-2 p-4 cursor-pointer"
              >
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={item.img}
                  alt="profile"
                />
                <div className="grow flex flex-col pl-3 md:pl-4">
                  <h3 className="font-medium">{item.name}</h3>
                  <span className="text-sm text-gray-600">{item.role}</span>
                </div>
                <div className="grow text-xs text-gray-600 hidden sm:block">
                  {item.time}
                </div>
                <svg
                  width="20"
                  fill="currentColor"
                  height="20"
                  className="text-gray-500 hover:text-gray-800"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="px-3">
        <div className="flex justify-center items-center h-full border-2 border-dashed rounded-lg border-gray-300">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Users;
