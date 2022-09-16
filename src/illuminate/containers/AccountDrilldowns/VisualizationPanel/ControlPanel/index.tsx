import React from 'react';
import { FormControl, TextField, Divider, CardContent, CardHeader, Card } from '@material-ui/core';
import { useI18n } from '../../../../../hooks/useI18n';
import ProductCategoryFilter from './productCategoryFilter';
import { useStyles } from './style';

interface ControlPanelProps {
  year: number,
  period: string,
  productIds: any,
  allProducts: boolean,
  setGraphControlYear: (year: number) => any;
  setGraphControlPeriod: (period: string) => any;
  setGraphControlAllProducts: (event: any) => any;
  setGraphControlProductIds: (productIds: any) => any;
}

const ControlPanel = (props: ControlPanelProps) => {
  const classes = useStyles();
  const { period, year, allProducts, productIds } = props;
  const i18n = useI18n();

  const YEARS = [2020, 2019, 2018]
  const PERIODS = [
    { value: 'calendar', caption: i18n._('Calendar') },
    { value: 'fiscal', caption: i18n._('Fiscal') },
    { value: 'rolling-12', caption: i18n._('Rolling 12 months') },
    { value: 'rolling-24', caption: i18n._('Rolling 24 months') },
    { value: 'rolling-36', caption: i18n._('Rolling 36 months') }
  ]

  const handleYearChange = (event: any) => {
    props.setGraphControlYear(event.target.value)
  };

  const handlePeriodChange = (event: any) => {
    let period: string = event.target.value
    props.setGraphControlPeriod(period)
  };

  const handleAllProductsChange = (event: any) => {
    props.setGraphControlAllProducts(event)
  }

  const handleProductsChange = (products: any) => {
    props.setGraphControlProductIds(products)
  }

  const ifRollingPeriod = (period: string) => {
    return period === 'rolling-12' || period === 'rolling-24' || period === 'rolling-36';
  }

  return (
    <Card
      className={classes.root}
    >
      <CardHeader
        title={i18n._('Graph Controls')}
      />
      <Divider />
      <CardContent>
        <div className={classes.graphRange}>
          <FormControl required className={`${classes.formControl} ${classes.periodInput}`}>
            <TextField
              label="Range"
              name="period"
              onChange={handlePeriodChange}
              select
              SelectProps={{ native: true }}
              value={period}
              variant="outlined"
            >
              {PERIODS.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.caption}
                </option>
              ))}
            </TextField>
          </FormControl>
          <FormControl required disabled={ifRollingPeriod(period)} className={`${classes.formControl} ${classes.yearInput}`}>
            <TextField
              label="Year"
              name="year"
              onChange={handleYearChange}
              select
              SelectProps={{ native: true }}
              value={year}
              variant="outlined"
            >
              {YEARS.map((year) => (
                <option
                  key={year}
                  value={year}
                  disabled={ifRollingPeriod(period)}
                >
                  {year}
                </option>
              ))}
            </TextField>
          </FormControl>
        </div>
        <ProductCategoryFilter handleProductsChange={handleProductsChange}
          handleAllProductsChange={handleAllProductsChange}
          allProducts={allProducts} 
          productIds={productIds}
          />
        </CardContent>
    </Card >
  );
};

export default ControlPanel;
