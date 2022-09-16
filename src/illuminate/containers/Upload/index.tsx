import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
  Grid,
  Container,
  Paper,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { uploadActionCreator } from '../../../utils/configureActionCreators';
import { RootState } from '../../../utils/injectReducer';
import { UploadState as IUploadData } from './type';
import ToastNotifier from '../../components/ToastNotifier';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { useI18n } from '../../../hooks/useI18n';
import { useStyles } from './style';

export interface UploadProps {
};

const Upload: React.FC<UploadProps> = () => {
  const classes = useStyles();
  const i18n = useI18n();
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [fileValidations, setFileValidation] = useState('Required');
  const [workbook, setWorkbook] = React.useState(1);

  const uploadData: IUploadData = useSelector((state: RootState) => state.uploadData);
  const dispatch = useDispatch();
  const acceptVariants = ".xlsx,.xls,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

  useEffect((): void => {
    dispatch(uploadActionCreator.resetUpload());
  }, []);

  const handleChange = (event: any) => {
    setWorkbook(event.target.value);
  };

  const onFileChange = (event: any) => {
    setFile(event.target.files[0])
    setFilename(event.target.files[0] ? event.target.files[0].name : 'Choose File')
    setFileValidation('Required')
  }

  const checkFileType = (file: any): boolean => {
    if (!(/\.(xlsx|xls)$/i).test(file.name)) {
      setFileValidation('Files of type xlsx and xls are allowed')
      setFile('')
      setFilename('Choose File');
      return false
    }
    return true
  };

  const minFileSize = (file: any): boolean => {
    if (file.size < 5120) {
      setFileValidation('File size should be more than 5KB')
      setFile('')
      setFilename('Choose File');
      return false
    }
    return true
  };

  const onSubmit = (event: any) => {
    event.preventDefault()
    if (file) {
      if (minFileSize(file) && checkFileType(file)) {
        dispatch(uploadActionCreator.initUpload({file, workbook}));
      }
    }
    else {
      setFileValidation('No file selected');
    }
  }

  return (
    <Grid container direction="column" className={classes.root} justify="center" alignItems="center" >
      <Grid item>
        <Paper className={classes.paper}>
          <Container maxWidth="sm">
            <Grid item className={classes.nav}>
              <Link to="/" title="Dashboard"><ArrowBackRoundedIcon color="primary" className={classes.nav} fontSize="large" /></Link>
            </Grid>
            <Grid item>
              <FormControl required className={classes.formControl}>
                <InputLabel id="input-file-label" className={classes.inputSelect} >
                  {i18n._('Select File')}
                </InputLabel>
                <Select
                  className={classes.inputSelect}
                  labelId="input-file-label"
                  id="select-label"
                  value={workbook}
                  onChange={handleChange}
                >
                  <MenuItem className={classes.fileSelect} value={1}>{i18n._('Client Workbook')}</MenuItem>
                  <MenuItem className={classes.fileSelect} value={2}>{i18n._('Financial')}</MenuItem>
                  <MenuItem className={classes.fileSelect} value={3} disabled>{i18n._('Global 2000')}(G2K)</MenuItem>
                </Select>
                {/* <FormHelperText>Required</FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl className={classes.formControl}>
                <input
                  accept={acceptVariants}
                  className={classes.inputDisplay}
                  id="contained-button-file"
                  type="file"
                  onChange={onFileChange}
                />
                <label htmlFor="contained-button-file" title={i18n._(filename)} className={classes.fileInput}>
                  <Button variant="outlined" color="primary" className={classes.inputOverflow} component="div">
                    <div className={classes.inputOverflow}>
                      {i18n._(filename)}
                    </div>
                  </Button>
                </label>
                <FormHelperText>{i18n._(fileValidations)}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl className={classes.formControl}>
                {uploadData.loading ? <CircularProgress className={classes.progressLoader} />
                  :
                  <Button variant="contained" color="primary" className={classes.themeButton} onClick={onSubmit} component="span">
                    {i18n._('Btn.Upload')}
                  </Button>
                }
              </FormControl>
            </Grid>
            <Grid item>
              {uploadData.data ? <ToastNotifier message={uploadData.data.message} type={'success'} /> : ''}
            </Grid>
            <Grid item>
              {uploadData.errorMessage ? <ToastNotifier message={uploadData.errorMessage} type={'error'} /> : ''}
            </Grid>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Upload;
