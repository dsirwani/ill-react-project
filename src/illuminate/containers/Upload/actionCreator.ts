import ACTIONS from '../../../utils/configureActions';
import { UploadActionTypes } from './type';

export const initUpload = (data: any): UploadActionTypes => (
	{
		type: ACTIONS.UPLOAD_DATA_INITIATE,
		payload: data
	}
);

export const uploadSuccess = (data: any): UploadActionTypes => (
	{
		type: ACTIONS.UPLOAD_DATA_SUCCESS,
		payload: data
	}
);

export const uploadError = (error: any): UploadActionTypes => (
	{
		type: ACTIONS.UPLOAD_DATA_ERROR,
		payload: error
	}
);

export const resetUpload = (): UploadActionTypes => (
	{
		type: ACTIONS.RESET_UPLOAD_DATA,
	}
);
