import React from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography
} from '@material-ui/core';
import Error from '../../components/Error';
import TagComponent from './tagComponent';
import { useI18n } from '../../../hooks/useI18n';
import { useStyles } from './style';

interface KPIDashboardFiltersProps {
  criteria: string;
  value: string;
  operator: string;
  setFilterOperator: (value: any) => any;
  setFilterValue: (value: any) => any;
}

const KPIDashboardFilters = (props: KPIDashboardFiltersProps) => {
  const classes = useStyles();
  const i18n = useI18n();

  const OPERATOR_TYPE = [
    { value: 'lt', caption: '<' },
    { value: 'gt', caption: '>' },
    { value: 'le', caption: '<=' },
    { value: 'ge', caption: '>=' },
    { value: 'eq', caption: '=' },
    { value: 'ne', caption: '!=' }
  ]

  const handleChange = (event: any, inputType: string) => {
    switch (inputType) {
      case 'acc_name':
        props.setFilterValue(event.target.value)
      case 'tags':
        props.setFilterValue(event.target.value)
      case 'kpi':
        props.setFilterValue(event.target.value)
      default:
        return null
    }
  };

  const handleTagsChange = (tagList: any) => {
    let tagValues = tagList ? tagList.map((tag: any) => (tag.title)) : '';
    props.setFilterValue(tagValues)
  }

  const getKPIType = (criteria: string) => {
    const KPIType = criteria.split(' ')[1].toUpperCase()
    if (KPIType == 'REVENUE' || KPIType == 'PLAN') {
      return 'currency'
    }
    else if (KPIType == 'GROWTH') {
      return 'percent'
    }
    else return null
  };

  return (
    <div>
      {props.criteria ? (() => {
        switch (props.criteria) {
          case 'Account Name':
            return (
              <TextField id="outlined-search-acc" label={i18n._('Search field')}
                type="search" variant="outlined"
                onChange={(e) => handleChange(e, 'acc_name')} />
            );
          case 'TAGS':
            return (
              <TagComponent handleTagsChange={handleTagsChange} />
            );
          default:
            return (
              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <FormControl fullWidth className={classes.formControlOp}>
                  <InputLabel id="operator-type-select-label" className={classes.selectLabel}>{i18n._('Select Operator')}</InputLabel>
                  <Select
                    labelId="operator-type-select-label"
                    id="operator-type-select"
                    value={props.operator}
                    onChange={props.setFilterOperator}
                    classes={{ icon: classes.ddArowCls }}
                    className={classes.selectValue}
                  >
                    {OPERATOR_TYPE.map((operator: any) => {
                      return <MenuItem key={operator.value} value={operator.value}>{operator.caption}</MenuItem>
                    })}
                  </Select>
                </FormControl>
                {getKPIType(props.criteria) == 'currency' ?
                  <Typography className={classes.KPIUnit} variant="h6">$</Typography>
                  : null}
                <TextField
                  disabled={!props.operator ? true : false}
                  onChange={(e) => handleChange(e, 'kpi')}
                  id="outlined-number-kpi"
                  label={i18n._('Value')}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  helperText="Filter values are in USD"
                />
                {getKPIType(props.criteria) == 'percent' ?
                  <Typography className={classes.KPIUnit} variant="h6">%</Typography>
                  : null}
              </div>
            );
        }
      })() : <Error errorMessage={'Filter Criteria not selected'} />}
    </div>
  );
};

export default KPIDashboardFilters;