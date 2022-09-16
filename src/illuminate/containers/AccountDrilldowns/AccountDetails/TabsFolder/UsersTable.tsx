import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Paper,
  TableContainer,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Avatar,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';
import { RootState } from '../../../../../utils/injectReducer';
import { AccountUsersState } from '../type';
import { accountDetailsActionCreator } from '../../../../../utils/configureActionCreators';
import { useInfiniteScroll } from '../../../../../hooks/useInfiniteScroll';
import { useI18n } from '../../../../../hooks/useI18n';
import Loader from '../../../../components/Loader';
import Error from '../../../../components/Error';
import { useStyles } from '../style';

interface UsersTableProps {}

const UsersTable = (props: UsersTableProps) => {
  const classes = useStyles();
  const i18n = useI18n();

  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : '';

  const ACTIONS = [i18n._('Primary'), i18n._('Secondary')];

  const COLORS = [
    '#FF5722',
    '#673AB7',
    '#67CDAA',
    '#419BF9',
    '#9140C1',
    '#4CAF50',
    '#E91E63',
  ];

  const { accountId } = useParams();

  const dispatch = useDispatch();

  const {
    loading,
    error,
    data,
    nextPageUrl,
    errorMessage,
  }: AccountUsersState = useSelector(
    (state: RootState) => state.accountDetailsData?.accountUsersData
  );

  const [pageNo, setPageNo] = React.useState(0);
  const incrementPageNo = () => setPageNo((prevState) => prevState + 1);
  const scrollDivRef = React.useRef<HTMLInputElement>(null);
  useInfiniteScroll(scrollDivRef, dispatch, loading, incrementPageNo);

  useEffect(() => {
    dispatch(
      accountDetailsActionCreator.accountUsersRequest({
        account_id: accountId,
        clientId,
      })
    );
    return () => {
      dispatch(accountDetailsActionCreator.accountUsersReset());
    };
  }, []);

  useEffect(() => {
    if (pageNo && nextPageUrl) {
      dispatch(
        accountDetailsActionCreator.getMoreAccountUsersRequest({
          accountId,
          nextPageUrl,
        })
      );
    }
  }, [pageNo]);

  const ifDefaultImg = (link: string) => {
    if (link.split('/').pop() === 'genericUserProfile.png') {
      return true;
    }
    return false;
  };

  return (
    <React.Fragment>
      <TextField
        label={i18n._('Add People')}
        type="search"
        fullWidth
        inputProps={{ readOnly: true }}
        className={classes.addInput}
        InputLabelProps={{
          className: classes.addInputText,
        }}
      />
      <div className={classes.tableContainerWrapper}>
        {data?.length && (
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableBody>
                {data.map((row: any, i: number) => (
                  <TableRow key={row.user_id} className={classes.userTableRow}>
                    <TableCell scope="row">
                      <div className={classes.nameCell}>
                        {ifDefaultImg(row.default_logo_link) ? (
                          <Avatar
                            alt="acc_logo"
                            className={classes.userAvatar}
                            style={{
                              backgroundColor:
                                COLORS[Math.floor(Math.random() * 7)],
                              color: '#FFF',
                            }}
                          >
                            {row.name.slice()[0].toUpperCase()}
                          </Avatar>
                        ) : (
                          <Avatar
                            alt="acc_logo"
                            className={classes.userAvatar}
                            src={row.default_logo_link}
                          ></Avatar>
                        )}
                        <div>
                          <div className={classes.userName}>{row.name}</div>
                          <div className={classes.useremail}> {row.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell scope="row">
                      <FormControl className={classes.formControl}>
                        {/* <InputLabel id="users-action-label">Action</InputLabel> */}
                        <Select
                          labelId="users-action-label"
                          id="users-action-select"
                          value={'Primary'}
                          className={classes.selectedItem}
                          // onChange={handleYearChange}
                          classes={{ icon: classes.ddArowCls }}
                        >
                          {ACTIONS.map((action: string) => {
                            return (
                              <MenuItem
                                className={classes.selectBox}
                                key={action}
                                value={action}
                              >
                                {action}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {error ? <Error errorMessage={errorMessage} /> : null}
        <div
          id="scrollDetectDiv"
          ref={scrollDivRef}
          style={{ border: '1px solid #5850EC', margin: '10px 50px' }}
        />
        {loading ? <Loader /> : null}
      </div>
    </React.Fragment>
  );
};

export default UsersTable;
