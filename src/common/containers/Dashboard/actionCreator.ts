import ACTIONS from '../../../utils/configureActions';

export const setLocaleLang = (localeLang: string) => ({
  type: ACTIONS.SET_LOCALE,
  payload: { localeLang },
});
