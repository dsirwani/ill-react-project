import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { Tabs, Tab } from '@material-ui/core';
import { RootState } from '../../../../utils/injectReducer';
import { AccountSummaryState } from '../type';
import { accountSummaryActionCreator } from '../../../../utils/configureActionCreators';
import Loader from '../../../components/Loader';
import Error from '../../../components/Error';
import { useI18n } from '../../../../hooks/useI18n';
import { useStyles } from './style';

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

interface AccountSummaryProps {
  setSelectedTab: (value: number) => any;
}

const AccountSummary = (props: AccountSummaryProps) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const i18n = useI18n();

  const dispatch = useDispatch();
  const { accountId } = useParams();

  const KPI_TABS = ['revenue', 'growth', 'plan', 'buying centers', 'PGI']

  const { loading, error, data, errorMessage }: AccountSummaryState = useSelector((state: RootState) => state.accSummaryData);

  React.useEffect((): void => {
    dispatch(accountSummaryActionCreator.accSummaryRequest(accountId));
  }, []);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
    props.setSelectedTab(newValue)
  };

  const renderKPITabs = () => {
    return KPI_TABS.map((kpi: string, i: number) => {
      return <Tab label={i18n._(kpi)} key={i} {...a11yProps(i)} />
    })
  }

  return (
    <div className={classes.root}>
      {loading ? <Loader /> : null}
      {data &&
        <Tabs indicatorColor="primary"
          textColor="primary" value={value} onChange={handleChange} aria-label="account-tabs">
          {renderKPITabs()}
        </Tabs>
      }
      {error ? <Error errorMessage={errorMessage} /> : null}
    </div>
  );
};

export default AccountSummary;