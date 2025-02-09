import React, { createContext, useContext, useState } from 'react';
import { setToken ,getToken ,removeToken } from '../service/AuthService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(getToken());

  const login = (token) => {
    setToken(token);
    setAuthToken(token);
  };

  const logout = () => {
    removeToken();
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
