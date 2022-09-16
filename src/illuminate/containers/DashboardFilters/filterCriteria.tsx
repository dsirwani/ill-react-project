import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { RootState } from '../../../utils/injectReducer';
import { FilterCriteriaState } from './type';
import { PreConfiguredTemplatesState } from '../DashboardTemplates/type';
import { dashboardFiltersActionCreator } from '../../../utils/configureActionCreators';
import { useI18n } from '../../../hooks/useI18n';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { useStyles } from './style';

interface FilterCriteriaProps {
  criteria: string;
  condition: string
  setFilterCriteria: (value: any) => any;
  setFilterCondn: (value: any) => any;
}

const FilterCriteria = (props: FilterCriteriaProps) => {
  const classes = useStyles();
  const i18n = useI18n();
  const dispatch = useDispatch();

  const {
    loading,
    error,
    data,
    errorMessage,
  }: FilterCriteriaState = useSelector(
    (state: RootState) => state.filterCriteriaData?.filterCriteriaData
  );

  const { defaultTemplate: template }: PreConfiguredTemplatesState = useSelector(
    (state: RootState) => state.dashboardTemplatesData?.pcTemplatesData
  );

  React.useEffect((): void => {
    dispatch(dashboardFiltersActionCreator.filterCriteriaRequest({ template: template }));
  }, []);

  return (
    <React.Fragment>
      {loading ? <Loader /> : null}
      {data?.items?.length && (
        <React.Fragment>
          <FormControl component="fieldset">
            <RadioGroup row aria-label="position" value={props.condition} onChange={props.setFilterCondn} name="position" defaultValue="left">
              <FormControlLabel value="and" control={<Radio color="primary" classes={{ root: classes.radio, checked: classes.checked }} />} label={i18n._('AND')} />
              <FormControlLabel value="or" control={<Radio color="primary" classes={{ root: classes.radio, checked: classes.checked }} />} label={i18n._('OR')} />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel id="report-type-select-label" className={classes.selectLabel}>{i18n._('Select')}</InputLabel>
            <Select
              labelId="report-type-select-label"
              id="report-type-select"
              value={props.criteria}
              onChange={props.setFilterCriteria}
              classes={{ icon: classes.ddArowCls }}
              className={classes.selectValue}
            >
              {data.items.map((type: any) => {
                return <MenuItem key={type} value={type}>{type}</MenuItem>
              })}
            </Select>
          </FormControl>
        </React.Fragment>)
      }
      {error ? <Error errorMessage={errorMessage} /> : null}
    </React.Fragment>
  );
};

export default FilterCriteria;