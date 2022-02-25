import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconLogout } from '@tabler/icons';

import { useAuth } from './hooks/useAuth';

const ButtonLogout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleClickLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <button
      onClick={handleClickLogout}
      className="flex justify-center items-center w-8 h-8 text-sm font-normal text-yellow-700 bg-yellow-200 rounded-full transition ease-in duration-200 hover:bg-yellow-300 focus:ring-yellow-500 focus:ring-offset-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
    >
      <IconLogout size={16} stroke={2} />
    </button>
  );
};

export default ButtonLogout;
