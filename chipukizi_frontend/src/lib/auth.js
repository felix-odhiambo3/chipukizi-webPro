// Authentication utilities
export const getToken = () => {
  return localStorage.getItem('access_token');
};

export const getRefreshToken = () => {
  return localStorage.getItem('refresh_token');
};

export const getUser = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

export const setAuthData = (accessToken, refreshToken, user) => {
  localStorage.setItem('access_token', accessToken);
  localStorage.setItem('refresh_token', refreshToken);
  localStorage.setItem('user', JSON.stringify(user));
};

export const clearAuthData = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('user');
};

export const isAuthenticated = () => {
  return !!getToken();
};

export const hasRole = (roleName) => {
  const user = getUser();
  return user?.roles?.some(role => role.name === roleName) || false;
};

export const isAdmin = () => {
  return hasRole('admin');
};

export const isMember = () => {
  return hasRole('member');
};

