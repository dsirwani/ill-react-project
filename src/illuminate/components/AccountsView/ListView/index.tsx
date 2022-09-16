import React, { Fragment } from 'react';
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
//import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
//import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './style';
import { EnhancedTableHead } from '../../TableHeader';
import {
  // ITableHeader,
  IOrderBy
} from '../../../../types/ITableHeader';
import { IAccountsView } from '../../../../types/IAccountsView';
import AccountRowDetails from './AccountRowDetails';
import SubsidiaryAccRowDetails from './SubsidiaryAccRowDetails';

interface IAccountsListView extends IAccountsView {
  sortBy: string,
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  orderBy: IOrderBy;
  setOrderBy: React.Dispatch<React.SetStateAction<IOrderBy>>;
  headerSecondLine: any,
}

const AccountListView: React.FC<IAccountsListView> = ({
  accountListData,
  handleSelectedAccount,
  handleSubsidiaryDblClick,
  sortBy, setSortBy, orderBy, setOrderBy,
  headerSecondLine
}) => {
  const classes = useStyles();

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
    const isAsc = sortBy === property && orderBy === 'asc';
    setOrderBy(isAsc ? 'desc' : 'asc');
    setSortBy(property);
  };

  const getNumberOfColumns = () => {
    const accountData: any = accountListData.filter((row: any, index: number) => (row.type === 'account'));
    if (accountData.length > 0 && accountData[0].data && accountData[0].data.columns) {
      return accountData[0].data.columns.length;
    }
    return 0;
  };

  return (
    <div className={classes.root} style={{ overflow: 'auto' }}>
      <Paper className={classes.paper}>
        <TableContainer className={classes.container}>
          <Table
            stickyHeader
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              headCells={headerSecondLine}
              orderBy={orderBy}
              sortBy={sortBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {accountListData.map((row: any, index: number) => {
                return (
                  <Fragment key={index}>
                    {
                      row?.type === 'account' ?
                        <AccountRowDetails
                          account={row.data}
                          key={row?.data?.account_id + '-' + index}
                          classes={classes}
                          handleSelectedAccount={handleSelectedAccount}
                        />
                        :
                        <SubsidiaryAccRowDetails
                          client={row.data}
                          key={row?.data?.client_id + '-' + index}
                          classes={classes}
                          handleSubsidiaryDblClick={handleSubsidiaryDblClick}
                          noOfColumns={getNumberOfColumns()}
                        />
                    }
                  </Fragment>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default AccountListView;
