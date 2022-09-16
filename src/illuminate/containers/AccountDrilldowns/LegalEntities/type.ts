import Actions from '../../../../utils/configureActions';

//Legal Entities types
export interface LegalEntitiesState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
}

interface LegalEntitiesRequestAction {
  type: typeof Actions.LEGAL_ENTITIES_REQUEST;
  payload: any;
}

interface LegalEntitiesSuccessAction {
  type: typeof Actions.LEGAL_ENTITIES_SUCCESS;
  payload: any;
}

interface LegalEntitiesErrorAction {
  type: typeof Actions.LEGAL_ENTITIES_ERROR;
  payload: any;
}

interface LegalEntitiesResetAction {
  type: typeof Actions.LEGAL_ENTITIES_RESET;
}

export type LegalEntitiesActionTypes =
  | LegalEntitiesRequestAction
  | LegalEntitiesSuccessAction
  | LegalEntitiesErrorAction
  | LegalEntitiesResetAction;