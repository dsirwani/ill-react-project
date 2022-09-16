import React, { Fragment, lazy, Suspense } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ROUTES } from '../../../utils/routeConstants';
import { ifPolarisInstance } from '../../../utils/miscUtils';
import { isSuperAdmin, ifTMPermissions, getUserRole } from '../../../utils/localStorageUtils';
// import MessageBar from '../MessageBar';
import SiteSelection from '../../containers/SiteSelection';
import { RootState } from '../../../utils/injectReducer';
import { SiteSelectionState } from '../../containers/SiteSelection/type';
import { appActionCreator } from '../../../utils/configureActionCreators';
import NotificationAlert from '../../../illuminate/components/NotificationAlert';

const AccountsView = lazy(() => import('../../../illuminate/containers/AccountsView'));
const Upload = lazy(() => import('../../../illuminate/containers/Upload'));
const AccountDrilldowns = lazy(() =>
  import('../../../illuminate/containers/AccountDrilldowns')
);
const TeamAccessManagement = lazy(() =>
  import('../../../illuminate/containers/TeamAccessManagement')
);
const ClientsView = lazy(() => import('../../../common/components/ClientsView'));
const EngageCanvas = lazy(() => import('../../../engage/components/EngageCanvas'));
const ResponseBuilder = lazy(() => import('../../../pulse/containers/ResponseBuilder'));
const NotFound = lazy(() => import('../../../illuminate/components/NotFound'));
const Microsites = lazy(() => import('../../../engage/components/Microsites'))

const ContentWrapper: React.FC = () => {
  const superAdmin = isSuperAdmin();
  const TMPermissions = ifTMPermissions();
  const isCustomer = getUserRole().includes('is_customer');

  const dispatch = useDispatch();

  const { showSite }: SiteSelectionState = useSelector(
    (state: RootState) => state.siteSelectionData?.siteSelectData
  );

  const selectedClient = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{"client_id": null}')
    : { client_id: null };
  
  const showErrorAlertProps: any = useSelector(
    (state: RootState): any => state?.app
  );

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

  return (
    <Fragment>
      <div className="">
        {showErrorAlertProps.show ? (
          <NotificationAlert
            {...showErrorAlertProps}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            autoHideDuration={3000}
            onClose={hideAlertError}
          />
        ) : null}
        <div style={{ display: 'flex' }}>
          {/* <MessageBar showMsgBar={showSite ? true : false} /> */}
          {isCustomer || showSite ? <SiteSelection /> : null}
        </div>
        <Suspense fallback={'Loading...'}>
          <Switch>
            <Route exact path={ROUTES.ACCOUNT_DRILLDOWN}>
              {!isCustomer ? <AccountDrilldowns /> : <AccountsView />}
            </Route>
            <Route exact path={ROUTES.ACCOUNT_VIEW} component={AccountsView} />
            <Route exact path={ROUTES.UPLOAD}>
              {superAdmin ? <Upload /> : <AccountsView />}
            </Route>
            <Route exact path={ROUTES.TEAM_MANAGEMENT}>
              {superAdmin || TMPermissions ? <TeamAccessManagement /> : <AccountsView />}
            </Route>
            <Route exact path={ROUTES.CLIENTS_VIEW}>
              {superAdmin ? <ClientsView /> : <Redirect to={ROUTES.DEFAULT} />}
            </Route>
            <Route exact path={ROUTES.DEFAULT}>
              {superAdmin && ifPolarisInstance() ? (
                <Redirect to={ROUTES.CLIENTS_VIEW} />
              ) : isCustomer ? (
                  <Redirect to={ROUTES.ENGAGE_ACCOUNT_LIST} />
              ) : (
                  <AccountsView />
                )}
            </Route>
            <Route exact path={ROUTES.ENGAGE_ACCOUNT_LIST} component={EngageCanvas}>
              {isCustomer || selectedClient?.enabled_apps?.includes('engage') ? <EngageCanvas /> : <Redirect to={ROUTES.ACCOUNT_VIEW} />}
            </Route>
            <Route exact path={ROUTES.ENGAGE_MICROSITES} component={EngageCanvas}>
              {isCustomer || selectedClient?.enabled_apps?.includes('engage') ? <Microsites /> : <Redirect to={ROUTES.ACCOUNT_VIEW} />}
            </Route>
            <Route exact path={ROUTES.PULSE_HOME} component={ResponseBuilder} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    </Fragment>
  );
};

export default withRouter(ContentWrapper);
