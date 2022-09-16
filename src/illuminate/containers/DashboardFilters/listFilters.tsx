import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { RootState } from '../../../utils/injectReducer';
import { FilterListState, SaveFilterState } from './type';
import { PreConfiguredTemplatesState } from '../DashboardTemplates/type';
import { dashboardFiltersActionCreator } from '../../../utils/configureActionCreators';
import { getEmail, isSuperAdmin } from '../../../utils/localStorageUtils';
import { useI18n } from '../../../hooks/useI18n';
import LoaderOverScreen from '../../components/LoaderOverScreen';
import Error from '../../components/Error';
import { useStyles } from './style';

interface ListFiltersProps {
  openListFilter: boolean;
  handleListClose: () => any;
  loggedInUserDetails: any;
  handleFilterApply: (selectedFilter: any) => void;
  selectedFilter: any;
  setSelectedFilter: (selectedFilter: any) => void;
  clearAllFilters: () => void;
}

const ListFilters: React.FC<ListFiltersProps> = ({
  openListFilter,
  handleListClose,
  loggedInUserDetails,
  handleFilterApply,
  selectedFilter,
  setSelectedFilter,
  clearAllFilters
}) => {
  const classes = useStyles();
  const i18n = useI18n();
  const userEmailAddr = getEmail();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [deleteFilter, setDeleteFilter] = useState<any>();

  const superAdmin = isSuperAdmin();
  const user = superAdmin ? userEmailAddr : loggedInUserDetails?.user_data?.user_id ?? "";

  const handleDelFilterOpen = (event: any, selectedFilter: any) => {
    setOpen(true);
    const deleteFilterObj = {
      "user": user,
      "filter_name": selectedFilter.filter_name,
      "filter_id": selectedFilter.filter_id
    }
    setDeleteFilter(deleteFilterObj)
  };

  const handleDelModalClose = () => {
    setOpen(false);
  };

  const {
    loading,
    error,
    data,
    errorMessage,
  }: FilterListState = useSelector(
    (state: RootState) => state.filterCriteriaData?.filterListData
  );

  const {
    data: deleteData,
  }: FilterListState = useSelector(
    (state: RootState) => state.filterCriteriaData?.filterDeleteData
  );

  const saveFilterState: SaveFilterState = useSelector(
    (state: RootState) => state.filterCriteriaData?.saveFilterData
  );

  const { defaultTemplate: template }: PreConfiguredTemplatesState = useSelector(
    (state: RootState) => state.dashboardTemplatesData?.pcTemplatesData
  );

  const handleChange = (event: any, selectedFilter: any) => {
    setSelectedFilter(selectedFilter);
  };

  const handleDelete = () => {
    if (saveFilterState.appliedFilterId == deleteFilter.filter_id) {
      clearAllFilters()
    }

    dispatch(dashboardFiltersActionCreator.filterDeleteRequest(deleteFilter));
    handleDelModalClose()
  };

  const setFilterApply = (evnt: any) => {
    evnt.preventDefault();
    handleFilterApply(selectedFilter)
    handleListClose();
  };

  useEffect(() => {
    if (openListFilter) {
      dispatch(dashboardFiltersActionCreator.filterListRequest({ user: user, template: template }));
    }
    return (() => {
      setSelectedFilter(null);
    })
  }, [openListFilter]);

  useEffect(() => {
    if (deleteData?.status == 'success') {
      dispatch(dashboardFiltersActionCreator.filterListRequest({ user: user, template: template }));
    }
  }, [deleteData]);

  return (
    <React.Fragment>
      <Dialog
        PaperProps={{ classes: { root: classes.ListFilterdialogBox } }}
        open={openListFilter}
        onClose={handleListClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{i18n._('Saved Filters')}</DialogTitle>
        {loading ? <LoaderOverScreen /> : null}
        {data?.items?.length && (
          <DialogContent color="primary" >
            <div className={classes.tableContainerWrapper}>
              <TableContainer className={classes.tableContainer}>
                <Table size="small" aria-label="a dense table">
                  <TableBody>
                    {data.items.map((row: any, i: number) => (
                      <TableRow
                        key={row.filter_id}
                        classes={{ root: classes.tableCellElement }}
                        className={row?.filter_id === selectedFilter?.filter_id ? classes.selectedRow : ''}
                      >
                        <TableCell onClick={(evnt) => { handleChange(evnt, row) }} scope="row" >
                          {row.filter_name}
                        </TableCell>
                        <TableCell
                          // onClick={(evnt) => { handleDelete(evnt, row) }}
                          onClick={(evnt) => { handleDelFilterOpen(evnt, row) }}
                          scope="row" >
                          <HighlightOffIcon />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </DialogContent>)
        }
        {error ? <Error errorMessage={errorMessage} /> : null}
        <DialogActions>
          <Button variant="outlined" color="primary" className={classes.outlineButton} onClick={handleListClose}>
            {i18n._('Cancel')}
          </Button>
          {selectedFilter && <Button variant="contained" color="primary" className={classes.themeButton} onClick={setFilterApply}>
            {i18n._('Apply Filter')}
          </Button>}
        </DialogActions>
      </Dialog>

      <Dialog
        PaperProps={{ classes: { root: classes.FilterDeleteDialogBox } }}
        open={open}
        onClose={handleDelModalClose}
        aria-labelledby="res-delete-dialog-title"
      >
        <DialogContent color="primary" >
          Confirm delete?
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="primary" className={classes.outlineButton} onClick={handleDelModalClose}>
            {i18n._('No')}
          </Button>
          <Button color="primary" className={classes.themeButton} onClick={handleDelete} >
            {i18n._('Yes')}
          </Button>
        </DialogActions>
      </Dialog>

    </React.Fragment>
  );
};

export default ListFilters;