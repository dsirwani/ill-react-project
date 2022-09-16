
import React from 'react';
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
import { G2KFinancialsState } from './type';
import { g2kDataActionCreator } from '../../../../utils/configureActionCreators';
// import { useI18n } from '../../../../hooks/useI18n';
import Loader from '../../../components/Loader';
import Error from '../../../components/Error';
import { useStyles } from './style';

interface FinancialDetailsProps {
  tabValue: number,
  reportType: string,
  reportFrequency: string,
}

const FinancialDetails: React.FC<FinancialDetailsProps> = ({
  tabValue,
  reportType,
  reportFrequency,
}) => {
  const classes = useStyles();
  // const i18n = useI18n();

  const { accountId } = useParams();

  const dispatch = useDispatch();
  const {
    loading,
    error,
    data,
    errorMessage,
  }: G2KFinancialsState = useSelector(
    (state: RootState) => state.g2kData?.g2kFinancialsData
  );

  React.useEffect(() => {
    dispatch(
      g2kDataActionCreator.g2kFinancialsRequest({
        account_id: accountId,
        report_type: reportType,
        reporting_frequency: reportFrequency,
      })
    );
    return () => {
      dispatch(g2kDataActionCreator.g2kFinancialsReset());
    };
  }, [reportType, reportFrequency]);

  return (
    <div>
      {loading ? <Loader /> : null}
      {data && (
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              {data && data.header.map((row: any, i: number) => (
                <TableRow key={i} >
                  {
                    Object.keys(row).map((k: any, j: number) => (
                      j == 0 ?
                        <TableCell align="left">{row[`col${j}`]}</TableCell> :
                        <TableCell align="right">{row[`col${j}`]}</TableCell>
                    ))
                  }
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {data && data.items.map((row: any, i: number) => (
                <TableRow key={i} className={classes.featureRow}>
                  {
                    Object.keys(row).map((k: any, j: number) => (
                      row[`col${j}`] === 'Blank line' ? <TableCell/> :
                        j == 0 ?
                          <TableCell className={classes.featureCell} align="left">{row[`col${j}`]}</TableCell> :
                          <TableCell align="right">{row[`col${j}`]}</TableCell>
                    ))
                  }
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )
      }
      {error ? <Error errorMessage={errorMessage} /> : null}
    </div>

  )
};

export default FinancialDetails;