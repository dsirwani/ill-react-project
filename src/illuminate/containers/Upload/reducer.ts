import ACTIONS from '../../../utils/configureActions';
import { UploadState } from './type';

const initialState: UploadState = {
	loading: false,
	error: '',
	errorMessage: '',
	data: null
};

export const uploadReducer = (state: UploadState = initialState, action: any) => {
	switch (action.type) {
		case ACTIONS.UPLOAD_DATA_INITIATE:
			return ({
				...state,
				loading: true,
				error: false,
				errorMessage: '',
				data: null
			});

		case ACTIONS.UPLOAD_DATA_SUCCESS:
			return ({
				...state,
				loading: false,
				error: false,
				errorMessage: '',
				data: action?.payload
			});

		case ACTIONS.UPLOAD_DATA_ERROR:
			return ({
				...state,
				loading: false,
				error: true,
				errorMessage: action?.payload,
				data: null
			});

		case ACTIONS.RESET_UPLOAD_DATA:
			return ({
				...initialState
			});

		default:
			return { ...state };
	}
};