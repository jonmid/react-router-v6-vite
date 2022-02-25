import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const changeShowSidebar = (isVisible) => {
    setShowSidebar(isVisible);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, showSidebar, login, logout, changeShowSidebar }}
    >
      {children}
    </AuthContext.Provider>
  );
};
