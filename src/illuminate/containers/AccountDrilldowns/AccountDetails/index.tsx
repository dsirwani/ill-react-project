import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Divider
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../../utils/injectReducer';
import { AccountDetailsState, UpdateAccMatchingDataState } from './type';
import { appActionCreator, accountDetailsActionCreator } from '../../../../utils/configureActionCreators';
import NotificationAlert from '../../../components/NotificationAlert';
import LoaderOverScreen from '../../../components/LoaderOverScreen';
import Error from '../../../components/Error';
import ProfileComponent from './TabsFolder/ProfileComponent';
import EmailDomainTable from './TabsFolder/EmailDomain';
import SourceRecords from './TabsFolder/SourceRecords';
import OfficersData from './TabsFolder/OfficersData';
import { useStyles } from './style';

interface AccountDetailsProps { }

const AccountDetails = (props: AccountDetailsProps) => {
  const classes = useStyles();

  const { accountId } = useParams();

  const dispatch = useDispatch();

  const {
    loading,
    error,
    data,
    errorMessage,
  }: AccountDetailsState = useSelector(
    (state: RootState) => state.accountDetailsData?.accountDetailsData
  );

  const showErrorAlertProps: any = useSelector(
    (state: RootState): any => state?.app
  );

  React.useEffect((): void => {
    dispatch(
      accountDetailsActionCreator.accountDetailsRequest({
        account_id: accountId,
      })
    );
  }, []);

  const {
    data: matchData,
  }: UpdateAccMatchingDataState = useSelector(
    (state: RootState) => state.accountDetailsData?.updateAccMatchingData
  );

  React.useEffect((): void => {
    if (matchData) {
      dispatch(
        accountDetailsActionCreator.accountDetailsRequest({
          account_id: accountId,
        })
      );
    }
  }, [matchData]);

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

  const [currentTab, setCurrentTab] = useState('profile');

  const tabs = [
    { value: 'profile', label: 'PROFILE' },
    { value: 'customerDomains', label: 'CUSTOMER DOMAINS' },
    { value: 'matchData', label: 'MATCH DATA' },
    { value: 'leadership', label: 'LEADERSHIP' }
  ];

  const handleTabsChange = (event: any, value: any) => {
    setCurrentTab(value);
  };

  return (
    <div className={classes.root}>
      {showErrorAlertProps.show ? (
        <NotificationAlert
          {...showErrorAlertProps}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={3000}
          onClose={hideAlertError}
        />
      ) : null}
      {loading ? <LoaderOverScreen /> : null}
      {data && (
        <>
          <Box>
            <Tabs
              onChange={handleTabsChange}
              scrollButtons="auto"
              value={currentTab}
              variant="scrollable"
              textColor="secondary"
            >
              {tabs.map((tab) => (
                <Tab
                  className={classes.tabButton}
                  key={tab.value}
                  label={tab.label}
                  value={tab.value}
                />
              ))}
            </Tabs>
          </Box>
          <Divider />
          <Box style={{marginTop:'22px'}}>
            {currentTab === 'profile' && <ProfileComponent data={data} />}
            {currentTab === 'customerDomains' && <EmailDomainTable emailDomains={data?.email_domain} />}
            {currentTab === 'matchData' && <SourceRecords data={data?.source_data} />}
            {currentTab === 'leadership' && <OfficersData data={data?.account_data?.officer_data} />}
          </Box>
        </>
      )}
      {error ? <Error errorMessage={errorMessage} /> : null}
    </div>
  );
};

export default AccountDetails;
