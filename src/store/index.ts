import { Reducer } from 'redux';
import {
  isActionRequestCameraStart,
  isActionRequestCameraSuccess,
  isActionRequestCameraError,
  isActionQueryPermissionSuccess,
  isActionChangePermission,
} from './actions';

export interface RootReducerState {
  cameraPermission: null | 'denied' | 'granted' | 'prompt';
  isRequestingCamera: boolean;
  requestCameraError: string | null;
  cameraURL: string | null;
}

export const DEFAULT_STATE: RootReducerState = {
  cameraPermission: null,
  isRequestingCamera: false,
  requestCameraError: null,
  cameraURL: null,
};

export const reducer: Reducer = (state = DEFAULT_STATE, action) => {
  if (isActionRequestCameraStart(action)) {
    return {
      ...state,
      isRequestingCamera: true,
    };
  }

  if (isActionRequestCameraSuccess(action)) {
    return {
      ...state,
      isRequestingCamera: false,
    };
  }

  if (isActionRequestCameraError(action)) {
    const { message } = action.data;
    return {
      ...state,
      isRequestingCamera: false,
      requestCameraError: message,
    };
  }

  if (isActionQueryPermissionSuccess(action) || isActionChangePermission(action)) {
    return {
      ...state,
      cameraPermission: action.data.state,
    };
  }

  return state;
};

export default reducer;

export const getCameraPermission = (state: RootReducerState) => state.cameraPermission;
export const isRequestingCamera = (state: RootReducerState) => state.isRequestingCamera;
export const getCameraError = (state: RootReducerState) => state.requestCameraError;
export const getCameraURL = (state: RootReducerState) => state.cameraURL;
