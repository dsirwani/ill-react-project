import React from 'react';
import { TableRow, TableCell, Avatar, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { useI18n } from '../../../../../hooks/useI18n';

interface IAccountRowDetails {
  account: any;
  classes: any;
  handleSelectedAccount: any;
};

const AccountRowDetails: React.FC<IAccountRowDetails> = ({ account, classes, handleSelectedAccount }) => {

  const labelId = `enhanced-table-${account.account_id}`;
  const i18n = useI18n();

  return (
    <TableRow
      className={classes.tableRow}
      hover
      tabIndex={-1}
      key={account.account_id}
    >
      <TableCell
        classes={{ root: classes.tableCellRoot }}
        component="th"
        className={classes.accNameCell}
        id={labelId}
        scope="row"
        onClick={(event) => {
          if (account.application_status === 'A') {
            handleSelectedAccount(event, account.account_id, account.account_name, account.logo_link);
          }
        }}
      >
        <div className={classes.thumbnailIcon}>
          <Avatar alt={account.account_name} src={account.logo_link} />
          <div>&nbsp; {account.account_name}</div>
        </div>
      </TableCell>
      {account.application_status === 'A' ? (
        <>
          {account?.columns?.map((value: any, id: number) => (
            <TableCell
              key={id}
              // align="right"
              classes={{ root: clsx(classes.tableCellRoot, classes.valuesFontSize) }}
            >{value.value}</TableCell>
          ))}
        </>
      ) : account.application_status === 'P' ? (
        <>
          <TableCell
            align="left"
            colSpan={5}
            classes={{ root: classes.tableCellRoot }}
          >
            <Typography variant="h6">
              {i18n._('Application Pending')}
            </Typography>
            <Typography>{i18n._('Waiting for approval')}</Typography>
          </TableCell>
        </>
      ) : account.application_status === 'D' ? (
        <>
          <TableCell
            align="left"
            colSpan={5}
            classes={{ root: classes.tableCellRoot }}
          >
            <div>
              <Typography variant="h6">
                {i18n._('Application Denied')}
              </Typography>
            </div>
          </TableCell>
        </>
      ) : account.application_status === null ? (
        <>
          <TableCell
            align="left"
            colSpan={5}
            classes={{ root: classes.tableCellRoot }}
          >
            <div>
              <Typography variant="h6">
                {i18n._('Apply for Membership')}
              </Typography>
            </div>
          </TableCell>
        </>
      ) : null
      }
    </TableRow>
  );
};

export default AccountRowDetails;