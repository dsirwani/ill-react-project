import React, { useEffect } from 'react';
import { useStyles } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import {
  CssBaseline,
  AppBar,
} from '@material-ui/core';
import TopBar from '../RefactoredDashboard/TopBar';
import clsx from 'clsx';
import Sidebar from './SideBar';
import { AccountSummaryState } from '../../../illuminate/containers/AccountDrilldowns/type';
import { ClientDataState } from '../../../illuminate/containers/PlatformView/type';
import { accountListActionCreator, accountSummaryActionCreator, userPreferenceActionCreator, clientDataActionCreator, loggedInUserDetailsActionCreator, sidebarActionCreator, dashboardTemplatesActionCreator } from '../../../utils/configureActionCreators';
import ContentWrapper from '../../components/ContentWrapper';
import { RootState } from '../../../utils/injectReducer';
import { getEmail, getLocalStorageItem, getUserRole, isSuperAdmin } from '../../../utils/localStorageUtils';
import { ROUTES } from '../../../utils/routeConstants';
import PlatformView from '../../../illuminate/containers/PlatformView';
import { tileDataForClient, tileData } from './TopBar/constant';
import { PreConfiguredTemplatesState } from '../../../illuminate/containers/DashboardTemplates/type';
import LoaderOverScreen from '../../../illuminate/components/LoaderOverScreen/index';
import StatusAlert from '../../components/UserOnboarding/StatusAlert';

const RefactoredDashboard: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { isClientSelected } = useSelector((state: RootState) => state.clientData);
  const platformList = isClientSelected ? tileDataForClient : tileData;
  const [selectedPlatform, setSelectedPlatform] = React.useState(platformList['Manage Client']);
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const userEmailAddr = getEmail();
  const superAdmin = isSuperAdmin();

  const selectedClient = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{"client_id": null}')
    : { client_id: null };

  const clientId = selectedClient?.client_id ?? null;
  const handleItemList = (tile: any): any => {
    setSelectedPlatform(tile.value)
  };

  const { data: clientData, loading, error, errorMessage }: ClientDataState = useSelector(
    (state: RootState) => state?.clientData
  );

  const loggedInUserDetails: any = useSelector(
    (state: RootState): any => state?.loggedInUserDetails?.loggedInUserDetails
  );

  const { defaultTemplate: template }: PreConfiguredTemplatesState = useSelector(
    (state: RootState) => state.dashboardTemplatesData?.pcTemplatesData
  );

  const { isAccountSelected }: AccountSummaryState = useSelector((state: RootState) => state.accSummaryData);

  const setSidebarPlatform = (client: any) => {
    const isCustomer = getUserRole().includes('is_customer');
    let selectedPlatfrom = platformList['Manage Client'];
    if (isClientSelected && location.pathname !== '/clients-view') {
      if (location.pathname.includes('/engage-canvas')) {
        selectedPlatfrom = platformList['Engage'];
      } else if (isCustomer) {
        selectedPlatfrom = platformList['Engage'];
      } else {
        selectedPlatfrom = client?.preferred_app === 'illuminate' ?
          platformList['Illuminate'] :
          platformList['Manage Client'];
      }
    }
    setSelectedPlatform(selectedPlatfrom);
  };

  React.useEffect(() => {
    if (selectedClient && clientId !== null) {
      dispatch(clientDataActionCreator.setIsClientSelected());
    } else {
      dispatch(clientDataActionCreator.resetIsClientSelected());
    }
    if (window.localStorage.getItem('settings') === null)
      dispatch(userPreferenceActionCreator.userPreferenceRequest());
  }, []);

  useEffect(() => {

    const isCustomer = getUserRole().includes('is_customer')
    if (loggedInUserDetails) {
      if (isCustomer) {
        history.push(ROUTES.ENGAGE_ACCOUNT_LIST);
      }
    }
  }, [loggedInUserDetails]);

  React.useEffect(() => {
    setSidebarPlatform(selectedClient);
    return () => {
      setSelectedPlatform(platformList['Manage Client']);
    }
  }, [isClientSelected, isAccountSelected]);

  useEffect(() => {
    let selectedClientId = clientId;
    if (!clientId && clientData?.length === 1) {
      localStorage.setItem('selectedClient', JSON.stringify(clientData[0]));
      selectedClientId = clientData[0].client_id;
      setSidebarPlatform(clientData[0]);
      dispatch(accountListActionCreator.setClientImage(clientData[0].s3_logo_link));
      dispatch(accountListActionCreator.setEnableApps(clientData[0].enabled_apps));
      if (window.location.host.split('.')[0] === 'pio') {
        window.location.href = 'https://' + clientData[0].landing_page_url;
        localStorage.clear();
      }
    }
    if (selectedClientId) {
      if (template === null) {
        dispatch(dashboardTemplatesActionCreator.pcTemplatesRequest({}));
      }
      if (!superAdmin && getLocalStorageItem('accessToken')) {
        dispatch(
          loggedInUserDetailsActionCreator.getLoggedInUserDetailsRequest(
            selectedClientId,
            userEmailAddr
          )
        );
      }
    }
  }, [openModal, clientData]);

  useEffect(() => {
    if (!clientId && userEmailAddr) {
      dispatch(
        clientDataActionCreator.clientDataRequest({
          email: userEmailAddr,
        })
      );
      handleOpen();
    }
    localStorage.removeItem('selectedAccount');
    localStorage.removeItem('selectedAccountLogo');
    dispatch(accountSummaryActionCreator.accSummaryReset());
    // const selectedClient = localStorage.getItem('selectedClient');
    // if (selectedClient) {
    //   dispatch(clientDataActionCreator.setIsClientSelected());
    // } else {
    //   dispatch(clientDataActionCreator.resetIsClientSelected());
    // }
    // To set the default menu for account drilldown
    dispatch(sidebarActionCreator.setSidebarMenu('kpi'));
    return () => {
      dispatch(clientDataActionCreator.clientDataReset());
    };
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      {!superAdmin && clientData?.length !== 1 && openModal ? (
        <PlatformView openModal={openModal} handleClose={handleClose} />
      ) : null}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: false,
        })}
      >
        <TopBar handleItemList={handleItemList} selectedPlatform={selectedPlatform} setSelectedPlatform={setSelectedPlatform} />
      </AppBar>
      <Sidebar selectedPlatform={selectedPlatform} />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {
              loading &&
              <LoaderOverScreen />
            }
            {
              error && errorMessage &&
              <StatusAlert errorMessage={errorMessage} />
            }
            {(selectedClient?.client_id || superAdmin) && <ContentWrapper />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RefactoredDashboard;