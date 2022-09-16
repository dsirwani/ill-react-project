import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { Divider, CardContent, CardHeader, Card } from '@material-ui/core';
import GroupedBarGraph from '../../../../components/GroupedBarGraph';
import { RootState } from '../../../../../utils/injectReducer';
import { RevenuePlanState } from '../type';
import { visualizationActionCreator } from '../../../../../utils/configureActionCreators';
import Loader from '../../../../components/Loader';
import Error from '../../../../components/Error';
import { useI18n } from '../../../../../hooks/useI18n';
import { useStyles } from './style';

interface RevenuePlanGraphProps {
  period: string,
  year: number,
  allProducts: boolean,
  productIds: any,
}

const RevenuePlanGraph = (props: RevenuePlanGraphProps) => {
  const classes = useStyles();
  const [graphLoaded, setGraphLoaded] = useState(false)
  const i18n = useI18n();

  const { accountId } = useParams();

  const { period, year, allProducts, productIds } = props

  const getPeriod = () => {
    switch (period) {
      case 'rolling-24':
        return 870
      case 'rolling-36':
        return 1150
      default:
        return 580
    }
  }

  const dispatch = useDispatch();

  const { loading, error, data, errorMessage }: RevenuePlanState = useSelector((state: RootState) => state.visualizationData?.revenuePlanData);

  useEffect(() => {
    dispatch(visualizationActionCreator.revenuePlanRequest(
      {
        period: period, year: year, account_id: accountId,
        product_ids: productIds, all_products: allProducts
      }
    ));

    return () => {
      setGraphLoaded(false)
      dispatch(visualizationActionCreator.revenuePlanReset())
    }
  }, [period, year, productIds, allProducts])

  useEffect(
    () => {
      setGraphLoaded(true)
    }, [data])

  return (
    <Card
      className={classes.root}
    >
      <CardHeader
        title={i18n._('Revenue vs Plan')}
      />
      <Divider />
      <CardContent>
        {loading ? <Loader /> : null}
        {data && graphLoaded && <GroupedBarGraph width={getPeriod()} height={220} models={data} />}
        {error ? <Error errorMessage={errorMessage} /> : null}
      </CardContent>
    </Card>
  );
};

export default RevenuePlanGraph;