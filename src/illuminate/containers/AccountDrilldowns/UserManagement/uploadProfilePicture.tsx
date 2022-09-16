import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useStyles } from './style';
import { EditUserProfileState } from './type';
import {
  Modal, Button, FormControl, FormHelperText
} from '@material-ui/core';
import { useI18n } from '../../../../hooks/useI18n';
import { RootState } from '../../../../utils/injectReducer';
import { userProfileActionCreator } from '../../../../utils/configureActionCreators';
import Validator from '../../../../utils/validator';

export interface UploadProps {
  userId: string,
  editUserProfile: boolean,
  handleClose: any
};

const validator = new Validator({
  file: ['required', 'onlyImageFileIsAllowed', 'fileSizeLessThanFiveMB'],
});

const UploadProfilePicture: React.FC<UploadProps> = ({ userId, editUserProfile, handleClose }) => {
  const classes = useStyles();
  const i18n = useI18n();
  const dispatch = useDispatch();
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const acceptVariants = ".png,.jpg,.jpeg.";
  const { accountId } = useParams();

  const { data }: EditUserProfileState = useSelector(
    (state: RootState) => {
      return state?.editUserProfileData
    }
  );

  const onFileChange = (event: any) => {
    setFile(event.target.files[0])
    setFilename(event.target.files[0] ? event.target.files[0].name : 'Choose File');
    validator.validateInputs('file', event.target.files[0]);
  }
  
  const handleCloseModal = () => {
    setFile('');
    setFilename('Choose File');
    handleClose();
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (file && validator.isFormValid()) {
      dispatch(userProfileActionCreator.editUserProfileRequest({ data: file, accountId, userId, isUploadPicture: true }));
    }
  };

  React.useEffect(() => {
    if (data) {
      handleClose();
    }
  }, [data]);

  return (
    <Modal
      open={editUserProfile}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.modal}
    >
      <div className={classes.paper}>
        <h2 id="spring-modal-title">Set profile picture</h2>
        {/* <p id="spring-modal-description">react-spring animates me.</p> */}
          <FormControl className={classes.formControl}>
          <input
            type="file"
            accept={acceptVariants}
            id="profile-photo-button-file"
            className={classes.inputDisplay}
            onChange={onFileChange}
          />
           <label htmlFor="profile-photo-button-file" title={i18n._(filename)} className={classes.fileInput}>
              <Button variant="outlined" color="primary" className={`${validator.fields['file'].errorMsg!=='' ? classes.errorBox : ''} ${classes.inputOverflow}`} component="div">
                <div className={classes.inputOverflow}>
                  {i18n._(filename)}
                </div>
              </Button>
              <FormHelperText className={`${validator.fields['file'].errorMsg!=='' ? classes.error : ''}`}>{i18n._(validator.fields['file'].errorMsg)}</FormHelperText>
            </label>
          </FormControl>
          <FormControl className={`${classes.formControl} ${classes.btnGroup}`}>
            <Button disabled={!file || validator.fields['file'].errorMsg!==''} variant="contained" color="primary" className={classes.uploadButton} component="span" onClick={handleSubmit}>
              {i18n._('Btn.Upload')}
            </Button>
            <Button variant="contained" color="secondary" className={classes.cancelButton} component="span" onClick={handleCloseModal}>
              {i18n._('Cancel')}
            </Button>
          </FormControl>
      </div>
    </Modal>
  );
};

export default UploadProfilePicture;