import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleClickLogin = () => {
    login();
    navigate('/users');
  };

  return (
    <div className="mx-2 bg-white rounded-lg shadow sm:mx-8">
      <div className="z-20 w-full mx-auto py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4xl">
          <span className="block">Ingresar a Rutas Protegidas</span>
        </h2>

        <p className="mt-4 max-w-md mx-auto text-xl text-gray-400">
          Para ingresar a las rutas protegidas primero debe hacer click en el
          botón <span className="font-bold">"Login"</span> para que tenga acceso
          a su información.
        </p>

        <button
          onClick={handleClickLogin}
          className="animate-bounce py-3 px-5 mt-12 text-center text-sm font-bold text-white bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md transition ease-in duration-200 hover:bg-cyan-600 focus:ring-cyan-500 focus:ring-offset-cyan-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
