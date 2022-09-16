import ACTIONS from '../../../utils/configureActions';
import { CreateTemplateState, PreConfiguredTemplatesState, TemplateDeleteState, TemplateManagerState, TemplatesKPIColumns } from './type';
import { VARIABLE_TYPES } from '../../../constants';

const initialPreConfiguredTemplatesState: PreConfiguredTemplatesState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
  defaultTemplate: null,
};

const initialTemplateManagerState: TemplateManagerState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
};

const initColumn = {
    column_number: 1,
    fin_data_type: "",
    drop2: "",
  //  drop3: "",
  //  drop4: "",
    variable_type: "",
  }

const initTemplatesKPIColumns: TemplatesKPIColumns = {
  loading: false,
  error: false,
  errorMessage: '',
  columnsDDs: {
    revenue: null,
    plan: null,
    growth: null,
    buying_center: null,
    pgi: null
  },
  columns: [{
    ...initColumn,
  }]
}; 

const initCreateTemplateState: CreateTemplateState = {
  loading: false,
  error: false,
  closeModal: false,
  errorMessage: '',
  data: null
};

const evaluateValuesForDD = (columnsDD: any, selectedValues: any) : {optionsList: any, hasMoreOptions: boolean} => {
  let optionsList: any = [];
  let hasMoreOptions = true;
  const dataIsObject = (typeof columnsDD[selectedValues[0]] === "object" && columnsDD[selectedValues[0]].constructor === Object)
  if(selectedValues.length > 1 ){
    const {optionsList: opList, hasMoreOptions: moreOpts} = evaluateValuesForDD(columnsDD[selectedValues[0]], selectedValues.slice(1));
    hasMoreOptions = moreOpts;
    optionsList = opList;
  } else {
    if(dataIsObject) {
      optionsList = Object.keys(columnsDD[selectedValues[0]]);
       hasMoreOptions = true;
    } else {
      optionsList = columnsDD[selectedValues[0]] ?? [] ;
      hasMoreOptions = false ;
    }
  }  
  return { optionsList, hasMoreOptions };    
}

const updateColumnList = (columns: any, data: any, columnNo: number, selectedValue: string = '', hasMoreOptions: boolean, ddNo: number = 1) => {
  const isDataObject = typeof data === "object" && data.constructor === Object;
  const dropDownValues = isDataObject ? Object.keys(data) : Array.isArray(data) ? data : [];
  const dropdowns =  ddNo === 1 ? 
  {
    [`dd${ddNo}`]: {
      selectedValue
    },
    [`dd${ddNo + 1}`]: {
        optionList: dropDownValues
    }
  } 
  : dropDownValues.length ?
    {
      ...columns[columnNo]?.dropdowns,
      [`dd${ddNo}`]: {
        ...columns[columnNo].dropdowns[`dd${ddNo}`],
        selectedValue
      },
      [`dd${ddNo + 1}`]: {
          optionList: dropDownValues
      }
    }
    :
    {
      ...columns[columnNo].dropdowns,
      [`dd${ddNo}`]: {
        ...columns[columnNo].dropdowns[`dd${ddNo}`],
        selectedValue
      }
    }
  const updateColumns = [...columns];

  updateColumns[columnNo] = {
    ...columns[columnNo],
    dropdowns,
  }
  return updateColumns;
}

const initialTemplateDeleteState: TemplateDeleteState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
};


