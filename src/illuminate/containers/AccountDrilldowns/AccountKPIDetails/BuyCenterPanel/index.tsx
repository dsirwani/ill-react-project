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
import clsx from 'clsx';
import LoaderOverScreen from '../../../../components/LoaderOverScreen/index';
import SubCategory from '../SubCategory';
import NotificationAlert from '../../../../components/NotificationAlert';
import { useI18n } from '../../../../../hooks/useI18n';
import {
  appActionCreator,
  prodCategoryActionCreator,
} from '../../../../../utils/configureActionCreators';
import { RootState } from '../../../../../utils/injectReducer';
import { ProductCategoryState } from '../type';
import { useStyles } from './style';

interface BuyCenterPanelProps {
  prodSummary: any;
  prodCategories: any;
  tabName: string;
}

const BuyCenterPanel: React.FC<BuyCenterPanelProps> = ({
  prodCategories,
  prodSummary,
  tabName,
}) => {
  const classes = useStyles({ noOfColumns: prodSummary?.length });
  const [switchCollapseFlag, setSwitchCollapseFlag] = React.useState({});
  const i18n = useI18n();
  const dispatch = useDispatch();
  const { accountId } = useParams();
  const { loading }: ProductCategoryState = useSelector(
    (state: RootState) => state.prodCategoryData?.prodData
  );

  const showErrorAlertProps: any = useSelector(
    (state: RootState): any => state?.app
  );

  const handleToggle = (
    level: number,
    productId: number,
    parentGrp: string | null = null,
    callAPI: boolean
  ) => {
    if (callAPI) {
      dispatch(
        prodCategoryActionCreator.prodSubCategoryRequest({
          productId: productId,
          account_id: accountId,
          tabName,
          level,
          parentGrp,
        })
      );
    } else {
      dispatch(
        prodCategoryActionCreator.prodCategoryRemove({
          productId: productId,
          parentGrp,
        })
      );
    }
  };

  const hideAlertError = () => {
    dispatch &&
      dispatch(
        appActionCreator.hideMessage({
          show: false,
          errorMsg: '',
          severity: '',
        })
      );
  };

  return (
    <div className={classes.root}>
      {showErrorAlertProps.show ? (
        <NotificationAlert
          {...showErrorAlertProps}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={3000}
          onClose={hideAlertError}
        />
      ) : null}
      {loading ? <LoaderOverScreen /> : null}
      {prodCategories?.length && prodSummary?.length && (
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow className={classes.tableTitleRow}>
                <TableCell className={classes.spaceCell} />
                <TableCell
                  classes={{
                    root: clsx(classes.tableHeaderCellRoot, classes.prodName),
                  }}
                >
                  {i18n._('PRODUCT CATEGORIES')}/{i18n._('BUYING CENTERS')}
                </TableCell>
                {prodSummary.map((row: any, index: number) => (
                  <TableCell
                    key={index}
                    align="right"
                    classes={{
                      root: clsx(classes.tableHeaderCellRoot, classes.catValue),
                    }}
                  >
                    <div className={classes.kpiType}>
                      {row.column &&
                        row.column[0].toUpperCase() + row.column.slice(1)}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.spaceCell} />
                <TableCell
                  classes={{
                    root: clsx(classes.tableTitleCellRoot, classes.prodName),
                  }}
                >
                  {i18n._('Buy Center')}
                </TableCell>
                {prodSummary.map((row: any, index: number) => (
                  <TableCell
                    key={index}
                    align="right"
                    classes={{
                      root: clsx(classes.tableTitleCellRoot, classes.catValue),
                    }}
                  >
                    {row.value}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <SubCategory
                prodSummaryColumns={prodSummary.length}
                key={`level-${0}-i`}
                toggleEntity={true}
                productId={0}
                tabName={tabName}
                level={0}
                subProdCategories={prodCategories}
                handleToggle={handleToggle}
                loading={loading}
                switchCollapseFlag={switchCollapseFlag}
                setSwitchCollapseFlag={setSwitchCollapseFlag}
              />
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default BuyCenterPanel;
