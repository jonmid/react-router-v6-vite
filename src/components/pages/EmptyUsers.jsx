import React from 'react';

const EmptyUsers = () => {
  return (
    <div className="flex flex-col place-items-center">
      <h1 className="text-3xl text-center font-bold text-gray-700">
        Detalle De Usuario
      </h1>
      <p className="mt-2 text-xs font-medium text-gray-400">
        Click en la lista de usuarios para mas detalle
      </p>
    </div>
  );
};

export default EmptyUsers;
