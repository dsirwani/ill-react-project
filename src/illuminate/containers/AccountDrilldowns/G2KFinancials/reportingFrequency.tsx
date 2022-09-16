
import React from 'react';
import {
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';
import { useI18n } from '../../../../hooks/useI18n';
// import { useStyles } from './style';

interface ReportingFrequencyProps {
  reportFrequency: string,
  setG2KReportFrequency: (frequency: string) => any;
}

const ReportingFrequency = (props: ReportingFrequencyProps) => {
  // const classes = useStyles();
  const i18n = useI18n();

  const handleRadioChange = (event: any) => {
    // setValue(event.target.value);
    props.setG2KReportFrequency(event.target.value)
  };

  // const { reportType, reportFrequency, reportPeriod } = props

  React.useEffect((): void => {

  }, []);

  return (
    <React.Fragment>
      <RadioGroup row aria-label="report-frequency" name="report-frequency" value={props.reportFrequency} onChange={handleRadioChange}>
        <FormControlLabel value="y" control={<Radio />} label={i18n._('Annual')} />
        <FormControlLabel value="q" control={<Radio />} label={i18n._('Quarter')} />
      </RadioGroup>
    </React.Fragment>
  )
};

export default ReportingFrequency;