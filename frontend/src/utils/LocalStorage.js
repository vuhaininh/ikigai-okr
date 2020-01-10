const IOK_USER_ID = 'iok-user-id';
const IOK_AUTH_TOKEN = 'iok-auth-token';

export const getUserId = () => {
  return localStorage.getItem(IOK_USER_ID);
};
export const getToken = () => {
  return localStorage.getItem(IOK_AUTH_TOKEN);
};
export const setUserId = id => {
  localStorage.setItem(IOK_USER_ID, id);
};
export const setToken = token => {
  localStorage.setItem(IOK_AUTH_TOKEN, token);
};
export const signOut = () => {
  localStorage.removeItem(IOK_USER_ID);
  localStorage.removeItem(IOK_AUTH_TOKEN);
};
export const saveUserData = (id, token) => {
  localStorage.setItem(IOK_USER_ID, id);
  localStorage.setItem(IOK_AUTH_TOKEN, token);
};
