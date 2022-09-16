import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { useI18n } from '../../../../hooks/useI18n';
import ReportingFrequency from './reportingFrequency';
import FinancialDetails from './financialDetails';
import { useStyles } from './style';

interface G2KFinancialsProps { }

const G2KFinancials = (props: G2KFinancialsProps) => {
  const [reportType, setReportType] = useState('income_statements')
  const [value, setValue] = useState(0);
  const [reportFrequency, setReportFrequency] = useState('y')

  const classes = useStyles();
  const i18n = useI18n();

  const REPORT_TYPE = ['income_statements', 'balance_sheets', 'cash_flows']

  const REPORT_TYPE_TABS = [
    { value: 'income_statements', caption: i18n._('Income Statements') },
    { value: 'balance_sheets', caption: i18n._('Balance Sheet') },
    { value: 'cash_flows', caption: i18n._('Cash Flows') },
    // { value: 'key_metrics', caption: i18n._('Key Metrics') },
  ]

  const renderReportingTabs = () => {
    return REPORT_TYPE_TABS.map((type: any, i: number) => {
      return <Tab key={i} label={i18n._(type.caption)} value={i} />
    })
  }

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
    setG2KReportType(REPORT_TYPE[newValue])
  };

  const setG2KReportType = (reportType: string) => {
    setReportType(reportType)
  }

  const setG2KReportFrequency = (frequency: string) => {
    setReportFrequency(frequency)
  }

  // console.log('reportType: ', reportType)
  // console.log('reportFrequency: ', reportFrequency)
  // console.log('reportPeriod: ', reportPeriod)

  return (
    <div>
      <Tabs indicatorColor="primary"
        textColor="primary" value={value} onChange={handleChange} aria-label="reporting-tabs">
        {renderReportingTabs()}
      </Tabs>
      <div className={classes.reportInputs}>
        <ReportingFrequency
          reportFrequency={reportFrequency}
          setG2KReportFrequency={setG2KReportFrequency}
        />
      </div>
      <FinancialDetails
        tabValue={value}
        reportType={reportType}
        reportFrequency={reportFrequency}
      />
    </div>
  );
};

export default G2KFinancials;