export const DashboardTemplatesReducer = (
  state: any = {
    pcTemplatesData: initialPreConfiguredTemplatesState,
    templateManagerData: initialTemplateManagerState,
    templatesKPIColumns: initTemplatesKPIColumns,
    templateDeleteData: initialTemplateDeleteState,
    createTemplateState: initCreateTemplateState,
  },
  action: any
) => {
  switch (action.type) {
    //Pre configured template reducers
    case ACTIONS.PC_TEMPLATES_REQUEST:
      return {
        ...state,
        pcTemplatesData: {
          ...initialPreConfiguredTemplatesState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.PC_TEMPLATES_SUCCESS:
      return {
        ...state,
        pcTemplatesData: {
          ...state.pcTemplatesData,
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
        },
      };

    case ACTIONS.PC_TEMPLATES_ERROR:
      return {
        ...state,
        pcTemplatesData: {
          ...state.pcTemplatesData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.PC_TEMPLATES_RESET:
      return {
        ...state,
        pcTemplatesData: {
          ...state.pcTemplatesData,
          loading: false,
          error: false,
          errorMessage: '',
          data: null,
        },
      };

    case ACTIONS.PC_DEFAULT_TEMPLATE:
      return {
        ...state,
        pcTemplatesData: {
          ...state.pcTemplatesData,
          loading: false,
          error: false,
          errorMessage: '',
          defaultTemplate: action?.payload
        },
      };

    //Template manager reducers
    case ACTIONS.TEMPLATE_MANAGER_REQUEST:
      return {
        ...state,
        templateManagerData: {
          ...initialPreConfiguredTemplatesState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.TEMPLATE_MANAGER_SUCCESS:
      return {
        ...state,
        templateManagerData: {
          ...state.templateManagerData,
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
        },
      };

    case ACTIONS.TEMPLATE_MANAGER_ERROR:
      return {
        ...state,
        templateManagerData: {
          ...state.templateManagerData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.TEMPLATE_MANAGER_RESET:
      return {
        ...state,
        templateManagerData: {
          ...state.templateManagerData,
          loading: false,
          error: false,
          errorMessage: '',
          data: null,
        },
      };

    case ACTIONS.GET_TEMPLATE_COLUMNS_REQUEST:
      return {
        ...state,
        templatesKPIColumns: {
          ...state.templatesKPIColumns,
          loading: true,
        }
      };

    case ACTIONS.GET_TEMPLATE_COLUMNS_SUCCESS:
      const { data, columnNo, kpi } = action.payload;
      
      const columns = updateColumnList( state.templatesKPIColumns.columns, data, columnNo, kpi, true );
      columns[columnNo]['variable_type'] = VARIABLE_TYPES?.[kpi]?.variableType ?? '';
      columns[columnNo]['fin_data_type'] = kpi ?? '';
      return {
        ...state,
        templatesKPIColumns: {
          ...state.templatesKPIColumns,
          loading: false,
          columnsDDs: {
            ...state?.templatesKPIColumns?.columnsDDs,
            [action.payload.kpi]: action.payload.data,
          },
          columns,
        }
      };

    case ACTIONS.GET_TEMPLATE_COLUMNS_FAILURE:
      return {
        ...state,
        templatesKPIColumns: {
          ...state.templatesKPIColumns,
          loading: false,
          error: true,
          errorMessage: action?.payload,
        }
      };

    case ACTIONS.GET_TEMPLATE_COLUMNS_DD_UPDATE:
      const { ddNo, columnNo: colNo, topLineSelected } = action.payload;
      const selectedValues = [];
      const updateDDList = {};
      for(let i = 1; i <= ddNo; i++){
        if( i == ddNo){
          selectedValues.push(topLineSelected);
          updateDDList[`dd${i}`] = {
            optionList: [...state.templatesKPIColumns?.columns[colNo]?.dropdowns[`dd${i}`].optionList], 
          };
        } else {
          selectedValues.push(state.templatesKPIColumns?.columns[colNo]?.dropdowns[`dd${i}`].selectedValue);
          updateDDList[`dd${i}`] = state.templatesKPIColumns?.columns[colNo]?.dropdowns[`dd${i}`];
        }
        
      }
      state.templatesKPIColumns.columns[colNo].dropdowns = {...updateDDList}

      const {optionsList: optionsForOptionList, hasMoreOptions } = evaluateValuesForDD(state?.templatesKPIColumns?.columnsDDs, selectedValues);

      const columnsDDUpdate = updateColumnList( state.templatesKPIColumns.columns, optionsForOptionList, colNo, topLineSelected, hasMoreOptions, ddNo );
      columnsDDUpdate[colNo][`drop${ddNo}`] =  topLineSelected ?? '';

      return {
          ...state,
        templatesKPIColumns: {
          ...state.TemplatesKPIColumns,
          loading: false,
          columnsDDs: {
            ...state.templatesKPIColumns.columnsDDs,
            [action.payload.kpi]: action.payload.data,
          },
          columns: columnsDDUpdate,
        }
      };

    case ACTIONS.ADD_TEMPLATE_COLUMN:
      const columnList = state?.templatesKPIColumns?.columns ?? [];

      return {
        ...state,
        templatesKPIColumns: {
          ...state.templatesKPIColumns,
          columns: [
            ...state.templatesKPIColumns.columns,
            { 
              ...initColumn,
              column_number: columnList.length + 1
            }
          ],
        }
      };

    case ACTIONS.DELETE_TEMPLATE_COLUMN:
      const columnToRemove = action?.payload?.column;
      const updateColumns = state?.templatesKPIColumns?.columns ?? [];
      let newListCols = [];
      if( columnToRemove ){
          newListCols = updateColumns.filter((column: any) => column !== columnToRemove);
          newListCols = newListCols.map((column: any) => {
            if(column.column_number > columnToRemove.column_number){
              return {
                ...column,
                "column_number": +(column.column_number - 1)
              }
            }
            return column;
          });
      }
      return {
        ...state,
        templatesKPIColumns: {
          ...state.templatesKPIColumns,
          columns: newListCols,
        }
      };  

    case ACTIONS.TEMPLATE_VIEW_COLUMNS:

      const viewColumns = action?.payload?.templateColumns?? []; 
      let templateColumns:any = [];
      if(viewColumns.length){
        viewColumns.forEach((column: any, idx: number) => {
          let dropList = {dd1: {}, dd2: {}, dd3: {}, dd4: {}};
          if(column.fin_data_type){
            dropList['dd1']['selectedValue'] = column.fin_data_type;
            dropList['dd1']['optionList'] = [column.fin_data_type];
          }
          for(let i = 2; i <= 4; i++ ){
            if(column[`drop${i}`]){
              dropList[`dd${i}`]['selectedValue'] = column[`drop${i}`];
              dropList[`dd${i}`]['optionList'] = [column[`drop${i}`]];
            }
          }
          templateColumns.push({dropdowns: dropList});
        });
      }

      return {
        ...state,
        templatesKPIColumns: {
          ...state.templatesKPIColumns,
          columns: [...templateColumns],
        }
      };

    case ACTIONS.TEMPLATE_EDIT_COLUMNS_REQUEST:
      return {
        ...state,
        templatesKPIColumns: {
          ...state.templatesKPIColumns,
          loading: true,
        }
      };

    case ACTIONS.TEMPLATE_EDIT_COLUMNS_SUCCESS:
      const dropdownsData = action?.payload?.data;
      return {
        ...state,
        templatesKPIColumns: {
          ...state.templatesKPIColumns,
         // loading: false,
          columnsDDs: {...dropdownsData}
        }
      };

    case ACTIONS.TEMPLATE_EDIT_COLUMNS_FAILURE:
      return {
        ...state,
        templatesKPIColumns: {
          ...state.templatesKPIColumns,
          loading: false,
          error: true,
          errorMessage: action?.payload,
        }
      };

    case ACTIONS.EDIT_TEMPLATE_COLUMNS_DD_UPDATE:
      const templateColumnsData = action?.payload?. templateColumns ?? {};
      let editColumns:any = [...templateColumnsData];
      templateColumnsData.forEach((column: any, idx: number) => {
        const colsWithHeader = updateColumnList( editColumns, state.templatesKPIColumns.columnsDDs[column.fin_data_type], idx, column.fin_data_type, true );
        editColumns = [...colsWithHeader];
        const ddsSelectedVal = [];
        ddsSelectedVal.push(column.fin_data_type);
       // editColumns.push({...column})
        for(let i = 2; i < 5; i++){
          if(column[`drop${i}`]){
            ddsSelectedVal.push(column[`drop${i}`]);
            const {optionsList, hasMoreOptions } = evaluateValuesForDD(state?.templatesKPIColumns?.columnsDDs, ddsSelectedVal);
            const colsWithTopline = updateColumnList( editColumns, optionsList, idx, column[`drop${i}`], hasMoreOptions, i );
            editColumns = [...colsWithTopline]
          }
        }
      });

      return {
        ...state,
        templatesKPIColumns: {
          ...state.templatesKPIColumns,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          columns: editColumns,
        }
      };
      
    case ACTIONS.RESET_TEMPLATE_COLUMN:
      return {
        ...state,
        templatesKPIColumns: {
          ...state.templatesKPIColumns,
          columns: [{...initColumn}],
        }
      };
  
    //Template delete reducers
    case ACTIONS.TEMPLATE_DELETE_REQUEST:
      return {
        ...state,
        templateDeleteData: {
          ...initialTemplateDeleteState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.TEMPLATE_DELETE_SUCCESS:
      return {
        ...state,
        templateDeleteData: {
          ...state.templateDeleteData,
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
        },
      };

    case ACTIONS.TEMPLATE_DELETE_ERROR:
      return {
        ...state,
        templateDeleteData: {
          ...state.templateDeleteData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.TEMPLATE_DELETE_RESET:
      return {
        ...state,
        templateDeleteData: {
          ...state.templateDeleteData,
          loading: false,
          error: false,
          errorMessage: '',
          data: null,
        }
      };

    //create template reducers
    case ACTIONS.CREATE_TEMPLATE_REQUEST:
      return {
        ...state,
        createTemplateState: {
          ...state.createTemplateState,
          loading: true,
          error: false,
          errorMessage: '',
          closeModal: false
        },
      };

    case ACTIONS.CREATE_TEMPLATE_SUCCESS:
      return {
        ...state,
        createTemplateState: {
          ...state.createTemplateState,
          loading: false,
          error: false,
          errorMessage: '',
          closeModal: true,
          data: action?.payload,
        },
      };

    case ACTIONS.CREATE_TEMPLATE_ERROR:
      return {
        ...state,
        createTemplateState: {
          ...state.createTemplateState,
          loading: false,
          error: true,
          closeModal: false,
          errorMessage: action?.payload,
          data: null,
        },
      };

    default:
      return { ...state };
  }
};
