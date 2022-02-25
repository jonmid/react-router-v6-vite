import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-2 bg-white rounded-lg shadow sm:mx-8">
      <div className="z-20 w-full mx-auto py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4xl">
          <span className="block">Manejo de React Router V6</span>
          <span className="block text-neutral-500">Utilizando ReactJs</span>
        </h2>

        <p className="mt-4 max-w-md mx-auto text-xl text-gray-400">
          Aplicación para practicar las nuevas funcionalidades de React Router 6
          y opción para manejar la protección de rutas.
        </p>

        <button
          onClick={() => navigate('/users')}
          className="mt-12 px-6 py-2 border-2 border-neutral-900 uppercase rounded-full transition ease-in duration-200 hover:bg-neutral-800 hover:text-white focus:outline-none"
        >
          Iniciar
        </button>
      </div>
    </div>
  );
};

export default Home;
