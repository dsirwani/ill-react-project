import ACTIONS from '../../../utils/configureActions';
import { DashboardState } from './type';

const initialState: DashboardState = {
  locale: 'en',
};

export const dashboardReducer = (
  state: DashboardState = initialState,
  action: any
): DashboardState => {
  switch (action.type) {
    case ACTIONS.SET_LOCALE:
      const localeLang: string =
        action?.payload.localeLang || initialState.locale;
      return {
        ...state,
        locale: localeLang,
      };

    default:
      return { ...state };
  }
};
