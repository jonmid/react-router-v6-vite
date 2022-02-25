import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center mx-3 py-40 bg-white rounded-lg shadow sm:mx-8">
      <section className="grid gap-4 md:grid-flow-col">
        <h3 className="justify-self-center text-6xl font-extrabold text-red-700">
          404
        </h3>
        <div className="py-4 md:py-0">
          <div className="block text-center md:text-left md:border-l md:pl-6">
            <h2 className="text-4xl font-bold text-gray-700 md:text-6xl">
              Page not found
            </h2>
            <p className="mt-2 text-xs font-normal text-gray-400 md:text-base">
              Please check the URL in the address bar and try again.
            </p>
          </div>

          <div className="flex justify-center mt-8 space-x-3 md:justify-start md:pl-6">
            <button
              onClick={() => navigate('/')}
              className="py-2 px-4 text-center text-sm font-normal text-red-100 bg-red-600 rounded-md transition ease-in duration-200 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Go back home
            </button>
            <button className="py-2 px-4 text-center text-sm font-normal text-red-600 bg-red-100 rounded-md transition ease-in duration-200 hover:bg-red-200 focus:ring-red-500 focus:ring-offset-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2">
              Contact support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
