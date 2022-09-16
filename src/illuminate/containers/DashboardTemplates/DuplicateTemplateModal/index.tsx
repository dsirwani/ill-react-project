import React, { useEffect, useState } from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
//import Error from '../../../components/Error';
import { useI18n } from '../../../../hooks/useI18n';
import { useStyles } from './style';
import LoaderOverScreen from '../../../components/LoaderOverScreen';
import useTemplateKPIColumns from '../../../../hooks/useTemplateKPIColumns';
import { useSelector, useDispatch } from 'react-redux';
import { dashboardTemplatesActionCreator } from '../../../../utils/configureActionCreators';
import { CreateTemplateState } from '../type';
import { RootState } from '../../../../utils/injectReducer';

const DuplicateTemplateModal: React.FC = () => {
  const i18n = useI18n();
  const classes = useStyles();
  const { setTemplateToViewEditDuplicate, templateToViewEditDuplicate: {
      template,
      duplicateTemplate
    }
  } = useTemplateKPIColumns();
  const [templateName, setTemplateName] = useState("");
  const [validForm, setValidForm] = useState(true);
  const dispatch = useDispatch();

  const { client_id } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : {client_id: ''};

  const { loading, closeModal }: CreateTemplateState  =  useSelector(
    (state: RootState) => state?.dashboardTemplatesData?.createTemplateState ?? {loading: false, error: '', errorMessage: '', closeModal: false}
  );

  useEffect(() => {
    if(closeModal){
      handleClose();
    }
  }, [closeModal])

  const handleClose = () => {
    setTemplateToViewEditDuplicate(templateToViewEditDuplicate => ({ ...templateToViewEditDuplicate, template: null, viewTemplate: false, editTemplate: false, duplicateTemplate: false}));
    setValidForm(true);
  };

  const handleTemplateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTemplateName(e.target.value);
    e.target.value ? 
      setValidForm(true) : setValidForm(false);
  }

  const validateForm = (templateName: string) => {
    templateName ?
      setValidForm(true) : setValidForm(false);
    return !!templateName;
  };

  const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement, any>) => {
    e.preventDefault();
    const isFormValid = validateForm(templateName);
    if ( isFormValid ) {
      const { source, pio_modify, column_details } = template;
      const templateData = { 
        client_id,
        template_type: 'kpi_dashboard',
        template_name: templateName,
        source,
        pio_modify,
        column_details  
      }
      dispatch(dashboardTemplatesActionCreator.createTemplateRequest({...templateData}, false));
    }
  }

  const getErrorClass = () => {
    return validForm ? '' : classes.notchedOutlineError ;
  }

  return (
    <div>
      <Dialog 
        open={duplicateTemplate ?? false} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title" 
        maxWidth = "md"
        disableEscapeKeyDown
        disableBackdropClick
        classes = {{ 
          paperWidthMd: classes.dialogPaperWidth, 
        }}
      >
        <DialogTitle id="form-dialog-title" classes = {{root: classes.dialogTitleRoot}}>{i18n._('Duplicate Template')}</DialogTitle>
        {loading ? <LoaderOverScreen /> : null}
        <DialogContent>
          <TextField
            autoFocus
            required
            error = { !validForm }
            fullWidth = {true}
            id="template-name"
            label={i18n._('Template Name:')}
            variant = "outlined"
            autoComplete = "off"
            helperText={ !validForm ? "Template name is required." : "" }
            FormHelperTextProps={{
              variant: 'outlined'
            }}
            InputLabelProps={{
              className: classes.helperText,
            }}
            InputProps={{
              classes: {
                notchedOutline: getErrorClass(),
              },
            }}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) => handleTemplateChange(e)}
          />
        </DialogContent>
        {/* error ? <Error errorMessage={errorMessage} /> : null */}
        <DialogActions classes = {{root: classes.dialogActionRoot}}>
          <Button onClick={handleClose} color="secondary" variant="contained">
            {i18n._('Cancel')}
          </Button>
          <Button 
            onClick={(e) => { 
              handleSaveClick(e);
            }} 
            color="primary" variant="contained" 
          >
            {i18n._("Save")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DuplicateTemplateModal;