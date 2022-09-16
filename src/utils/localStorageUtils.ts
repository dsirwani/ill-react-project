import jwt_decode from 'jwt-decode';

export const getLocalStorageItem = (itemType: string) => {
  const localStorageObj = localStorage as any;
  for (let obj in localStorageObj) {
    if (obj.includes(itemType)) {
      return localStorage.getItem(obj);
    }
  }
  return;
};

export const getUserName = () => {
  const idToken: any = getLocalStorageItem('idToken');
  if (idToken) {
    const decodeIdToken: any = jwt_decode(idToken);
    return decodeIdToken.name
      ? decodeIdToken.name.split(' ')[0]
      : decodeIdToken.email;
  }
  return '...';
};

export const getEmail = () => {
  const idToken: any = getLocalStorageItem('idToken');
  if (idToken) {
    const decodeIdToken: any = jwt_decode(idToken);
    return decodeIdToken?.email ?? null;
  }
  return null;
};

export const updatePreferredApp = (selectedApp: string) => {
  const clientObj: any = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : '';
  clientObj.preferred_app = selectedApp
  localStorage.setItem('selectedClient', JSON.stringify(clientObj));
};

//Checks if a user is super admin
export const isSuperAdmin = () => {
  const idToken: any = getLocalStorageItem('idToken');
  if (idToken) {
    const decodeIdToken: any = jwt_decode(idToken);
    if (decodeIdToken?.['custom:is_super_admin']) {
      return (
        decodeIdToken?.['custom:is_super_admin'].toUpperCase() === 'YES' ?? null
      );
    }
  }
  return null;
};

//Gets the user role array
export const getUserRole = () => {
  const userRoles: any = localStorage.getItem('user_role')
    ? JSON.parse(localStorage.getItem('user_role') || '{}')
    : '';
  return Object.keys(userRoles).filter(function (el) {
    return userRoles[el] === true;
  })
};

//Checks if a user has access to team management
export const ifTMPermissions = () => {
  const userRoles = getUserRole();
  return userRoles.includes('is_account_manager') ||
    userRoles.includes('is_admin') ||
    userRoles.includes('is_people_manager')
};