import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Checkbox
} from '@material-ui/core';
import { RootState } from '../../../../../utils/injectReducer';
import { ProdCatFilterState } from '../type';
import Loader from '../../../../components/Loader';
import Error from '../../../../components/Error';
import { useInfiniteScroll } from '../../../../../hooks/useInfiniteScroll';
import { addToArray, removeItemFromArray } from '../../../../../utils/miscUtils';
import { visualizationActionCreator } from '../../../../../utils/configureActionCreators';
import { useStyles } from './style';

interface ProductCategoryFilterProps {
  allProducts: boolean,
  productIds: any,
  handleAllProductsChange: (event: any) => any;
  handleProductsChange: (products: any) => any;
}

const ProductCategoryFilter = (props: ProductCategoryFilterProps) => {
  const classes = useStyles();
  // const [toggleEntity, setToggleEntity] = React.useState(-1);

  const [selectedRows, setSelectedRows] = React.useState<Array<number>>([]);
  const { allProducts } = props;

  // const handleToggle = (i: number, product: string) => {
  //   setToggleEntity(toggleEntity === i ? -1 : i);
  //   // setProduct(product);
  // };

  const selectAllRows = (event: any) => {
    if (selectedRows.length) {
      props.handleAllProductsChange(event.target.checked);
      if (event.target.checked == true) {
        setSelectedRows([])
      }
    }
  };

  const selectRow = (event: any, key: number) => {
    let productList: any = [...selectedRows];
    let updatedRows: any;
    if (event.target.checked) {
      props.handleAllProductsChange(false);
      updatedRows = addToArray(key, productList);
    } else {
      updatedRows = removeItemFromArray(key, productList);
    }
    if ((updatedRows.length === 0)) {
      props.handleAllProductsChange(true);
    }
    setSelectedRows(updatedRows)
    props.handleProductsChange(updatedRows)
  }

  const dispatch = useDispatch();
  const { accountId } = useParams();

  const {
    loading,
    error,
    prodCategories,
    errorMessage,
    nextPageUrl,
  }: ProdCatFilterState = useSelector(
    (state: RootState) => state.visualizationData?.prodCatFilterData
  );

  //Scroll functionality
  const [pageNo, setPageNo] = React.useState(0);
  const incrementPageNo = () => setPageNo((prevState) => prevState + 1);
  const scrollDivRef = React.useRef<HTMLInputElement>(null);
  useInfiniteScroll(scrollDivRef, dispatch, loading, incrementPageNo);

  React.useEffect((): void => {
    dispatch(
      visualizationActionCreator.prodCatFilterRequest({ accountId })
    );
  }, []);

  React.useEffect(() => {
    if (pageNo && nextPageUrl) {
      dispatch(
        visualizationActionCreator.getMoreProdCatFilterRequest({
          nextPageUrl,
        })
      );
    }
  }, [pageNo]);

  return (
    <div className={classes.tableContainerWrapper}>
      <Typography variant='subtitle1' className={classes.productHeader}>
        Buying Centers
      </Typography>
      {prodCategories?.length && (
        <List dense={true} disablePadding>
          <ListItem className={classes.item} dense={true} disableGutters>
            <Checkbox
              className={classes.prodCheckBox}
              // color="default"
              checked={allProducts}
              onChange={selectAllRows}
              size="small"
            />
             <ListItemText
                primary="Select All"
              />
          </ListItem>
          {prodCategories.map((row: any, i: number) => (
            <ListItem className={classes.item} dense={true} disableGutters key={i}>
              <Checkbox
                className={classes.prodCheckBox}
                // color="default"
                checked={selectedRows.indexOf(row.product_id) !== -1 ? true : false}
                onChange={(event) => selectRow(event, row.product_id)}
                size="small"
              />
              <ListItemText
                primary={row.product}
              />
            </ListItem>
          ))}
          </List>
      )}
      
      {error ? <Error errorMessage={errorMessage} /> : null}
      <div
        id="scrollDetectDiv"
        ref={scrollDivRef}
        style={{ border: '1px solid #5850EC', margin: '10px 50px' }}
      />
      {loading ? <Loader /> : null}
    </div >
  )
};

export default ProductCategoryFilter;