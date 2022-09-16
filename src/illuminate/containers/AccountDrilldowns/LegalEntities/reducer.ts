import ACTIONS from '../../../../utils/configureActions';
import { LegalEntitiesState } from './type';

const initialLegalEntitiesState: LegalEntitiesState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: null,
};


export const legalEntitiesReducer = (
  state: any = {
    LEIData: initialLegalEntitiesState,
  },
  action: any
) => {
  switch (action.type) {

    //Legal Entities reducers
    case ACTIONS.LEGAL_ENTITIES_REQUEST:
      return {
        ...state,
        LEIData: {
          ...initialLegalEntitiesState,
          loading: true,
          error: false,
          errorMessage: '',
        },
      };

    case ACTIONS.LEGAL_ENTITIES_SUCCESS:
      return {
        ...state,
        LEIData: {
          ...state.LEIData,
          loading: false,
          error: false,
          errorMessage: '',
          data: action?.payload,
        },
      };

    case ACTIONS.LEGAL_ENTITIES_ERROR:
      return {
        ...state,
        LEIData: {
          ...state.LEIData,
          loading: false,
          error: true,
          errorMessage: action?.payload,
          data: null,
        },
      };

    case ACTIONS.LEGAL_ENTITIES_RESET:
      return {
        ...state,
        LEIData: {
          ...state.LEIData,
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