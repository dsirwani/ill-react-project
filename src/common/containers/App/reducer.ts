import  ACTIONS  from '../../../utils/configureActions';
import { AppState } from './type';

const initialState: AppState = {
  show: false,
  errorMsg: '',
  severity: '',
};

export const appReducer = (state: AppState = initialState, action: any) => {
  switch (action.type) {
  case ACTIONS.SHOW_MESSAGE:
    const msgProperties = action?.payload?.msgProperties || initialState; 
    return ({
      ...state,
      ...msgProperties
    });

  case ACTIONS.HIDE_MESSAGE:
    const hideMsgProperties = action?.payload?.msgProperties || initialState; 
    return ({
      ...state,
      ...hideMsgProperties
    });
    
  default:
    return { ...state };
  }
};