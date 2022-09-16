import React, { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { Button, Chip, IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';
import { Filter as FilterIcon } from 'react-feather';
import { useI18n } from '../../../hooks/useI18n';
import { useStyles } from './style';
import SaveFilterDialog from './SaveFilterDialog';
import { RootState } from '../../../utils/injectReducer';
import { getEmail, isSuperAdmin } from '../../../utils/localStorageUtils';
import { SaveFilterState } from '../../containers/DashboardFilters/type';
import { PreConfiguredTemplatesState } from '../../containers/DashboardTemplates/type';
import { IFilterItem } from '../../../types/IFilterItem';

interface AccountFilterBarProps {
  filters: any;
  handleClickOpen: (value: any) => any;
  deleteFilter: (value: any) => any;
  handleListOpen: () => void;
  setFilterList: (filterCriteria: IFilterItem[]) => void;
  saveFilterToStore: (filterData: any, sortingData: any, applyFilter: boolean, updateFilter: boolean) => void;
  loggedInUserDetails: any;
  saveFilterDialog: boolean;
  setSaveFilterDialog: Dispatch<SetStateAction<boolean>>;
  saveFilterState: SaveFilterState;
  clearAllFilters: (wasAppliedSavedFilter: boolean) => void;
  appliedSavedFilter: any
}

const ITEM_HEIGHT = 24;

const AccountFilterBar = (props: AccountFilterBarProps) => {

  const i18n = useI18n();
  const classes = useStyles();
  const OPERATOR_TYPE = {
    'lt': '<',
    'gt': '>',
    'le': '<=',
    'ge': '>=',
    'eq': '=',
    'ne': '!=',
  }

  const filterItems: IFilterItem[] = props.filters.map((filterItem: IFilterItem) => {
    if (filterItem.name == 'Account Name' || filterItem.name == 'TAGS') {
      return ({ ...filterItem, label: `${filterItem.action.toUpperCase()} ${filterItem.name}: ${filterItem.value}` })
    } else {
      return { ...filterItem, label: `${filterItem.action.toUpperCase()} ${filterItem.name}: ${OPERATOR_TYPE[filterItem.operator]} $ ${filterItem.value} USD` }
    }
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const userEmailAddr = getEmail();

  const appliedSavedFilter = props?.appliedSavedFilter;

  const { client_id: clientId } = localStorage.getItem('selectedClient')
    ? JSON.parse(localStorage.getItem('selectedClient') || '{"client_id": null}')
    : { client_id: null };

  const superAdmin = isSuperAdmin();

  const { defaultTemplate: template }: PreConfiguredTemplatesState = useSelector(
    (state: RootState) => state.dashboardTemplatesData?.pcTemplatesData
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCreateFilter = () => {
    handleClose();
    props.setSaveFilterDialog(true);
  };

  const handleListOpen = () => {
    handleClose();
    props.handleListOpen();
  };

  const handleDeleteFilterCriteria = (e: any, id: number) => {
    props.deleteFilter(id);
  };

  const handleRLDDChange = (reOrderFilter: IFilterItem[]) => {
    props.setFilterList(reOrderFilter)
  };


  const getFilterRequest = (filterName: string, filterId: any = null) => {
    const criterias = filterItems.map((filter: IFilterItem) => {
      delete filter?.id;
      delete filter?.label;
      return filter;
    });

    const user = superAdmin ? userEmailAddr : props?.loggedInUserDetails?.user_data?.user_id ?? "";
    const filterData = {
      client_id: clientId,
      template_id: template,
      user,
      filter_name: filterName,
      criterias
    }
    return filterData;
  };

  const saveFilterToStore = (filterName: string, sortingData: any = null, applyFilter: boolean = false) => {
    const filterData = getFilterRequest(filterName);
    props.saveFilterToStore(filterData, null, false, false);
  };

  const handleSaveFilter = () => {
    if (appliedSavedFilter) {
      const filterData = getFilterRequest(appliedSavedFilter.filter_name, appliedSavedFilter.filter_id);
      filterData['filter_id'] = appliedSavedFilter.filter_id;
      appliedSavedFilter.criterias = [...filterData.criterias];
      localStorage.setItem('appliedSavedFilter', JSON.stringify(appliedSavedFilter));
      props.saveFilterToStore(filterData, null, false, true);
    }
    handleClose();
  };


  return (
    <React.Fragment>
      <div className={classes.filterContainer}>
        <div className={classes.chipsHolder}>
          <RLDD
            items={filterItems}
            cssClasses={classes.chipsHorizontal}
            itemRenderer={(filter: IFilterItem) => {
              return (
                <Chip
                  size="medium"
                  label={filter.label}
                  onDelete={(e) => handleDeleteFilterCriteria(e, filter.id)}
                  classes={{ root: classes.chipsRoot }}
                />
              );
            }}
            onChange={handleRLDDChange}
          />
        </div>
        <div>
          <div style={{ display: 'flex' }}>
            <Button
              variant="outlined"
              className={classes.btnContainedPrimary}
              onClick={props.handleClickOpen}
            >
              <FilterIcon className={classes.addFilterIcon} />
              {i18n._('  ADD FILTER')}
            </Button>
            <div>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                  },
                }}
              >
                <MenuItem key='get-filter' onClick={handleListOpen}>
                  {i18n._('Select Filter...')}
                </MenuItem>
                <MenuItem
                  key='save-as-filter'
                  onClick={handleCreateFilter}
                  disabled={filterItems.length === 0}
                >
                  {i18n._('Save As...')}
                </MenuItem>
                <MenuItem
                  key='save-filter'
                  onClick={handleSaveFilter}
                  disabled={!appliedSavedFilter || filterItems.length === 0}
                >
                  {i18n._('Save')}
                </MenuItem>
              </Menu>
            </div>
          </div>
          {/* <div className={classes.filterLinks}>
            <div className={classes.clearLink} onClick={() => { props.clearAllFilters(false) }}>Clear All Filters</div>
          </div> */}
        </div>
        <SaveFilterDialog
          saveFilterDialog={props.saveFilterDialog}
          setSaveFilterDialog={props.setSaveFilterDialog}
          saveFilterToStore={saveFilterToStore}
          saveFilterState={props.saveFilterState}
        />
      </div>
    </React.Fragment>
  )
}

export default AccountFilterBar;