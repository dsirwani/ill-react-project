import ACTIONS from '../../../../utils/configureActions';
import {
  LegalEntitiesActionTypes,
} from './type';

//Legal Entities action creators
export const legalEntitiesRequest = (data: any): LegalEntitiesActionTypes => ({
  type: ACTIONS.LEGAL_ENTITIES_REQUEST,
  payload: data,
});

export const legalEntitiesSuccess = (data: any): LegalEntitiesActionTypes => ({
  type: ACTIONS.LEGAL_ENTITIES_SUCCESS,
  payload: data,
});

export const legalEntitiesError = (error: any): LegalEntitiesActionTypes => ({
  type: ACTIONS.LEGAL_ENTITIES_ERROR,
  payload: error,
});

export const legalEntitiesReset = (): LegalEntitiesActionTypes => ({
  type: ACTIONS.LEGAL_ENTITIES_RESET,
});