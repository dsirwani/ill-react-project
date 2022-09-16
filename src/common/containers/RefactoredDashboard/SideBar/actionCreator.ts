import ACTIONS from '../../../../utils/configureActions';
import { SidebarActionTypes } from './type';

export const setSidebarMenu = (data: string): SidebarActionTypes => ({
  type: ACTIONS.SET_SIDEBAR_MENU,
  payload: data,
});