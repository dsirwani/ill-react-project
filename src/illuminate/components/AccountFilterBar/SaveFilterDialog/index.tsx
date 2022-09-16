import React, { Dispatch, SetStateAction, useState } from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import Error from '../../../../illuminate/components/Error';
import { useI18n } from '../../../../hooks/useI18n';
import { useStyles } from './style';
import LoaderOverScreen from '../../LoaderOverScreen/index';
import { SaveFilterState } from '../../../containers/DashboardFilters/type';

interface ISaveFilterDialog {
  saveFilterDialog: boolean;
  setSaveFilterDialog: Dispatch<SetStateAction<boolean>>;
  saveFilterToStore: (filterName: string) => void;
  saveFilterState: SaveFilterState;
}

const SaveFilterDialog: React.FC<ISaveFilterDialog> = ({ saveFilterDialog, setSaveFilterDialog, saveFilterToStore, saveFilterState }) => {
  //const [open, setOpen] = React.useState(false);
  const i18n = useI18n();
  const classes = useStyles();

  const [filterName, setFilterName] = useState("");
  const [validForm, setValidForm] = useState(true);

  const handleClose = () => {
    setSaveFilterDialog(false);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilterName(e.target.value);
    e.target.value ? 
      setValidForm(true) : setValidForm(false);
  }

  const validateForm = (filterName: string) => {
    filterName ?
      setValidForm(true) : setValidForm(false);
    return !!filterName;
  };

  const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement, any>) => {
    e.preventDefault();
    const isFormValid = validateForm(filterName);
    if ( isFormValid ) saveFilterToStore(filterName);
  }

  const { loading, error, errorMessage,  } = saveFilterState;

  const getErrorClass = () => {
    return validForm ? '': classes.notchedOutlineError ;
  }

  return (
    <div>
      <Dialog 
        open={saveFilterDialog} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title" 
        maxWidth = "md"
        disableEscapeKeyDown
        disableBackdropClick
        classes = {{ 
          paperWidthMd: classes.dialogPaperWidth,
          
        }}
      >
        <DialogTitle id="form-dialog-title" classes = {{root: classes.dialogTitleRoot}}>{i18n._('Name Filter')}</DialogTitle>
        {loading ? <LoaderOverScreen /> : null}
        <DialogContent>
          <TextField
            autoFocus
            required
            error = { !validForm }
            fullWidth = {true}
            id="filter-name"
            label={i18n._('Filter Name:')}
            variant = "outlined"
            autoComplete = "off"
            helperText={ !validForm ? "Filter name is required." : "" }
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
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) => handleFilterChange(e)}
          />
        </DialogContent>
        {error ? <Error errorMessage={errorMessage} /> : null}
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

export default SaveFilterDialog;