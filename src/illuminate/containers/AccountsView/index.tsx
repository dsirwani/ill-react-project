import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, IconButton } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Grid as GridIcon, List as ListIcon } from 'react-feather';
import { Typography } from '@material-ui/core';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import useSettings from '../../../hooks/useSettings';
import {
  appActionCreator,
  accountListActionCreator,
  dashboardTemplatesActionCreator,
  accountSummaryActionCreator
} from '../../../utils/configureActionCreators';
import { RootState } from '../../../utils/injectReducer';
import AccountListView from '../../components/AccountsView/ListView';
import AccountGridView from '../../components/AccountsView/GridView';
import NotificationAlert from '../../components/NotificationAlert';
import Loader from '../../components/Loader';
import LoaderOverScreen from '../../components/LoaderOverScreen';
import { useStyles } from './style';
import DashboardFilters from '../DashboardFilters';
import DashboardTemplates from '../DashboardTemplates'
import { CreateTemplateState } from '../DashboardTemplates/type';
import { getClientRedirectURL, getURLProtocol } from '../../../utils/miscUtils';
import { IOrderBy } from '../../../types/ITableHeader';
import { SaveFilterState } from '../DashboardFilters/type';
import BreadCrumbsComponent from '../../components/Breadcrumbs';
import { TemplateContextProvider } from '../../../contexts/TemplateContext';
import { PreConfiguredTemplatesState } from '../DashboardTemplates/type';
import { UpdateUserPreferencesState } from '../../../common/containers/RefactoredDashboard/TopBar/type';

