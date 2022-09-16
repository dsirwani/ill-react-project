import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
// import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import {
  clientDataActionCreator, UserOnBoardingActionCreator,
  accountSummaryActionCreator, accountListActionCreator
} from '../../../utils/configureActionCreators';
import { RootState } from '../../../utils/injectReducer';
import { getURLProtocol, getClientRedirectURL } from '../../../utils/miscUtils';
import ClientsGridView from '../../components/ClientsView/GridView';
import { ClientDataState } from '../../../illuminate/containers/PlatformView/type';
import { UserOnboardingStatusState } from '../../../common/containers/UserOnboarding/type';
import { getEmail } from '../../../utils/localStorageUtils';
import LoaderOverScreen from '../../../illuminate/components/LoaderOverScreen';
import Error from '../../../illuminate/components/Error';
import Loader from '../../../illuminate/components/Loader';
import StatusAlert from '../UserOnboarding/StatusAlert';
import { useStyles } from './style';

const ClientsView: React.FC = () => {
  const classes = useStyles();
  const userEmailAddr = getEmail(); //'jpgranchi@polarisIO.com';
  const [isInvalidOnboardingStatus, setIsInvalidOnBoardingStatus] = useState(false);
  const dispatch = useDispatch();
  //const incrementPageNo = () => setPageNo((prevState) => prevState + 1);
  /* const listViewActiveClass = isListView
    ? classes.svgActive
    : classes.svgNotActive;
  const gridViewActiveClass = !isListView
    ? classes.svgActive
    : clsses.svgNotActive; */

  const { data: clientListData, errorMessage: clientListError, loading: clientListLoading }: ClientDataState = useSelector(
    (state: RootState) => state?.clientData
  );

  const userOnboardingData: UserOnboardingStatusState = useSelector(
    (state: RootState) => state?.userOnboardingData
  );

  /* const scrollDivRef = useRef<HTMLInputElement>(null);
 
  useInfiniteScroll(scrollDivRef, dispatch, isLoading, incrementPageNo);
 
  useEffect(() => {
    if (pageNo && nextPageUrl) {
      dispatch(accountListActionCreator.getMoreAccountList(nextPageUrl));
    }
  }, [pageNo]); */
  useEffect((): void => {
    dispatch(
      clientDataActionCreator.clientDataRequest({
        email: userEmailAddr,
        polarisInstance: true
      })
    );
    dispatch(UserOnBoardingActionCreator.resetUserOnboardingStatus());
    dispatch(accountSummaryActionCreator.accSummaryReset());
    // dispatch(clientDataActionCreator.resetIsClientSelected());
    // localStorage.removeItem('selectedClient');

    const selectedClient = localStorage.getItem('selectedClient');
    if (selectedClient) {
      dispatch(clientDataActionCreator.setIsClientSelected());
    } else {
      dispatch(clientDataActionCreator.resetIsClientSelected());
    }

  }, []);

  useEffect(() => {
    if(!userOnboardingData.loading && userOnboardingData.data !== null && !userOnboardingData.error) {
      let redirectUrl;
      const urlProtocol = getURLProtocol();
      (async function anyNameFunction() {
        redirectUrl = await getClientRedirectURL();
        if (window.location.host.split('.')[0] !== 'localhost:3000') {
          localStorage.clear();
        }
        window.location.href = urlProtocol + redirectUrl;
      })();
    } else if (!userOnboardingData.loading && userOnboardingData.error && userOnboardingData.errorMessage) {
      localStorage.removeItem('selectedClient')
      setIsInvalidOnBoardingStatus(true);
    }
  }, [userOnboardingData]);

  /* const setTheViewMode = (viewType: string) => {
    localStorage.setItem('accViewMode', viewType);
    const listView = viewType === 'list' ? true : false;
    setIsListView(listView);
  }; */

  /*   const handleSelectedAccount = (event: any, selectedClient: any) => {
      event.preventDefault();
      const urlProtocol = getURLProtocol();
      // localStorage.removeItem('selectedClient');
      console.log('selectedClient', selectedClient);
      localStorage.setItem('selectedClient', JSON.stringify(selectedClient));
      dispatch(clientDataActionCreator.setIsClientSelected());
      setClientImage();
      setEnabledApps();
  
      let redirect = async () => getClientRedirectURL();
      redirect().then((landingPageUrl) => {
        if (window.location.host.split('.')[0] !== 'localhost:3000')	{
        window.location.href = urlProtocol + landingPageUrl;
        localStorage.clear();
        }
      })
    }; */

  const handleSelectedAccount = async (event: any, selectedClient: any) => {
    event.preventDefault();
    localStorage.setItem('selectedClient', JSON.stringify(selectedClient));
    dispatch(UserOnBoardingActionCreator.getUserOnboardingStatus());
    setClientImage();
    setEnabledApps();
  };

  const setClientImage = () => {
    const { s3_logo_link: clientLogo } = localStorage.getItem('selectedClient')
      ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
      : '';
    dispatch(accountListActionCreator.setClientImage(clientLogo));
  }

  const setEnabledApps = () => {
    const { enabled_apps: enabledApps } = localStorage.getItem('selectedClient')
      ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
      : '';
    dispatch(accountListActionCreator.setEnableApps(enabledApps));
  }

  return (
    <>
      <React.Fragment>
        {clientListLoading && <Loader />}
        {userOnboardingData.loading && <LoaderOverScreen />}
        {isInvalidOnboardingStatus && <StatusAlert errorMessage={userOnboardingData.errorMessage} />}
        {clientListData?.length === 1 ? window.location.href = 'https://' + clientListData[0].landing_page_url
          : clientListData?.length ? (
            <ClientsGridView
              clientsListData={clientListData}
              handleSelectedAccount={handleSelectedAccount}
            />
          ) : clientListData?.length === 0 ? (
            <Typography
              variant="h6"
              classes={{ root: classes.noAccountsDisplay }}
            >
              No Accounts to Display
            </Typography>
          ) : null}
        {clientListError ? <Error errorMessage={clientListError} /> : null}
      </React.Fragment>
      {/* <div
         id="scrollDetectDiv"
         ref={scrollDivRef}
         style={{ border: '1px solid #0096DC', margin: '0 50px' }}
       />
       {isLoadingData && <Loader />} */}
    </>
  );
};
export default ClientsView;