import React from 'react';
import { useParams } from 'react-router-dom';
import { listUsers } from './../../data/data';

const DetailUser = () => {
  const { id } = useParams();
  const user = listUsers.find((item) => item.id === Number(id));

  return (
    <>
      {user ? (
        <div className="w-full bg-gray-800 rounded-lg shadow-xl overflow-hidden sm:w-80">
          <img
            className="object-cover w-full h-56"
            src={user.img}
            alt={user.name}
          />

          <div className="py-5 text-center">
            <h3 className="text-2xl font-bold text-white">{user.name}</h3>
            <span className="text-sm text-gray-200">{user.role}</span>
          </div>
        </div>
      ) : (
        <div className="w-64 m-auto p-4 bg-white rounded-2xl shadow-lg">
          <div className="w-full h-full text-center">
            <div className="flex h-full flex-col justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mt-4 m-auto text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="py-2 px-6 text-md text-gray-600">
                User
                <span className="mx-1 font-bold text-gray-800">{id}</span>
                was not found in the system.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailUser;
