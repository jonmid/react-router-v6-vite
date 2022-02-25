import React from 'react';
import { IconLock, IconLockOpen } from '@tabler/icons';

import { useAuth } from './hooks/useAuth';

const NavLinkTitle = ({ name }) => {
  const { isAuthenticated } = useAuth();

  const icon = (
    <IconLock
      size={16}
      stroke={2}
      className={`inline ${
        isAuthenticated ? 'text-green-700' : 'text-red-700'
      }`}
    />
  );

  return (
    <>
      {name} {icon}
    </>
  );
};

export default NavLinkTitle;
