import React, { useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, Divider, FormControlLabel, FormGroup, TextField } from '@material-ui/core';
import { useI18n } from '../../../../hooks/useI18n';
import { useStyles } from './style';
import CustomSwitch from '../../../components/CustomSwitch/index';
import { useDispatch, useSelector } from 'react-redux';
import KPIColumn from './KPIColumn';
import { TemplatesKPIColumns, CreateTemplateState } from '../type';
import { RootState } from '../../../../utils/injectReducer';
import { dashboardTemplatesActionCreator } from '../../../../utils/configureActionCreators';
import useTemplateKPIColumns from '../../../../hooks/useTemplateKPIColumns';
import Validator from '../../../../utils/validator';
import LoaderOverScreen from '../../../components/LoaderOverScreen';

interface ITemplateColumnsModal {}

type ITemplateFields = {
  template_name: string;  
  pio_modify: boolean;
  template_type: string;
  source:string;
};

const validationRules = {
  template_name: ['required'],
}

const validator = new Validator( validationRules);

const TemplateColumnsModal: React.FC<ITemplateColumnsModal> = ({
}): JSX.Element => {
  const classes = useStyles();
  const i18n = useI18n();
  const dispatch = useDispatch();

  const {
    ifAdmin,
    templateToViewEditDuplicate, 
    setTemplateToViewEditDuplicate, 
    openCreateModal, 
    setOpenCreateModal, 
    templateFields, 
    setTemplateFields,
    initTemplateFields
  } = useTemplateKPIColumns();
  
  const {
    columns,
    loading,
  }: TemplatesKPIColumns = useSelector(
    (state: RootState) => state?.dashboardTemplatesData.templatesKPIColumns
  );

  const {
    closeModal,
  }: CreateTemplateState = useSelector(
    (state: RootState) => ({...state?.dashboardTemplatesData.createTemplateState})
  );

  useEffect(() => {
    if( templateToViewEditDuplicate.viewTemplate) {
      const { template_name, pio_modify } = templateToViewEditDuplicate.template;
      setTemplateFields( templateFields => ({...templateFields, template_name, pio_modify}));
      const templateColumns = templateToViewEditDuplicate.template.column_details;
      dispatch(dashboardTemplatesActionCreator.viewKPITemplateColumn(templateColumns) );
    }
    if( templateToViewEditDuplicate.editTemplate) {
      const { template_name, pio_modify } = templateToViewEditDuplicate.template;
      setTemplateFields( templateFields => ({...templateFields, template_name, pio_modify}));
      validator.validateInputs('template_name', template_name);
      const templateColumns = templateToViewEditDuplicate.template.column_details;
      dispatch( dashboardTemplatesActionCreator.editKPITemplateColumnRequest("all", 'kpi_dashboard', templateColumns) );
    }
  }, [templateToViewEditDuplicate.viewTemplate, templateToViewEditDuplicate.editTemplate])

  const { client_id } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : {client_id: ''};

  const handleTemplateNameBlur = () => {
    //setEditTemplate(false);
  }

  const handleCancelCreateTemplate = () => {
    dispatch(dashboardTemplatesActionCreator.resetKPITemplateColumn({}));
    setOpenCreateModal(false);
    setTemplateToViewEditDuplicate({ template: null, viewTemplate: false, editTemplate: false, duplicateTemplate: false});
    validator.resetFields(validationRules);
    setTemplateFields({...initTemplateFields});
  }

  const onCreateTemplate = (event: React.FormEvent) => {
    event.preventDefault();
    const column_details = columns.map((column: any) => {
      const {column_number, fin_data_type, drop2, drop3, drop4, variable_type } = column;
      return {
        column_number, fin_data_type, drop2, drop3, drop4, variable_type
      }
    });
    const templateData: ITemplateFields = { ...templateFields };
    templateData['column_details'] = [...column_details];
    if (validator.isFormValid()) {
      if(templateToViewEditDuplicate.editTemplate){
        templateData['template_id'] = templateToViewEditDuplicate.template.template_id;
        dispatch(dashboardTemplatesActionCreator.createTemplateRequest({...templateData, client_id}, true))
      } else {
        dispatch(dashboardTemplatesActionCreator.createTemplateRequest({...templateData, client_id}, false));
      }
    }
  };

  useEffect(() => {
    if(closeModal) {
      setOpenCreateModal(false);
      setTemplateToViewEditDuplicate({ template: null, viewTemplate: false, editTemplate: false, duplicateTemplate: false});
      validator.resetFields(validationRules);
    } 
  },[closeModal] );

  useEffect(() => {
    if(templateToViewEditDuplicate.editTemplate)
      validator.validateInputs('template_name', templateFields.template_name);
  },[templateFields.template_name])

  //const textFieldEditable = ifAdmin() && !editTemplate;

  const handleInputFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    if (name === 'pio_modify') {
      templateFields[name] = checked;
      validator.validateInputs(name, checked);
    } else {
      templateFields[name] = value;
      validator.validateInputs(name, value);
    }
    setTemplateFields({...templateFields});
  };

  return (
    <div>
      <Dialog
        PaperProps={{ classes: { root: classes.dialogBox } }}
        open={openCreateModal}
        aria-labelledby="responsive-dialog-title"
        fullWidth = {true}
        maxWidth = 'lg'
        disableEscapeKeyDown
        disableBackdropClick
      >
        <form onSubmit={onCreateTemplate}>
          {loading ? <LoaderOverScreen /> : null}
          <DialogContent color="primary" >
            <FormGroup row = {true} classes = {{root: classes.formGrpRoot}}>
              <div>
                <TextField
                  id= 'template_name'
                  label= 'Template Name'
                  name='template_name'
                  error={validator.fields['template_name'] ? validator.fields['template_name'].errorMsg !== '' : false}
                  helperText={ validator?.fields?.['template_name']?.errorMsg ? 'Template name is required' : null}
                  required
                  InputProps={{
                    autoComplete: 'off',
                  }}
                  autoFocus
                  variant="outlined"
                  placeholder = 'Enter template name'
                  onBlur = {handleTemplateNameBlur}
                  //onClick = {() => (setEditTemplate(true))}
                  onChange = {handleInputFieldChange}
                  defaultValue = { templateFields.template_name }
                  disabled = { templateToViewEditDuplicate.viewTemplate || templateToViewEditDuplicate.editTemplate}
                />                  
              </div>
              <div style = {{ display: 'flex'}}>
                
                <div className = {classes.spaceBetRadios}>
                  <FormControlLabel
                    control={
                      <CustomSwitch
                        onChange={handleInputFieldChange}
                        checked={templateFields.pio_modify}
                        disabled = { !ifAdmin() }
                        name="pio_modify"
                      />
                    }
                    label={i18n._('Only Polaris IO can modify')}
                  />
                </div>
              </div>
            </FormGroup>
            <Divider className = {classes.dividerCss}/>
            <KPIColumn />
          </DialogContent>
          <DialogActions>
            <Button 
              variant="outlined" 
              color="primary"  
              onClick={handleCancelCreateTemplate} 
            >
              {templateToViewEditDuplicate.viewTemplate ? i18n._('Close') : i18n._('Cancel')}
            </Button>
            {!templateToViewEditDuplicate.viewTemplate && <Button 
              variant="contained"
              color="primary" 
              type = "submit"
            >
              {i18n._('OK')}
            </Button>}
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default TemplateColumnsModal;