const AccountsView: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{"client_id": null}')
    : { client_id: null };

  const { settings, previousSettings } = useSettings();
  const listViewtype =
    localStorage.getItem('accViewMode') === 'grid' ? false : true;
  const [isListView, setIsListView] = useState(listViewtype);
  const [pageNo, setPageNo] = useState(0);

  const [orderBy, setOrderBy] = React.useState<IOrderBy>('asc');
  const [sortBy, setSortBy] = React.useState<string>('account_name');

  const [selectedFilter, setSelectedFilter] = useState<any>();
  const dispatch = useDispatch();
  const incrementPageNo = () => setPageNo((prevState) => prevState + 1);
  const listViewActiveClass = isListView
    ? classes.svgActive
    : classes.svgNotActive;
  const gridViewActiveClass = !isListView
    ? classes.svgActive
    : classes.svgNotActive;
  const showErrorAlertProps: any = useSelector(
    (state: RootState): any => state?.app
  );
  const { isLoading: isLoadingData, loaderOverScreen, accountList: accountListData, nextPageUrl, headerSecondLine } = useSelector(
    (state: RootState): any => state?.accountList
  );

  const { appliedFilterId: filterId }: SaveFilterState = useSelector(
    (state: RootState) => state.filterCriteriaData?.saveFilterData
  );

  const { defaultTemplate: template }: PreConfiguredTemplatesState = useSelector(
    (state: RootState) => state.dashboardTemplatesData?.pcTemplatesData
  );

  const { data: templateCreateData }: CreateTemplateState = useSelector(
    (state: RootState) => state?.dashboardTemplatesData.createTemplateState
  );

  const { data: preferenceData }: UpdateUserPreferencesState = useSelector(
    (state: RootState) => state?.userPreferenceData.updateUserPreferencesData
  );

  const scrollDivRef = useRef<HTMLInputElement>(null);
  useInfiniteScroll(scrollDivRef, dispatch, isLoadingData, incrementPageNo);
  useEffect(() => {
    if (pageNo && nextPageUrl) {
      dispatch(accountListActionCreator.getMoreAccountList(nextPageUrl));
    }
  }, [pageNo]);

  useEffect(() => {
    let selectedClientId = clientId;
    if (template !== null) {
      dispatch(accountListActionCreator.getAccountList({ selectedClientId, orderBy, sortBy, filterId, template }));
    }
  }, [template, orderBy, sortBy, filterId])

  useEffect(() => {
    if (templateCreateData?.status == 'success') {
      dispatch(dashboardTemplatesActionCreator.pcTemplatesRequest({}));
    }
  }, [templateCreateData]);

  const { mmFactoring, currency } = settings;
  const { mmFactoring: previousMMFactoring, currency: previousCurrency } = previousSettings;
  useEffect(() => {
    let selectedClientId = clientId;
    if (preferenceData && (previousMMFactoring != mmFactoring || previousCurrency != currency)) {
      dispatch(accountListActionCreator.getAccountList({ selectedClientId, orderBy, sortBy, filterId, template }));
    }
  }, [preferenceData, mmFactoring, currency]);

  useEffect(() => {
    localStorage.removeItem('selectedAccount');
    localStorage.removeItem('selectedAccountLogo');
    dispatch(accountSummaryActionCreator.accSummaryReset());
  }, []);

  const setTheViewMode = (viewType: string) => {
    localStorage.setItem('accViewMode', viewType);
    const listView = viewType === 'list' ? true : false;
    setIsListView(listView);
  };
  const hideAlertError = () => {
    dispatch &&
      dispatch(
        appActionCreator.hideMessage({
          show: false,
          errorMsg: '',
          severity: '',
        })
      );
  };
  const handleSelectedAccount = (
    event: any,
    accountId: number,
    accName: string,
    accLogo: string
  ) => {
    history.push(`/account-drilldown/${accountId}`, {
      accName: accName,
      accLogo: accLogo,
    });
    localStorage.setItem('selectedAccount', accName);
    localStorage.setItem('selectedAccountLogo', accLogo);
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

  const handleSubsidiaryDblClick = (evnt: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>,
    selectedClient: any) => {
    evnt.preventDefault();
    const urlProtocol = getURLProtocol();
    localStorage.setItem('selectedClient', JSON.stringify(selectedClient));
    setClientImage();
    setEnabledApps();

    let redirect = async () => { window.location.href = urlProtocol + getClientRedirectURL() };
    redirect().then(() => {
      if (window.location.host.split('.')[0] !== 'localhost:3000')
        localStorage.clear();
    })
  };

  const handleTemplateApply = (templateId: number) => {
    setOrderBy('asc');
    setSortBy('account_name');
  }

  return (
    <>
      {showErrorAlertProps.show ? (
        <NotificationAlert
          {...showErrorAlertProps}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={3000}
          onClose={hideAlertError}
        />
      ) : null}
      {loaderOverScreen ? <LoaderOverScreen /> : null}
      {(
        <React.Fragment>
          <div className={classes.breadCrumbs}>
            <BreadCrumbsComponent accountSelected={false} selectedOption={null} />
          </div>
          <div className={classes.viewBar}>
            <div className={classes.svgIcon}>
              <IconButton
                aria-label="grid"
              >
                <GridIcon
                  onClick={() => setTheViewMode('grid')}
                  className={gridViewActiveClass}
                />
              </IconButton>
            </div>
            <div className={classes.svgIcon}>
              <IconButton
                aria-label="list"
              >
                <ListIcon
                  onClick={() => setTheViewMode('list')}
                  className={listViewActiveClass}
                />
              </IconButton>
            </div>
          </div>
          <Box className={`${classes.accountListHeader} ${isListView ? classes.backgroundForListView : ''}`} >
            <TemplateContextProvider>
              <DashboardTemplates handleTemplateApply={handleTemplateApply} />
            </TemplateContextProvider>
            <DashboardFilters
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              orderBy={orderBy}
              sortBy={sortBy}
            />
          </Box>
          {accountListData?.length ? (
            isListView ? (
              <AccountListView
                accountListData={accountListData}
                handleSelectedAccount={handleSelectedAccount}
                handleSubsidiaryDblClick={handleSubsidiaryDblClick}
                sortBy={sortBy}
                setSortBy={setSortBy}
                orderBy={orderBy}
                setOrderBy={setOrderBy}
                headerSecondLine={headerSecondLine}
              />
            ) : (
                <AccountGridView
                  headerSecondLine={headerSecondLine}
                  accountListData={accountListData}
                  handleSelectedAccount={handleSelectedAccount}
                  handleSubsidiaryDblClick={handleSubsidiaryDblClick}
                />
              )
          ) : accountListData?.length === 0 ? (
            <Typography
              variant="h6"
              classes={{ root: classes.noAccountsDisplay }}
            >
              No Accounts to Display
            </Typography>
          ) : null}
        </React.Fragment>
      )}
      <div
        id="scrollDetectDiv"
        ref={scrollDivRef}
        style={{ border: '1px solid #5850EC', margin: '0 50px' }}
      />
      {isLoadingData && <Loader />}
    </>
  );
};
export default AccountsView;
