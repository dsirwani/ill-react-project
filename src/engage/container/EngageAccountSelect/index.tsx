import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Card, CardHeader, Tooltip, Typography } from '@material-ui/core';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import {
  appActionCreator,
  accountListActionCreator,
  dashboardTemplatesActionCreator,
  siteSelectionActionCreator,
  accountSummaryActionCreator
} from '../../../utils/configureActionCreators';
import { RootState } from '../../../utils/injectReducer';
import NotificationAlert from '../../../illuminate/components/NotificationAlert';
import Loader from '../../../illuminate/components/Loader';
import LoaderOverScreen from '../../../illuminate/components/LoaderOverScreen';
import { useStyles } from './style';
import { ClientDataState } from '../../../illuminate/containers/PlatformView/type';
// import BreadCrumbsComponent from '../../../illuminate/components/Breadcrumbs';
import { PreConfiguredTemplatesState } from '../../../illuminate/containers/DashboardTemplates/type';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../utils/routeConstants';


const EngageAccountSelect: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [pageNo, setPageNo] = useState(0);
  const dispatch = useDispatch();
  const incrementPageNo = () => setPageNo((prevState) => prevState + 1);

  const showErrorAlertProps: any = useSelector(
    (state: RootState): any => state?.app
  );
  const { isLoading: isLoadingData, loaderOverScreen, accountList: accountListData, nextPageUrl } = useSelector(
    (state: RootState): any => state?.accountList
  );

  let { data: clientData }: ClientDataState = useSelector(
    (state: RootState) => state?.clientData
  );

  if (!clientData) {
    const clientDetails = localStorage.getItem('selectedClient')
      ? JSON.parse(localStorage.getItem('selectedClient') || '{"client_id": null}')
      : { client_id: null };
    clientData = [{ ...clientDetails }];
  }

  const { client_id: clientId } = clientData[0];
  const { defaultTemplate: template }: PreConfiguredTemplatesState = useSelector(
    (state: RootState) => state.dashboardTemplatesData?.pcTemplatesData
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
    localStorage.removeItem('selectedAccount');
    localStorage.removeItem('selectedAccountLogo');
    dispatch(accountSummaryActionCreator.accSummaryReset());
    if (clientId) {
      dispatch(accountListActionCreator.setClientImage(clientData[0].s3_logo_link));
      dispatch(accountListActionCreator.setEnableApps(clientData[0].enabled_apps));
    }
    if (selectedClientId) {
      if (template == null) {
        dispatch(dashboardTemplatesActionCreator.pcTemplatesRequest({}));
      }
    }
  }, []);

  useEffect(() => {
    let selectedClientId = clientId;
    if (template !== null) {
      dispatch(accountListActionCreator.getAccountList({ selectedClientId, template, orderBy: 'asc', sortBy: 'account_name' }));
    }
  }, [template])

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
    dispatch(siteSelectionActionCreator.getAccountSites(
      {
        account_id: accountId,
        show_site: true
      })
    );
    history.push(ROUTES.ENGAGE_MICROSITES);
  };

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
      <React.Fragment>
        {/* <div className={classes.breadCrumbs}>
              <BreadCrumbsComponent accountSelected={false} selectedOption={null} />
            </div> */}
        <div className={classes.engageCards}>
          {accountListData?.length ? (
            accountListData.map((account: any, idx: number) => {
              const { data: { account_name, client_name, logo_link, client_id, account_id }, type: acc_type } = account;
              const acc_name = acc_type === 'account' ? account_name : client_name;
              const acc_id = acc_type === 'account' ? account_id : client_id;
              return (
                <Card
                  className={clsx(classes.root, classes.cursorPointer)}
                  key={`card-${acc_id}`}
                  onClick={(event) =>
                    handleSelectedAccount(event, acc_id, acc_name, logo_link)
                  }
                >
                  <CardHeader
                    classes={{
                      root: classes.cardHeaderRoot,
                      avatar: classes.cardAvatar,
                      title: classes.cardTitle,
                      content: classes.cardHeaderContent,
                    }}
                    avatar={
                      <Avatar
                        aria-label={acc_name}
                        alt={acc_name}
                        src={logo_link}
                      />
                    }
                    title={
                      <Tooltip title={acc_name} placement="top">
                        <Typography
                          variant='body2'
                          classes={{ root: classes.cardTitle, }}
                          noWrap={true}
                        >
                          {acc_name} {acc_type === 'subsidiary' ? '(subsidiary)' : ''}
                        </Typography>
                      </Tooltip>
                    }
                  />
                </Card>
              );
            })
          ) : accountListData?.length === 0 ? (
            <Typography
              variant="h6"
              classes={{ root: classes.noAccountsDisplay }}
            >
              No Accounts to Display
            </Typography>
          ) : null}
        </div>
      </React.Fragment>
      <div
        id="scrollDetectDiv"
        ref={scrollDivRef}
        style={{ border: '1px solid #5850EC', margin: '0 50px' }}
      />
      {isLoadingData && <Loader />}
    </>
  );
};
export default EngageAccountSelect;

