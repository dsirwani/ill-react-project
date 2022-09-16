import React, { useEffect } from 'react';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Avatar,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../utils/injectReducer';
import { ClientUsersState } from './type';
import { clientUsersActionCreator } from '../../../utils/configureActionCreators';
import { useI18n } from '../../../hooks/useI18n';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import HeaderTitleBar from '../../components/HeaderTitleBar/index';
import { useStyles } from './style';

interface TeamAccessManagementProps {}

const TeamAccessManagement: React.FC<TeamAccessManagementProps> = ({}) => {
  const classes = useStyles();
  const i18n = useI18n();
  const selectedClient: any = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{}')
    : '';

  const dispatch = useDispatch();

  const {
    loading,
    error,
    data,
    nextPageUrl,
    errorMessage,
  }: ClientUsersState = useSelector(
    (state: RootState) => state?.clientUsersList
  );

  const ACC_TEAM_HEADERS = [
    i18n._('Name'),
    i18n._('Email'),
    i18n._('Status'),
    i18n._('Last Platform Activity'),
    i18n._(''),
  ];

  const ACTIVE_ACTIONS = [i18n._('Deny'), i18n._('Suspend')];

  const PENDING_ACTIONS = [i18n._('Approve'), i18n._('Deny')];

  const DENIED_SUSPENDED_ACTIONS = [i18n._('Invite'), i18n._('Approve')];

  const ACTIONS = [
    i18n._('Invite'),
    i18n._('Approve'),
    i18n._('Deny'),
    i18n._('Suspend'),
  ];

  const COLORS = [
    '#FF5722',
    '#673AB7',
    '#67CDAA',
    '#419BF9',
    '#9140C1',
    '#4CAF50',
    '#E91E63',
  ];

  const [pageNo, setPageNo] = React.useState(0);
  const incrementPageNo = () => setPageNo((prevState) => prevState + 1);
  const scrollDivRef = React.useRef<HTMLInputElement>(null);
  useInfiniteScroll(scrollDivRef, dispatch, loading, incrementPageNo);

  /* const handleSelectedAccount = (
    event: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>,
    userId: string
  ) => {
    dispatch(
      userProfileActionCreator.getUserProfileRequest(
        selectedClient?.client_id ?? null,
        userId
      )
    );
  }; */

  useEffect(() => {
    dispatch(
      clientUsersActionCreator.clientUsersRequest({
        clientId: selectedClient?.client_id ?? 'ABC0001',
      })
    );
    return () => {
      dispatch(clientUsersActionCreator.clientUsersReset());
    };
  }, []);

  useEffect(() => {
    if (pageNo && nextPageUrl) {
      dispatch(
        clientUsersActionCreator.getMoreClientUsersRequest({
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

  const getActions = (userStatus: string): any => {
    let USER_ACTIONS = ACTIONS;
    switch (userStatus) {
      case 'Active':
        USER_ACTIONS = ACTIVE_ACTIONS;
        break;
      case 'Pending':
        USER_ACTIONS = PENDING_ACTIONS;
        break;
      case 'Suspend':
        USER_ACTIONS = DENIED_SUSPENDED_ACTIONS;
        break;
      case 'Denied':
        USER_ACTIONS = DENIED_SUSPENDED_ACTIONS;
        break;
      default:
        USER_ACTIONS = ACTIONS;
    }
    return USER_ACTIONS.map((action: string) => {
      return (
        <MenuItem className={classes.selectBox} key={action} value={action}>
          {action}
        </MenuItem>
      );
    });
  };

  return (
    <div className={classes.root}>
      <HeaderTitleBar headerTitle={i18n._('Team Access Management')} />
      {data?.length && (
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table size="small" aria-label="simple table">
            <TableHead>
              <TableRow className={classes.headerRow}>
                {ACC_TEAM_HEADERS.map((header: any, i: number) => {
                  return (
                    <TableCell className={classes.tableHeaderCellRoot} key={i}>
                      {header}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row: any, i: number) => (
                <TableRow className={classes.tableRow} key={row.user_id}>
                  <TableCell
                    scope="row"
                    /* onClick={(event) => {
                      handleSelectedAccount(event, row.user_id);
                    }}
                    style={{ cursor: 'pointer' }} */
                  >
                    <div className={classes.nameCell}>
                      {
                      row.profile_image_url ? (
                        <Avatar
                          alt="acc_logo"
                          className={classes.smallAvatar}
                          src={row.profile_image_url}
                        ></Avatar>
                      ) :
                      ifDefaultImg(row.default_logo_link) ? (
                        <Avatar
                          alt="acc_logo"
                          className={classes.smallAvatar}
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
                          className={classes.smallAvatar}
                          src={row.default_logo_link}
                        ></Avatar>
                      )}
                      <div className={classes.tableDataCell}>{row.name}</div>
                    </div>
                  </TableCell>
                  <TableCell scope="row" className={classes.tableDataCell}>
                    {row.email}
                  </TableCell>
                  <TableCell scope="row" className={classes.tableDataCell}>
                    {row.status}
                  </TableCell>
                  <TableCell scope="row" className={classes.tableDataCell}>
                    {row.last_sign_in ? row.last_sign_in : '-'}
                  </TableCell>
                  <TableCell scope="row" className={classes.tableDataCell}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="account-action-label">Action</InputLabel>
                      <Select
                        labelId="account-action-label"
                        id="account-action-select"
                        classes={{ icon: classes.ddArowCls }}
                      >
                        {getActions(row.status)}
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
  );
};

export default TeamAccessManagement;
