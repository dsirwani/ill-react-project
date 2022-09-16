import Actions from '../../../../utils/configureActions';

//Account team types
export interface AccountTeamState {
  loading: boolean;
  error: boolean;
  errorMessage: any;
  data: any;
  nextPageUrl: string | null;
}

interface AccountTeamRequestAction {
  type: typeof Actions.ACCOUNT_TEAM_REQUEST;
  payload: any;
}

interface AccountTeamSuccessAction {
  type: typeof Actions.ACCOUNT_TEAM_SUCCESS;
  payload: any;
}

interface AccountTeamErrorAction {
  type: typeof Actions.ACCOUNT_TEAM_ERROR;
  payload: any;
}

interface AccountTeamResetAction {
  type: typeof Actions.ACCOUNT_TEAM_RESET;
}

interface GetMoreAccountTeamRequestAction {
  type: typeof Actions.GET_MORE_ACCOUNT_TEAM_REQUEST;
  payload: any;
}

interface GetMoreAccountTeamSuccessAction {
  type: typeof Actions.GET_MORE_ACCOUNT_TEAM_SUCCESS;
  payload: any;
}

interface GetMoreAccountTeamErrorAction {
  type: typeof Actions.GET_MORE_ACCOUNT_TEAM_ERROR;
  payload: any;
}

export type AccountTeamActionTypes =
  | AccountTeamRequestAction
  | AccountTeamSuccessAction
  | AccountTeamErrorAction
  | AccountTeamResetAction
  | GetMoreAccountTeamRequestAction
  | GetMoreAccountTeamSuccessAction
  | GetMoreAccountTeamErrorAction;