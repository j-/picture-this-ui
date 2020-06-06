import { Reducer } from 'redux';
import {
  isActionRequestCameraSuccess,
  isActionRequestCameraError,
} from './actions';

export interface RootReducerState {
  requestCameraError: string | null;
  cameraURL: string | null;
}

export const DEFAULT_STATE: RootReducerState = {
  requestCameraError: null,
  cameraURL: null,
};

export const reducer: Reducer = (state = DEFAULT_STATE, action) => {
  if (isActionRequestCameraSuccess(action)) {
    const { streamURL } = action.data;
    return {
      ...state,
      cameraURL: streamURL,
    };
  }

  if (isActionRequestCameraError(action)) {
    const { message } = action.data;
    return {
      ...state,
      requestCameraError: message,
    };
  }

  return state;
};

export default reducer;

export const getCameraError = (state: RootReducerState) => state.requestCameraError;
export const getCameraURL = (state: RootReducerState) => state.cameraURL;
