import React, { useState } from 'react';
import {
  Paper,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useI18n } from '../../../../hooks/useI18n';
import AccountDataTable from './accountDataTable';
import { useStyles } from './style';

interface AccountDataProps { }

const AccountData = (props: AccountDataProps) => {
  const [dataType, setDataType] = useState('revenue')
  const [periodYear, setPeriodYear] = useState('2020')
  const [periodMonth, setPeriodMonth] = useState('01')

  const classes = useStyles();
  const i18n = useI18n();

  const setAccountDataType = (event: any) => {
    setDataType(event.target.value)
  }

  const setAccountPeriodYear = (event: any) => {
    setPeriodYear(event.target.value)
  }

  const setAccountPeriodMonth = (event: any) => {
    setPeriodMonth(event.target.value)
  }

  const DATA_TYPE = [
    { value: 'revenue', caption: i18n._('Revenue') },
    { value: 'plan', caption: i18n._('Plan') }
  ]

  const PERIOD_YEAR = [
    { value: '2020', caption: 2020 },
    { value: '2019', caption: 2019 },
    { value: '2018', caption: 2018 },
  ]

  const PERIOD_MONTH = [
    { value: '01', caption: i18n._('January') },
    { value: '02', caption: i18n._('February') },
    { value: '03', caption: i18n._('March') },
    { value: '04', caption: i18n._('April') },
    { value: '05', caption: i18n._('May') },
    { value: '06', caption: i18n._('June') },
    { value: '07', caption: i18n._('July') },
    { value: '08', caption: i18n._('August') },
    { value: '09', caption: i18n._('September') },
    { value: '10', caption: i18n._('October') },
    { value: '11', caption: i18n._('November') },
    { value: '12', caption: i18n._('December') }
  ]

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel id="data-type-select-label" className={classes.selectLabel}>{i18n._('Data type')}</InputLabel>
            <Select
              labelId="data-type-select-label"
              id="data-type-select"
              value={dataType}
              onChange={setAccountDataType}
              classes={{ icon: classes.ddArowCls }}
              className={classes.selectValue}
            >
              {DATA_TYPE.map((type: any) => {
                return <MenuItem key={type.value} value={type.value}>{type.caption}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item className={classes.periodSection}>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel id="period-year-select-label" className={classes.selectLabel}>{i18n._('Year')}</InputLabel>
              <Select
                labelId="period-year-select-label"
                id="period-year-select"
                value={periodYear}
                onChange={setAccountPeriodYear}
                classes={{ icon: classes.ddArowCls }}
                className={classes.selectValue}
              >
                {PERIOD_YEAR.map((frequency: any) => {
                  return <MenuItem key={frequency.value} value={frequency.value}>{frequency.caption}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel id="period-month-select-label" className={classes.selectLabel}>{i18n._('Month')}</InputLabel>
              <Select
                labelId="period-month-select-label"
                id="period-month-select"
                value={periodMonth}
                onChange={setAccountPeriodMonth}
                classes={{ icon: classes.ddArowCls }}
                className={classes.selectValue}
              >
                {PERIOD_MONTH.map((frequency: any) => {
                  return <MenuItem key={frequency.value} value={frequency.value}>{frequency.caption}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item>
          <AccountDataTable
            dataType={dataType}
            year={periodYear} 
            month={periodMonth}  />
        </Grid>
      </Paper>
    </div>
  );
};

export default AccountData;
