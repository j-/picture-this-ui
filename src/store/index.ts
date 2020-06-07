import { Reducer } from 'redux';
import {
  isActionRequestCameraStart,
  isActionRequestCameraSuccess,
  isActionRequestCameraError,
  isActionQueryPermissionSuccess,
  isActionChangePermission,
  isActionEnumerateDevicesSuccess,
} from './actions';

export interface RootReducerState {
  devices: null | MediaDeviceInfo[];
  videoInputDeviceCount: null | number;
  cameraPermission: null | 'denied' | 'granted' | 'prompt';
  isRequestingCamera: boolean;
  requestCameraError: string | null;
}

export const DEFAULT_STATE: RootReducerState = {
  devices: null,
  videoInputDeviceCount: null,
  cameraPermission: null,
  isRequestingCamera: false,
  requestCameraError: null,
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

  if (isActionEnumerateDevicesSuccess(action)) {
    const { devices } = action.data;
    const videoInputDevices = devices.filter((device) => device.kind === 'videoinput');
    const videoInputDeviceCount = videoInputDevices.length;
    return {
      ...state,
      devices,
      videoInputDeviceCount,
    };
  }

  return state;
};

export default reducer;

export const getDevices = (state: RootReducerState) => state.devices;
export const getVideoInputDeviceCount = (state: RootReducerState) => state.videoInputDeviceCount;
export const getCameraPermission = (state: RootReducerState) => state.cameraPermission;
export const isRequestingCamera = (state: RootReducerState) => state.isRequestingCamera;
export const getCameraError = (state: RootReducerState) => state.requestCameraError;
