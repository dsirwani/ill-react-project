
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Button,
  Divider,
  Dialog,
  DialogContent,
  DialogActions,
  Grid,
  Typography,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import { RootState } from '../../../../../utils/injectReducer';
import { AccountMatchingDataState, UpdateAccMatchingDataState, AccMatchingSearchDataState } from '../type';
import { accountDetailsActionCreator } from '../../../../../utils/configureActionCreators';
import { useI18n } from '../../../../../hooks/useI18n';
import SearchList from '../searchList'
import Loader from '../../../../components/Loader';
import Error from '../../../../components/Error';
import { useStyles } from '../style';

interface NameMatchingDialogProps {
  open: boolean;
  source: string;
  handleDialogClose: (selectedFilter: any) => void;
}

const NameMatchingDialog = (props: NameMatchingDialogProps) => {
  const [matches, setMatches] = useState('');
  const classes = useStyles();
  const i18n = useI18n();
  const dispatch = useDispatch();
  const { accountId } = useParams();
  const [searchValue, setSearchValue] = useState('')
  const [matchList, setMatchList] = useState([]);

  const {
    loading,
    error,
    data,
    errorMessage,
  }: AccountMatchingDataState = useSelector(
    (state: RootState) => state.accountDetailsData?.accountMatchingData
  );

  const { loading: matchLoading }: UpdateAccMatchingDataState = useSelector(
    (state: RootState) => state.accountDetailsData?.updateAccMatchingData
  );

  const { data: searchData }: AccMatchingSearchDataState = useSelector(
    (state: RootState) => state.accountDetailsData?.accMatchingSearchData
  );

  const handleChange = (event: any) => {
    setSearchValue(event.target.value)
  };

  const handleMatchSelect = (value: any) => {
    setMatches(value);
  };

  const getMatchSearchType = (matchType: string) => {
    if (matchType === 'LEI') return 'lei_search'
    else if (matchType === 'G2K') return 'g2k_search'
    else return ''
  }

  const searchMatch = () => {
    dispatch(accountDetailsActionCreator.accMatchingSearchDataRequest({
      search_type: getMatchSearchType(props.source),
      search_string: searchValue
    }));
  };

  const clearMatch = () => {
    dispatch(accountDetailsActionCreator.updateAccMatchingDataRequest({
      account_id: accountId,
      match_data: { operation: "clear_match" }
    }));
  };

  const selectMatch = () => {
    dispatch(accountDetailsActionCreator.updateAccMatchingDataRequest({
      account_id: accountId,
      match_data: { operation: "add_match", lei: matches }
    }));
  };

  const ifSearchNotAllowed = () => {
    if (searchValue?.length <= 3) return true
    return false
  }

  const ifSearchValue = () => {
    if (searchValue?.length > 0) return true
    return false
  }

  const getMatchType = (matchType: string) => {
    if (matchType === 'LEI') return 'account_name_vs_lei'
    else if (matchType === 'G2K') return 'account_name_vs_g2k'
    else return ''
  }

  useEffect(() => {
    if (props.open) {
      dispatch(accountDetailsActionCreator.accountMatchingDataRequest({
        account_id: accountId,
        match_type: getMatchType(props.source)
      }));
    }
    return () => {
      setMatches('');
      setSearchValue('');
    }
  }, [props.open]);

  useEffect((): void => {
    if (data?.match_list) {
      setMatchList(data.match_list)
    }
  }, [data]);

  useEffect((): void => {
    if (searchData?.items) {
      setMatchList(searchData.items)
    }
  }, [searchData]);

  useEffect((): void => {
    if (!ifSearchNotAllowed()) searchMatch()
    if (searchValue.length === 0) {
      dispatch(accountDetailsActionCreator.accMatchingSearchDataReset());
      setMatchList(data?.match_list)
    }
  }, [searchValue]);

  const NAME_MATCHING_COLUMNS = [
    { name: i18n._('Company Name'), md: 3 },
    { name: i18n._('Method'), md: 2 },
    { name: i18n._('Confidence'), md: 2 },
    { name: i18n._('Match Selected'), md: 3 },
    { name: '', md: 2 },
  ]

  return (
    <React.Fragment>
      <Dialog
        PaperProps={{ classes: { root: classes.dialogBox } }}
        open={props.open}
        onClose={props.handleDialogClose}
        fullWidth={true}
        aria-labelledby="responsive-dialog-title"
      >
        <div className={classes.dialogTitle} >
          {props.source + i18n._(' Manual Matching')}
        </div>
        {loading ? <Loader /> : null}
        {data && (
          <DialogContent color="primary" className={classes.dialogContainer} >
            <Grid container className={classes.headerContainer} spacing={1}>
              {NAME_MATCHING_COLUMNS.map((column: any, i: number) => (
                <Grid item md={column.md}>
                  <Typography key={i} variant='body2'>{column.name}</Typography>
                </Grid>
              ))}
            </Grid>
            <Divider className={classes.divider} variant="middle" />
            <Grid container className={classes.dataContainer} spacing={1} >
              <Grid item md={3}>
                <Typography variant='body2'
                  className={classes.dataValue}
                  title={data.account_name}>
                  {data.account_name}
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography variant='body2'>{data.lei_match_type ? data.lei_match_type : 'N/A'}</Typography>
              </Grid>
              <Grid item md={2}>
                <Typography variant='body2'>{data.lei_confidence_score ? data.lei_confidence_score : 'N/A'}</Typography>
              </Grid>
              <Grid item md={3}>
                <Typography variant='body2'
                  className={classes.dataValue}
                  title={data.match_selected ? data.match_selected : 'N/A'}>
                  {data.match_selected ? data.match_selected : 'N/A'}
                </Typography>
              </Grid>
              <Grid item md={2}>
                {matchLoading ? <CircularProgress /> :
                  <Button color="primary" fullWidth className={classes.themeButton}
                    size="small" onClick={clearMatch}> {i18n._('Clear Match')}</Button>}
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item md={9}>
                <TextField
                  label={i18n._('Search companies by name')}
                  type="search"
                  fullWidth
                  helperText={ifSearchValue() && ifSearchNotAllowed() ? "More than 3 letters are required for search" : ''}
                  InputLabelProps={{
                    className: classes.addInputText,
                  }}
                  error={ifSearchValue() && ifSearchNotAllowed()}
                  value={searchValue}
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item md={9}>
                <SearchList matches={matches} list={matchList} handleMatchSelect={handleMatchSelect} />
              </Grid>
            </Grid>
          </DialogContent>)}
        {error ? <Error errorMessage={errorMessage} /> : null}
        <DialogActions>
          <Button variant="outlined" color="primary" size="small" className={classes.outlineButton}
            onClick={props.handleDialogClose} >
            {i18n._('Cancel')}
          </Button>
          {matchLoading ? <CircularProgress /> :
            <Button color="primary" fullWidth size="small" className={classes.themeButton}
              disabled={matches.length == 0} onClick={selectMatch}>
              {i18n._('Submit')}
            </Button>}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
};

export default NameMatchingDialog;