import React,
{ useState }
  from 'react';
import { Grid } from '@material-ui/core';
import ControlPanel from './ControlPanel';
import RevenuePlanGraph from './RevenuePlanGraph';
import PGIGraph from './PGIGraph';
import BuyingCenterEstimates from './BuyingCenterEstimates';
import { useStyles } from './style';

const VisualizationPanel: React.FC = () => {
  const classes = useStyles();

  const [period, setPeriod] = useState('calendar')
  const [year, setYear] = useState(2020)
  const [productIds, setProductIds] = useState<any>()
  const [allProducts, setAllProducts] = useState(true)

  const setGraphControlYear = (year: number) => {
    setYear(year)
  }

  const setGraphControlPeriod = (period: string) => {
    setPeriod(period)
  }

  const setGraphControlAllProducts = (value: any) => {
    setAllProducts(value)
  }

  const setGraphControlProductIds = (productIds: any) => {
    setProductIds(productIds.join(','))
  }

  return (
    <div className={classes.root} >
      <Grid container spacing={2}>
        <Grid item xs={4} md={4}>
          <ControlPanel period={period} year={year}
            productIds={productIds} allProducts={allProducts}
            setGraphControlYear={setGraphControlYear}
            setGraphControlPeriod={setGraphControlPeriod}
            setGraphControlAllProducts={setGraphControlAllProducts}
            setGraphControlProductIds={setGraphControlProductIds}
          />
        </Grid>
        <Grid item xs={8} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <RevenuePlanGraph period={period} year={year}
                allProducts={allProducts} productIds={productIds} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={7} md={7}>
              <BuyingCenterEstimates period={period} year={year}
                allProducts={allProducts} productIds={productIds} />
            </Grid>
            <Grid item xs={5}>
              <PGIGraph period={period} year={year}
                allProducts={allProducts} productIds={productIds} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default VisualizationPanel;