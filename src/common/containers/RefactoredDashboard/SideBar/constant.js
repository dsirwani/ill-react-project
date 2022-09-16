import {
  Calendar as CalendarIcon,
  Trello as TrelloIcon,
  Layout as LayoutIcon,
  Users as UsersIcon,
  Grid as GridIcon,
  BarChart2 as BarChart2Icon,
  PieChart as PieChartIcon,
  DollarSign as DollarSignIcon,
  BookOpen as BookOpenIcon,
  HardDrive as HardDriveIcon,
  Compass as CompassIcon,
  Home as HomeIcon,
  CheckSquare as CheckSquareIcon
} from 'react-feather';
import { ROUTES } from '../../../../utils/routeConstants';

export const MENU_LIST = {
  'IlluminateWithoutAccount': [
    {
      items: [
        {
          title: 'KPI Dashboard',
          icon: GridIcon,
          href: '/',
          value: 'kpi-dashboard',
          isLink: true
        },
      ]
    },
  ],
  'IlluminateWithAccount': [
    {
      items: [
        {
          title: 'KPI Dashboard',
          icon: GridIcon,
          href: '/',
          value: 'kpi-dashboard',
          isLink: true
        },
        {
          title: 'KPI Drilldown',
          icon: BarChart2Icon,
          href: 'http://localhost:3000/account-drilldown/476448',
          value: 'kpi'
        },
        {
          title: 'Graphs',
          icon: PieChartIcon,
          href: 'http://localhost:3000/account-drilldown/476448',
          value: 'graphs'
        },
        // {
        //   title: 'Account Details',
        //   icon: CalendarIcon,
        //   href: 'http://localhost:3000/account-drilldown/476448',
        //   value: 'account_details'
        // },
        {
          title: 'Legal Entities',
          icon: BookOpenIcon,
          href: 'http://localhost:3000/account-drilldown/476448',
          value: 'legal_entities'
        },
        {
          title: 'Client Details',
          icon: LayoutIcon,
          href: 'http://localhost:3000/account-drilldown/476448',
          value: 'client_details'
        },
        {
          title: 'Financials',
          icon: DollarSignIcon,
          href: 'http://localhost:3000/account-drilldown/476448',
          value: 'g2k_financials'
        },
      ]
    },
    {
      subheader: 'Manage Account',
      items: [
        {
          title: 'Account Data',
          icon: HardDriveIcon,
          href: 'http://localhost:3000/account-drilldown/476448',
          value: 'account_data'
        },
        {
          title: 'Account Management',
          icon: CalendarIcon,
          href: 'http://localhost:3000/account-drilldown/476448',
          value: 'account_details'
        },
        {
          title: 'Team Membership',
          icon: UsersIcon,
          href: 'http://localhost:3000/account-drilldown/476448',
          value: 'account_team'
        },
      ]
    }
  ],
  'ToolsByDefault': [
    {
      items: [
        {
          title: 'Switch Client',
          icon: CompassIcon,
          href: '/clients-view',
          value: 'clients-view',
          isLink: true
        },
      ]
    },
  ],
  'ToolsWithClient': [
    {
      items: [
        {
          title: 'Switch Client',
          icon: CompassIcon,
          href: '/clients-view',
          value: 'clients-view',
          isLink: true
        },
        {
          title: 'Team Management',
          icon: UsersIcon,
          href: ROUTES.TEAM_MANAGEMENT,
          value: 'team-management',
          isLink: true
        },
        {
          title: 'Upload',
          icon: LayoutIcon,
          href: '/upload',
          value: 'upload',
          isLink: true
        },
      ]
    },
  ],
  'Engage': [
    {
      subheader: 'Engage',
      items: [
        {
          title: 'Home',
          icon: HomeIcon,
          href: ROUTES.DEFAULT,
          value: 'tools',
          isLink: true,
          disabled: true,
        },
        {
          title: 'Account Select',
          icon: CheckSquareIcon,
          href: ROUTES.ENGAGE_ACCOUNT_LIST,
          value: 'tools',
          isLink: true
        },
      ]
    },
  ],
};

export const FOOTER_LINKS = [
  {
    link_url: 'https://ilmvp-public-resources.s3.amazonaws.com/TermsPolicyDoc/Privacy+Statement+2020+10+28.pdf',
    caption: 'PRIVACY STATEMENT'
  },
  {
    link_url: 'https://ilmvp-public-resources.s3.amazonaws.com/TermsPolicyDoc/Cookie+Preference+2020+10+28.pdf',
    caption: 'COOKIE PREFERENCE'
  },
  {
    link_url: 'https://ilmvp-public-resources.s3.amazonaws.com/TermsPolicyDoc/Security+Statement+2020+10+28.pdf',
    caption: 'SECURITY STATEMENT'
  },
  {
    link_url: 'https://ilmvp-public-resources.s3.amazonaws.com/TermsPolicyDoc/Terms+of+Service+2020+10+28.pdf',
    caption: 'TERMS OF SERVICE'
  }
]