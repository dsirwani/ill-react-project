import ACTIONS from '../../../../utils/configureActions';

export const sidebarReducer = (
  state:any = { selectedMenu: 'kpi'},
  action: any
) => {
  switch (action.type) {
    case ACTIONS.SET_SIDEBAR_MENU:
      return {
        selectedMenu: action.payload        
      };

    default:
      return state;
  }
};