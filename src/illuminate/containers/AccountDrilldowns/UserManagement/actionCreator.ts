import ACTIONS from '../../../../utils/configureActions';
import { UserProfileActionTypes, EditUserProfileActionTypes } from './type';

export const getUserProfileRequest = (
  clientId: string,
  userId: string,
  accountId: string
): UserProfileActionTypes => ({
  type: ACTIONS.GET_USER_PROFILE_REQUEST,
  payload: { clientId, userId, accountId },
});

export const getUserProfileSuccess = (data: any): UserProfileActionTypes => ({
  type: ACTIONS.GET_USER_PROFILE_SUCCESS,
  payload: data,
});

export const getUserProfileError = (error: any): UserProfileActionTypes => ({
  type: ACTIONS.GET_USER_PROFILE_ERROR,
  payload: error,
});

export const editUserProfileRequest = (payload: any): EditUserProfileActionTypes => ({
  type: ACTIONS.EDIT_USER_PROFILE_REQUEST,
  payload,
});

export const editUserProfileSuccess = (data: any): EditUserProfileActionTypes => ({
  type: ACTIONS.EDIT_USER_PROFILE_SUCCESS,
  payload: data,
});

export const editUserProfileError = (error: any): EditUserProfileActionTypes => ({
  type: ACTIONS.EDIT_USER_PROFILE_ERROR,
  payload: error,
});