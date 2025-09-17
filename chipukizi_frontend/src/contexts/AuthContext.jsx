import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '@/lib/api.js';
import { getToken, getRefreshToken, getUser, setAuthData, clearAuthData } from '@/lib/auth.js';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser());
  const [token, setToken] = useState(getToken());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated on app start
    const storedUser = getUser();
    const storedToken = getToken();
    alert('AuthContext init - storedUser: ' + JSON.stringify(storedUser));
    alert('AuthContext init - storedToken: ' + storedToken);
    console.log('AuthContext init - storedUser:', storedUser);
    console.log('AuthContext init - storedToken:', storedToken);
    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const response = await authAPI.login(credentials);
      console.log('Login response:', response);
      console.log('Login response keys:', Object.keys(response));
      const { token, user: userData } = response;
      console.log('Extracted token:', token);
      console.log('Extracted userData:', userData);
      // Convert role to roles array for compatibility
      const userWithRoles = {
        ...userData,
        roles: [{ name: userData.role }]
      };
      userWithRoles.role = userWithRoles.roles[0].name;
      console.log('User with roles:', userWithRoles);
      setAuthData(token, 'mock-refresh-token', userWithRoles);
      console.log('Auth data set in localStorage:', {
        access_token: localStorage.getItem('access_token'),
        refresh_token: localStorage.getItem('refresh_token'),
        user: localStorage.getItem('user'),
      });
      setUser(userWithRoles);
      setToken(token);
      return userWithRoles;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    clearAuthData();
    setUser(null);
    setToken(null);
  };

  const isAuthenticated = () => {
    return !!token;
  };

  const hasRole = (roleName) => {
    return user?.roles?.some(role => role.name === roleName) || false;
  };

  const isAdmin = () => {
    return hasRole('admin');
  };

  const value = {
    user,
    setUser,
    token,
    setToken,
    loading,
    login,
    logout,
    isAuthenticated,
    hasRole,
    isAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
