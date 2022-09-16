import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Divider,
} from '@material-ui/core';
import { RootState } from '../../../utils/injectReducer';
import AccountFilterBar from '../../components/AccountFilterBar';
import FilterCriteria from './filterCriteria';
import FilterAttributes from './filterAttributes';
import ListFilters from './listFilters';
import { useI18n } from '../../../hooks/useI18n';
import { usePrevious } from '../../../hooks/usePrevious';
import { useStyles } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { dashboardFiltersActionCreator } from '../../../utils/configureActionCreators';
import { SaveFilterState } from './type';
import { PreConfiguredTemplatesState } from '../DashboardTemplates/type';
import { IFilterItem } from '../../../types/IFilterItem';
import { getEmail, isSuperAdmin } from '../../../utils/localStorageUtils';
import { IOrderBy } from '../../../types/ITableHeader';

interface DashboardFiltersProps {
  selectedFilter: any;
  setSelectedFilter: (selectedFilter: any) => void;
  //setApplyFilterId: Dispatch<SetStateAction<string>>;
  orderBy: IOrderBy;
  sortBy: string;
}

const DashboardFilters: React.FC<DashboardFiltersProps> = ({
  //setApplyFilterId,
  selectedFilter,
  setSelectedFilter,
  orderBy,
  sortBy
}) => {
  const classes = useStyles();
  const i18n = useI18n();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openListFilter, setOpenListFilter] = useState(false);
  const [condition, setCondition] = useState('and')
  const [criteria, setCriteria] = useState('')
  const [operator, setOperator] = useState('');
  const [value, setFilterAttribute] = useState('')

  const [saveFilterDialog, setSaveFilterDialog] = useState(false);

  const selectedFilterOnRefresh = localStorage.getItem('selectedFilter')
    ? JSON.parse(localStorage.getItem('selectedFilter') || '{ filter_id: null }')
    : (localStorage.getItem('appliedSavedFilter')
      ? JSON.parse(localStorage.getItem('appliedSavedFilter') || '{ filter_id: null }') : { filter_id: null });

  const userEmailAddr = getEmail();

  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{"client_id": null}')
    : { client_id: null };

  const superAdmin = isSuperAdmin();

  const addIdAttrForFilterCriteria = (filters: IFilterItem[]) => (filters.map((filter: IFilterItem, idx: number) => ({ ...filter, id: idx })));

  const initFilterCriteria = selectedFilterOnRefresh?.criterias ? addIdAttrForFilterCriteria(selectedFilterOnRefresh.criterias) : [];
  const [filters, setFilters] = useState<any>(initFilterCriteria)

  const loggedInUserDetails: any = useSelector(
    (state: RootState): any => state?.loggedInUserDetails?.loggedInUserDetails
  );

  const saveFilterState: SaveFilterState = useSelector(
    (state: RootState) => state.filterCriteriaData?.saveFilterData
  );

  const { filterSavedSuccess, savedFilter, appliedSavedFilter }: SaveFilterState = useSelector(
    (state: RootState) => state.filterCriteriaData?.saveFilterData
  );

  const { defaultTemplate: template }: PreConfiguredTemplatesState = useSelector(
    (state: RootState) => state.dashboardTemplatesData?.pcTemplatesData
  );

  useEffect(() => {
    if (filterSavedSuccess === true) {
      setSaveFilterDialog(false);
    }
  }, [filterSavedSuccess]);

  const prevData: any = usePrevious({ template });

  //Reset filters on template change
  useEffect(() => {
    if (prevData?.template !== null && prevData?.template != template) {
      setFilters([]);
    }
  }, [template]);

  useEffect(() => {
    if (savedFilter) {
      //setApplyFilterId(savedFilter?.filter_id?? '');
      localStorage.setItem('selectedFilter', JSON.stringify(savedFilter));
    }
  }, [savedFilter]);

  const handleClickOpen = () => {
    setCriteria('');
    setFilterAttribute('');
    setOperator('');
    setOpen(true);
  };

  const handleListOpen = () => {
    setOpenListFilter(true);
  }

  const handleListClose = () => {
    setOpenListFilter(false);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const setFilterCondn = (event: any) => {
    setCondition(event.target.value)
  }

  const setFilterCriteria = (event: any) => {
    setCriteria(event.target.value)
  }

  const setFilterOperator = (event: any) => {
    setOperator(event.target.value)
  }

  const setFilterValue = (value: any) => {
    setFilterAttribute(value)
  }

  const listContainsObject = (obj: any, list: any) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === obj.name &&
        list[i].action === obj.action &&
        list[i].operator === obj.operator &&
        JSON.stringify(list[i].value) === JSON.stringify(obj.value)) {
        return true;
      }
    }
    return false;
  }

  const clearAllFilters = (wasAppliedSavedFilter = false) => {
    setFilters([]);
    localStorage.removeItem("selectedFilter");
    dispatch(dashboardFiltersActionCreator.clearSavedAppliedFilter());
    if (!wasAppliedSavedFilter) {
      localStorage.removeItem('appliedSavedFilter');
    }
  }

  const setFilterList = (filterCriteria: IFilterItem[]) => {
    setFilters(filterCriteria);

    const criterias = filterCriteria?.map((filter: IFilterItem) => {
      const rFilter = { ...filter };
      delete rFilter?.id;
      delete rFilter?.label;
      return { ...rFilter };
    });

    if (criterias.length <= 0) {
      const wasAppliedSavedFilter: boolean = appliedSavedFilter ? true : false;
      clearAllFilters(wasAppliedSavedFilter);
    }
    else {
      const user = superAdmin ? userEmailAddr : loggedInUserDetails?.user_data?.user_id ?? "";
      const filterData = {
        client_id: clientId,
        template_id: template,
        user,
        criterias
      }
      saveFilterToStore(filterData, { orderBy, sortBy, clientId }, true);
    }
  }

  const createFilter = () => {
    let updatedFilters = [...filters];
    const obj = {
      'name': criteria,
      'action': condition,
      'operator': operator,
      'value': value,
    }
    if (!listContainsObject(obj, filters)) {
      updatedFilters.push({ ...obj, id: updatedFilters.length });
      setFilterList(updatedFilters);
    }
    setOpen(false);
  }

  const deleteFilter = (id: number) => {
    let updatedFilters = [...filters];
    updatedFilters = updatedFilters.filter(obj => obj.id !== id);
    setFilterList(updatedFilters);
  }

  const saveFilterToStore = (filterData: any, sortingData: any, applyFilter: boolean = false, updateFilter = false) => {
    dispatch(dashboardFiltersActionCreator.saveFilterRequest(filterData, sortingData, applyFilter, updateFilter));
  }

  const handleFilterApply = (selectedFilter: any) => {
    dispatch(dashboardFiltersActionCreator.saveAppliedFilter(selectedFilter));
    //dispatch(dashboardFiltersActionCreator.applyFilterId(selectedFilter?.filter_id?? ''));
    localStorage.setItem('selectedFilter', JSON.stringify(selectedFilter));
    localStorage.setItem('appliedSavedFilter', JSON.stringify(selectedFilter));
    const filterCriterias = addIdAttrForFilterCriteria(selectedFilter?.criterias ?? [])
    setFilters(filterCriterias);
  }

  return (
    <div className={classes.root} style={{ justifyContent: 'flex-end' }}>
      <AccountFilterBar
        setFilterList={setFilterList}
        filters={filters}
        handleClickOpen={handleClickOpen}
        deleteFilter={deleteFilter}
        saveFilterToStore={saveFilterToStore}
        loggedInUserDetails={loggedInUserDetails}
        handleListOpen={handleListOpen}
        saveFilterDialog={saveFilterDialog}
        setSaveFilterDialog={setSaveFilterDialog}
        saveFilterState={saveFilterState}
        clearAllFilters={clearAllFilters}
        appliedSavedFilter={appliedSavedFilter}
      />
      <Dialog
        PaperProps={{ classes: { root: classes.dialogBox } }}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent color="primary" >
          {i18n._('Add filter criteria')}
          <div className={classes.dialogDivider}>
            <div className={classes.filterCriteria}>
              <FilterCriteria
                condition={condition}
                setFilterCondn={setFilterCondn}
                criteria={criteria}
                setFilterCriteria={setFilterCriteria}
              />
            </div>
            <Divider orientation="vertical" flexItem classes={{ root: classes.dividerColor }} />
            <div className={classes.filterAttribute}>
              <FilterAttributes
                criteria={criteria}
                value={value}
                operator={operator}
                setFilterOperator={setFilterOperator}
                setFilterValue={setFilterValue}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="primary" className={classes.outlineButton} onClick={handleClose} >
            {i18n._('Cancel')}
          </Button>
          {value && <Button variant="contained" color="primary" className={classes.themeButton} onClick={createFilter} >
            {i18n._('OK')}
          </Button>}
        </DialogActions>
      </Dialog>
      <ListFilters
        openListFilter={openListFilter}
        handleListClose={handleListClose}
        loggedInUserDetails={loggedInUserDetails}
        handleFilterApply={handleFilterApply}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        clearAllFilters={clearAllFilters}
      />
    </div>
  );
};

export default DashboardFilters;