import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Collapse,
  IconButton,
} from '@material-ui/core';
import clsx from 'clsx';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Error from '../../../../components/Error';
import { useStyles } from './style';

interface SubCategoryProps {
  prodSummaryColumns: number;
  toggleEntity: boolean;
  productId: number;
  tabName: string;
  level: number;
  subProdCategories: any;
  handleToggle: any;
  loading: boolean;
  switchCollapseFlag: any;
  setSwitchCollapseFlag: any;
}

const SubCategory: React.FC<SubCategoryProps> = ({
  prodSummaryColumns,
  toggleEntity,
  productId,
  tabName,
  level,
  subProdCategories,
  handleToggle,
  loading,
  switchCollapseFlag,
  setSwitchCollapseFlag,
}) => {
  const classes = useStyles({ noOfColumns: prodSummaryColumns, level });
  const handleSubCatSelection = (
    level: number,
    subCatId: number,
    parentGrp: string,
    callAPI: boolean
  ) => {
    handleToggle(level, subCatId, parentGrp, callAPI);
  };

  const handleSubCategoryToggle = (
    level: number,
    productId: number,
    parentGrp: string,
    collapse: boolean
  ) => {
    let callAPI = false;
    if (!collapse) {
      setSwitchCollapseFlag({ ...switchCollapseFlag, [parentGrp]: false });
      callAPI = false;
    } else {
      setSwitchCollapseFlag({ ...switchCollapseFlag, [parentGrp]: true });
      callAPI = true;
    }
    handleToggle(level, productId, parentGrp, callAPI);
  };

  const getPadding = (): any => {
    if (level === 0) {
      return { padding: 0 };
    } else {
      return {
        paddingBottom: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingLeft: '1%',
      };
    }
  };

  return (
    <React.Fragment>
      <TableRow>
        <TableCell style={getPadding()} colSpan={prodSummaryColumns + 2}>
          {subProdCategories && (
            <Collapse in={toggleEntity} timeout="auto" unmountOnExit>
              <Table size="small">
                <TableBody>
                  {subProdCategories.length === 0 ? (
                    <React.Fragment key={`${level}-${productId}-error`}>
                      <TableRow
                        className={classes.subTableRow}
                        key={`no-data-${productId}`}
                      >
                        <Error errorMessage="No Data Available" />
                      </TableRow>
                    </React.Fragment>
                  ) : (
                    subProdCategories.map((row: any, idx: number) => {
                      return (
                        <React.Fragment key={`${level}-${idx}`}>
                          <TableRow
                            className={
                              level === 0
                                ? classes.tableRow
                                : classes.subTableRow
                            }
                            key={row.product_id}
                          >
                            <TableCell className={classes.spaceCell}>
                              {row.sub_category ? (
                                <IconButton
                                  className={classes.toggleIcon}
                                  onClick={() =>
                                    handleSubCategoryToggle(
                                      level + 1,
                                      row.product_id,
                                      row.parentGrp,
                                      row.collapse
                                    )
                                  }
                                  aria-label="expand row"
                                  size="small"
                                >
                                  {!row.collapse ? (
                                    <KeyboardArrowUpIcon />
                                  ) : (
                                    <KeyboardArrowDownIcon />
                                  )}
                                </IconButton>
                              ) : (
                                ''
                              )}
                            </TableCell>
                            <TableCell
                              scope="row"
                              className={
                                level === 0
                                  ? clsx(
                                      classes.tableDataCell,
                                      classes.prodName
                                    )
                                  : clsx(classes.subCatCell, classes.prodName)
                              }
                            >
                              {row.product}
                            </TableCell>
                            {row.kpi.map((r: any, idx: number) => (
                              <TableCell
                                key={idx}
                                scope="row"
                                className={
                                  level === 0
                                    ? clsx(
                                        classes.tableDataCell,
                                        classes.catValue
                                      )
                                    : clsx(classes.subCatCell, classes.catValue)
                                }
                                classes={{ sizeSmall: classes.cellSizeSmall }}
                                align="right"
                              >
                                {r.value}
                              </TableCell>
                            ))}
                          </TableRow>
                          {row.sub_category &&
                            switchCollapseFlag[row.parentGrp] && (
                              <SubCategory
                                key={`level-${level}-${idx}`}
                                prodSummaryColumns={prodSummaryColumns}
                                toggleEntity={switchCollapseFlag[row.parentGrp]}
                                productId={row.product_id}
                                tabName={tabName}
                                level={level + 1}
                                subProdCategories={row.subCategories}
                                handleToggle={(
                                  level: number,
                                  subCatId: number,
                                  parentGrp: string,
                                  callAPI: boolean
                                ) => {
                                  handleSubCatSelection(
                                    level,
                                    subCatId,
                                    parentGrp,
                                    callAPI
                                  );
                                }}
                                loading={loading}
                                switchCollapseFlag={switchCollapseFlag}
                                setSwitchCollapseFlag={setSwitchCollapseFlag}
                              />
                            )}
                        </React.Fragment>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </Collapse>
          )}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default SubCategory;
