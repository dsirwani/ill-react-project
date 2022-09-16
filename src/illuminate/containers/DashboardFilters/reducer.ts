import ACTIONS from '../../../utils/configureActions';
import {
  FilterCriteriaState, FilterListState, SaveFilterState,
  FilterDeleteState, TagsDataState
} from './type';

const initialFilterCriteriaState: FilterCriteriaState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
};

const initialFilterListState: FilterListState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
};

const refreshSelectedFilter = (localStorage.getItem('appliedSavedFilter')
  ? JSON.parse(localStorage.getItem('appliedSavedFilter') || '{ filter_id: null }') 
  : localStorage.getItem('selectedFilter')
    ? JSON.parse(localStorage.getItem('selectedFilter') || '{ filter_id: "" }')
    : null);

const initialSaveFilterState: SaveFilterState = {
  loading: false,
  error: false,
  errorMessage: '',
  savedFilter: null,
  filterSavedSuccess: null,
  appliedFilterId: refreshSelectedFilter?.filter_id ?? null,
  appliedSavedFilter: refreshSelectedFilter ?? null,
};

const initialFilterDeleteState: FilterDeleteState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
};

const initialTagsDataState: TagsDataState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
};

export const FilterCriteriaNAttrReducer = (
  state: any = {
    filterCriteriaData: initialFilterCriteriaState,
    filterListData: initialFilterListState,
    saveFilterData: initialSaveFilterState,
    filterDeleteData: initialFilterDeleteState,
    tagsData: initialTagsDataState
  },
  action: any
) => {
  switch (action.type) {
    //Filter criteria reducers
    case ACTIONS.FILTER_CRITERIA_REQUEST:
      return {
        ...state,
        filterCriteriaData: {
          ...initialFilterCriteriaState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.FILTER_CRITERIA_SUCCESS:
      return {
        ...state,
        filterCriteriaData: {
          ...state.filterCriteriaData,
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
        },
      };

    case ACTIONS.FILTER_CRITERIA_ERROR:
      return {
        ...state,
        filterCriteriaData: {
          ...state.filterCriteriaData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.FILTER_CRITERIA_RESET:
      return {
        ...state,
        filterCriteriaData: {
          ...state.filterCriteriaData,
          loading: false,
          error: false,
          errorMessage: '',
          data: null,
        },
      };

    //Filter list reducers
    case ACTIONS.FILTER_LIST_REQUEST:
      return {
        ...state,
        filterListData: {
          ...initialFilterListState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.FILTER_LIST_SUCCESS:
      return {
        ...state,
        filterListData: {
          ...state.filterListData,
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
        },
      };

    case ACTIONS.FILTER_LIST_ERROR:
      return {
        ...state,
        filterListData: {
          ...state.filterListData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.FILTER_LIST_RESET:
      return {
        ...state,
        filterListData: {
          ...state.filterListData,
          loading: false,
          error: false,
          errorMessage: '',
          data: null,
        },
      };

    //Save Filter reducers
    case ACTIONS.SAVE_FILTER_REQUEST:
      return {
        ...state,
        saveFilterData: {
          ...state.saveFilterData,
          loading: true,
          error: false,
          errorMessage: '',
          filterSavedSuccess: null,
        },
      };

    case ACTIONS.SAVE_FILTER_SUCCESSS:
      return {
        ...state,
        saveFilterData: {
          ...state.saveFilterData,
          loading: false,
          error: false,
          errorMessage: '',
          savedFilter: action?.payload,
          filterSavedSuccess: true,
        },
      };

    case ACTIONS.SAVE_FILTER_ERROR:
      return {
        ...state,
        saveFilterData: {
          ...state.saveFilterData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          savedFilter: null,
          filterSavedSuccess: false,
        },
      };

    //Filter delete reducers
    case ACTIONS.FILTER_DELETE_REQUEST:
      return {
        ...state,
        filterDeleteData: {
          ...initialFilterListState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.FILTER_DELETE_SUCCESS:
      return {
        ...state,
        filterDeleteData: {
          ...state.filterDeleteData,
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
        },
      };

    case ACTIONS.FILTER_DELETE_ERROR:
      return {
        ...state,
        filterDeleteData: {
          ...state.filterDeleteData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.FILTER_DELETE_RESET:
      return {
        ...state,
        filterDeleteData: {
          ...state.filterDeleteData,
          loading: false,
          error: false,
          errorMessage: '',
          data: null,
        }
      };

    case ACTIONS.APPLY_FILTER_ID:
      return {
        ...state,
        saveFilterData: {
          ...state.saveFilterData,
          appliedFilterId: action.payload?.filterId
        },
      };

    case ACTIONS.SAVE_APPLIED_FILTER:
      return {
        ...state,
        saveFilterData: {
          ...state.saveFilterData,
          appliedSavedFilter: action.payload?.appliedFilter,
          appliedFilterId: action?.payload?.appliedFilter?.filter_id ?? null,
        },
      };

    case ACTIONS.CLEAR_SAVED_APPLIED_FILTER:
      return {
        ...state,
        saveFilterData: {
          appliedSavedFilter: null,
          appliedFilterId: null,
        },
      };

    //Tags data reducers
    case ACTIONS.TAGS_DATA_REQUEST:
      return {
        ...state,
        tagsData: {
          ...initialTagsDataState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.TAGS_DATA_SUCCESS:
      return {
        ...state,
        tagsData: {
          ...state.tagsData,
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
        },
      };

    case ACTIONS.TAGS_DATA_ERROR:
      return {
        ...state,
        tagsData: {
          ...state.tagsData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.TAGS_DATA_RESET:
      return {
        ...state,
        tagsData: {
          ...state.tagsData,
          loading: false,
          error: false,
          errorMessage: '',
          data: null,
        },
      };


    default:
      return { ...state };
  }
};
