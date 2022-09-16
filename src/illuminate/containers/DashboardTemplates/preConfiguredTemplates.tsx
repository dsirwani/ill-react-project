
import React, { useState } from 'react';
import {
  FormControl,
  // InputLabel,
  TextField,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../utils/injectReducer';
import { getDefaultTemplate } from '../../../utils/miscUtils';
import { dashboardTemplatesActionCreator, dashboardFiltersActionCreator } from '../../../utils/configureActionCreators';
import { PreConfiguredTemplatesState } from './type';
import { useI18n } from '../../../hooks/useI18n';
import Loader from '../../components/Loader';
import { useStyles } from './style';

interface PreConfiguredTemplatesProps {
  setSelectedTemplate: (data: number) => void;
}

const PreConfiguredTemplates = (props: PreConfiguredTemplatesProps) => {
  const classes = useStyles();
  const i18n = useI18n();
  const [template, setTemplate] = useState('')
  const dispatch = useDispatch();

  const setPCTemplate = (event: any) => {
    setTemplate(event.target.value);
    props.setSelectedTemplate(event.target.value);
    dispatch(dashboardTemplatesActionCreator.setDefaultTemplate(event.target.value));
    clearFilters(); //Reset filters on template change
  }

  const clearFilters = () => {
    localStorage.removeItem("selectedFilter");
    dispatch(dashboardFiltersActionCreator.clearSavedAppliedFilter());
    localStorage.removeItem('appliedSavedFilter');
  }

  const { loading, data }: PreConfiguredTemplatesState = useSelector(
    (state: RootState) => state.dashboardTemplatesData?.pcTemplatesData
  );

  React.useEffect((): void => {
    if (data?.items) {
      let defaultTemplate = getDefaultTemplate(data?.items)
      setTemplate(defaultTemplate)
    }
  }, [data]);

  return (
    <React.Fragment>
      {loading ? <Loader /> : null}
      {data?.items?.length && (
        <FormControl className={classes.formControl}>
          {/* <InputLabel id="template-select-label" className={classes.selectLabel}>{i18n._('Select Template')}</InputLabel> */}
          
          <TextField
              label={i18n._('Select Template')}
              id="template-select"
              name="template-select"
              onChange={setPCTemplate}
              select
              SelectProps={{ native: true }}
              value={template}
              variant="outlined"
            >
              {data.items.map((template: any) => {
              return <option key={template.template_id} value={template.template_id}>{template.template_name}</option>
            })}
            </TextField>
            {/* <Select
            labelId="template-select-label"
            id="template-select"
            value={template}
            onChange={setPCTemplate}
            classes={{ icon: classes.ddArowCls }}
            className={classes.selectValue}
          > */}
            
          {/* </Select> */}
        </FormControl>
      )}
    </React.Fragment>
  )
};

export default PreConfiguredTemplates;