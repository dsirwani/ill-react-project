import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Card,
  CardHeader,
  Divider,
  Box
} from '@material-ui/core';
import { RootState } from '../../../../../utils/injectReducer';
import { BCEstimatesState } from '../type';
import Loader from '../../../../components/Loader';
import Error from '../../../../components/Error';
import { visualizationActionCreator } from '../../../../../utils/configureActionCreators';
import { convertCommaSeparatedStrToInt } from '../../../../../utils/miscUtils';
import { useI18n } from '../../../../../hooks/useI18n';
import { useStyles } from './style';

interface BuyingCenterEstimatesProps {
  period: string,
  year: number,
  allProducts: boolean,
  productIds: any,
}

const BuyingCenterEstimates = (props: BuyingCenterEstimatesProps) => {
  const classes = useStyles();
  const i18n = useI18n();

  const { accountId } = useParams();

  const { period, year, allProducts, productIds } = props

  const dispatch = useDispatch();

  const { loading, error, data, errorMessage }: BCEstimatesState = useSelector((state: RootState) => state.visualizationData?.bcEstimatesData);

  const HEADER_ROW = [i18n._('Products'), i18n._('Penetration'), i18n._('Penetration Analysis')]

  useEffect(() => {
    dispatch(visualizationActionCreator.BCEstimatesRequest(
      {
        period: period, year: year, account_id: accountId,
        product_ids: productIds, all_products: allProducts
      }
    ));
    return () => {
      dispatch(visualizationActionCreator.BCEstimatesReset())
    }
  }, [period, year, productIds, allProducts])

  return (
    <Card
      className={classes.root}
    >
      <CardHeader
        title={i18n._('Buying Center Estimates')}
      />
      <Divider />
      {loading ? <Loader /> : null}
      {data?.summary?.length && data.items?.length && (
        <Box className={classes.tableContainerWrapper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    {i18n._('Buying Center Estimates')}
                  </TableCell>
                  <TableCell>
                    {data.summary[2].value + '%'}
                  </TableCell>
                  <TableCell>
                  </TableCell>
                </TableRow>
                <TableRow>
                  {HEADER_ROW.map((header: string) => {
                    return <TableCell key={header} >
                      {header}
                    </TableCell>
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.items.map((row: any, index: number) => (
                  <TableRow className={classes.tableRow} key={row.product_id}>
                    <TableCell align="left">{row.product}</TableCell>
                    <TableCell align="left">{row.columns[2].value + '%'}</TableCell>
                    <TableCell align="left">
                      <div title={'Plan: ' + row.columns[0].value} className={classes.barSection}>
                        <span>Plan</span>
                        <progress className={classes.progressBarPlan} max={Math.max(convertCommaSeparatedStrToInt(data.summary[0].value), convertCommaSeparatedStrToInt(data.summary[1].value))} value={convertCommaSeparatedStrToInt(row.columns[0].value)}></progress>
                      </div>
                      <div title={'Total: ' + row.columns[1].value} className={classes.barSection}>
                        <span>Total</span>
                        <progress className={convertCommaSeparatedStrToInt(row.columns[1].value) > Math.max(convertCommaSeparatedStrToInt(data.summary[0].value), convertCommaSeparatedStrToInt(data.summary[1].value)) ? classes.progressBarTotalPositive : classes.progressBarTotalNegative} max={Math.max(convertCommaSeparatedStrToInt(data.summary[0].value), convertCommaSeparatedStrToInt(data.summary[1].value))} value={convertCommaSeparatedStrToInt(row.columns[1].value)}></progress>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </Box >
      )}
      {error ? <Error errorMessage={errorMessage} /> : null}
    </Card>

  )
};

export default BuyingCenterEstimates;