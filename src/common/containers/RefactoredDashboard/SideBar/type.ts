import ACTIONS from '../../../../utils/configureActions';

interface SetSidebarMenuAction {
  type: typeof ACTIONS.SET_SIDEBAR_MENU;
  payload: string
}

export type SidebarActionTypes =
  | SetSidebarMenuAction
