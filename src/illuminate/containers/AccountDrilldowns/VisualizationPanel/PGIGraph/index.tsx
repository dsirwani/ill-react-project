import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import ReactSpeedometer from "react-d3-speedometer";
import {
  Card,
  Typography,
  CardHeader,
  Divider,
  useTheme, Box, 
} from '@material-ui/core';
import { RootState } from '../../../../../utils/injectReducer';
import { RevenuePlanState } from '../type';
import { visualizationActionCreator } from '../../../../../utils/configureActionCreators';
import Loader from '../../../../components/Loader';
import Error from '../../../../components/Error';
import { useI18n } from '../../../../../hooks/useI18n';
import { useStyles } from './style';
import { Theme } from '../../../../../theme/index';

interface PGIGraphProps {
  period: string,
  year: number,
  allProducts: boolean,
  productIds: any,
}

const PGIGraph = (props: PGIGraphProps) => {
  const classes = useStyles();
  const i18n = useI18n();
  const theme: Theme = useTheme();

  const [graphLoaded, setGraphLoaded] = useState(false)

  const { accountId } = useParams();

  const { period, year, allProducts, productIds } = props

  const dispatch = useDispatch();

  const { loading, error, data, errorMessage }: RevenuePlanState = useSelector((state: RootState) => state.visualizationData?.pgiGraphData);

  useEffect(() => {
    dispatch(visualizationActionCreator.PGIGraphRequest(
      {
        period: period, year: year, account_id: accountId,
        product_ids: productIds, all_products: allProducts
      }
    ));

    return () => {
      setGraphLoaded(false)
      dispatch(visualizationActionCreator.PGIGraphReset())
    }
  }, [period, year, productIds, allProducts])

  useEffect(
    () => {
      setGraphLoaded(true)
    }, [data])

  const getStringValue: any = (value: number) => {
    return `${value}`
  }

  const plotPGIValue: any = (value: number) => {
    if (value < 0) return 0;
    else if (value > 2) return 2;
    return value;
  }

  return (
    <Card
      className={classes.root}
    >
      <CardHeader
        title={i18n._('PGI')}
      />
      <Divider />
      {loading ? <Loader /> : null}
      {data && graphLoaded && <div className={classes.graphSection}>
      <Box >
        <ReactSpeedometer
          width={210}
          height={150}
          minValue={0}
          maxValue={2}
          value={plotPGIValue(data.value)}
          segments={10}
          segmentColors={[
            "#A02035",
            "#B7233C",
            "#ED2B42",
            "#04BC5B",
            "#04BC5B",
            "#04BC5B",
            "#04BC5B",
            "#FFD150",
            "#EFA226",
            "#F29525"
          ]}
          currentValueText={getStringValue(data.value)}
          needleColor="red"
          needleHeightRatio={0.55}
          textColor={theme.palette.text.primary}
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
          ringWidth={35}
          maxSegmentLabels={0}
        />
        </Box>
        <Divider />
        <Typography className={classes.graphLabel} variant="h6">{data.label}</Typography>
      </div>}
      {error && <Error errorMessage={errorMessage} />}
    </Card>
  );
};

export default PGIGraph;