import Actions from '../../../utils/configureActions';

export interface UploadState {
    loading: boolean,
    error: string,
    errorMessage: any,
    data: any
}

interface InitUploadAction {
    type: typeof Actions.UPLOAD_DATA_INITIATE,
    payload: any
}

interface UploadSuccessAction {
    type: typeof Actions.UPLOAD_DATA_SUCCESS,
    payload: any
}

interface UploadErrorAction {
    type: typeof Actions.UPLOAD_DATA_ERROR,
    payload: any
}

interface ResetErrorAction {
    type: typeof Actions.RESET_UPLOAD_DATA,
}

export type UploadActionTypes = InitUploadAction | UploadSuccessAction | UploadErrorAction | ResetErrorAction;