
import React, { useEffect } from 'react';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../../utils/injectReducer';
import { AccountDataState } from './type';
import { accountDataActionCreator } from '../../../../utils/configureActionCreators';
import { useInfiniteScroll } from '../../../../hooks/useInfiniteScroll';
import Loader from '../../../components/Loader';
import Error from '../../../components/Error';
import { useI18n } from '../../../../hooks/useI18n';
import { useStyles } from './style';

interface AccountDataTableProps {
  dataType: string,
  year: string,
  month: string,
}

const AccountDataTable = (props: AccountDataTableProps) => {
  const classes = useStyles();
  const i18n = useI18n();

  const { accountId } = useParams();
  const dispatch = useDispatch();

  const { dataType, year, month } = props

  const {
    loading,
    error,
    data,
    nextPageUrl,
    errorMessage,
  }: AccountDataState = useSelector(
    (state: RootState) => state.accountData?.accountData
  );

  const [pageNo, setPageNo] = React.useState(0);
  const incrementPageNo = () => setPageNo((prevState) => prevState + 1);
  const scrollDivRef = React.useRef<HTMLInputElement>(null);
  useInfiniteScroll(scrollDivRef, dispatch, loading, incrementPageNo);

  useEffect(() => {
    dispatch(
      accountDataActionCreator.accountDataRequest({
        account_id: accountId,
        data_type: dataType,
        date: `${year}-${month}`,
      })
    );
    return () => {
      dispatch(accountDataActionCreator.accountDataReset());
    };
  }, [dataType, year, month]);

  useEffect(() => {
    if (pageNo && nextPageUrl) {
      dispatch(
        accountDataActionCreator.getMoreAccountDataRequest({
          accountId,
          nextPageUrl,
        })
      );
    }
  }, [pageNo]);

  const ACCOUNT_TABLE_HEADERS = [
    i18n._('Date'),
    i18n._('Product Identifier'),
    i18n._('CSV Product Identifier'),
    i18n._('Products'),
    i18n._('Contained In'),
    `${i18n._('Value')}($)`,
  ]

  return (
    <React.Fragment>
      <div className={classes.tableContainerWrapper}>
        {data &&
          <TableContainer  className={classes.tableContainer} component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow className={classes.headerRow}>
                  {ACCOUNT_TABLE_HEADERS.map((header: any, i: number) => {
                    return <TableCell className={classes.tableHeaderCellRoot} key={i}>{header}</TableCell>
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {data && data.map((row: any, i: number) => (
                  <TableRow key={i} className={classes.tableRow}>
                    <TableCell className={classes.tableDataCell} align="left" width="9%">{row.date}</TableCell>
                    <TableCell className={classes.tableDataCell} align="left">{row.product_identifier}</TableCell>
                    <TableCell className={classes.tableDataCell} align="left">{row.csv_product_identifier}</TableCell>
                    <TableCell className={classes.tableDataCell} align="left">{row.product}</TableCell>
                    <TableCell className={classes.tableDataCell} align="left">{row.contained_in}</TableCell>
                    <TableCell className={classes.tableDataCell} align="left">{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        }
        {error ? <Error errorMessage={errorMessage} /> : null}
        <div
          id="scrollDetectDiv"
          ref={scrollDivRef}
          style={{ border: '1px solid #5850EC', margin: '10px 50px' }}
        />
        {loading ? <Loader /> : null}
      </div>
    </React.Fragment>
  )
};

export default AccountDataTable;