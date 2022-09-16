import { isClientSelected } from '../../../../utils/miscUtils';
import { ROUTES } from '../../../../utils/routeConstants';

export const tileData = {
  'Manage Client': {
    value: 'Manage Client',
    appName: 'manage client',
    srcImg: '/svg/icon-manage.svg'

  },
};

export const tileDataForClient = {
  'Illuminate': {
    value: 'Illuminate',
    appLink: ROUTES.ACCOUNT_VIEW,
    appName: 'illuminate',
    srcImg: '/svg/icon-illuminate.svg'

  },
  'Engage':
  {
    value: 'Engage',
    appLink: ROUTES.ENGAGE_ACCOUNT_LIST,
    appName: 'engage',
    srcImg: '/svg/icon-engage.svg'

  },
  'Manage Client': {
    value: 'Manage Client',
    appLink: '/clients-view',
    appName: 'manage client',
    srcImg: '/svg/icon-manage.svg'

  },
};