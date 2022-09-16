
import React from 'react';
import { useSelector } from 'react-redux';
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { RootState } from '../../../../utils/injectReducer';
import { AccMatchingSearchDataState } from './type';
import Loader from '../../../components/Loader';
import Error from '../../../components/Error';
import { useStyles } from './style';

interface SearchListProps {
  list: any;
  matches: any;
  handleMatchSelect: (data: any) => any;
}

const SearchList = (props: SearchListProps) => {
  const classes = useStyles();

  const {
    loading,
    error,
  }: AccMatchingSearchDataState = useSelector(
    (state: RootState) => state.accountDetailsData?.accMatchingSearchData
  );

  const handleChange = (event: any, selectedSearch: any) => {
    props.handleMatchSelect(selectedSearch?.id);
  };

  return (
    <React.Fragment>
      <div className={classes.tableContainerWrapper}>
        {loading ? <Loader /> : null}
        {(!error && props.list?.length > 0) && (
          <TableContainer >
            <Table size="small" aria-label="a dense table">
              <TableBody>
                {props.list.map((row: any, i: number) => (
                  <TableRow
                    classes={{ root: classes.searchRow }}
                    onClick={(evnt) => { handleChange(evnt, row) }} key={row.id}
                    className={row?.id === props.matches ? classes.selectedRow : ''}>
                    <TableCell scope="row" className={classes.searchCell}>
                      {row.company_name}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {error || props.list?.length == 0 ? <Error errorMessage={'No options'} /> : null}
      </div>
    </React.Fragment>
  )
};

export default SearchList;