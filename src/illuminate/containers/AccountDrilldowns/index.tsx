import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../../../utils/injectReducer';
// import AccountTitleBar from './AccountTitleBar';
import AccountSummary from './AccountSummary';
import AccountKPIDetails from './AccountKPIDetails';
import VisualizationPanel from './VisualizationPanel';
import AccountTeam from './AccountTeam';
import LegalEntities from './LegalEntities';
import AccountDetails from './AccountDetails';
import { useStyles } from './style';
import UserManagement from './UserManagement';
import ClientDetails from './ClientDetails';
import AccountData from './AccountData'
import G2KFinancials from './G2KFinancials';
import BreadCrumbsComponent from '../../components/Breadcrumbs';
import { clientDataActionCreator } from '../../../utils/configureActionCreators';

const tabNames = {
  0: 'revenue',
  1: 'growth',
  2: 'plan',
  3: 'buying_centers',
  4: 'pgi',
};

interface IAccountDrilldowns {
}

const AccountDrilldowns = (props: IAccountDrilldowns) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [tabValue, setTabValue] = useState(0);
  const [accInfo, setAccInfo] = useState('');
  const [tabName, setTabName] = useState('revenue');
  const sidebarData: any = useSelector(
    (state: RootState) => state?.sidebarData
  );

  React.useEffect(() => {
    setAccountInfo(sidebarData.selectedMenu);
  }, [sidebarData.selectedMenu]);

  React.useEffect(() => {
    const selectedClient = localStorage.getItem('selectedClient');
    if (selectedClient) {
      dispatch(clientDataActionCreator.setIsClientSelected());
    } else {
      dispatch(clientDataActionCreator.resetIsClientSelected());
    }
  }, []);

  const setAccountInfo = (accInfo: string) => {
    setAccInfo(accInfo);
  };

  const setSelectedTab = (tabIndex: number) => {
    setTabValue(tabIndex);
    setTabName(tabNames[tabIndex]);
  };

  return (
    <div className={classes.root}>
      <div className={classes.breadcrumbs}>
        <BreadCrumbsComponent accountSelected={true} selectedOption={accInfo} />
      </div>
      {/* <AccountTitleBar setAccountInfo={setAccountInfo} accInfo={accInfo} setSelectedTab = {setSelectedTab} /> */}
      {(() => {
        switch (accInfo) {
          case 'kpi':
            return (
              <React.Fragment>
                <AccountSummary setSelectedTab={setSelectedTab} />
                <AccountKPIDetails tabValue={tabValue} tabName={tabName} />
              </React.Fragment>
            );

          case 'graphs':
            return <VisualizationPanel />;

          case 'account_team':
            return <AccountTeam setAccountInfo={setAccountInfo} />;

          case 'account_management':
            return <UserManagement />;

          case 'legal_entities':
            return <LegalEntities />;

          case 'account_details':
            return <AccountDetails />;

          case 'client_details':
            return <ClientDetails />;

          case 'account_data':
            return <AccountData />;

          case 'g2k_financials':
            return <G2KFinancials />;

          default:
            return null;
        }
      })()}
    </div>
  );
};

export default AccountDrilldowns;
