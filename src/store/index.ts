import { Reducer } from 'redux';
import {
  isActionRequestCameraStart,
  isActionRequestCameraSuccess,
  isActionRequestCameraError,
  isActionQueryPermissionSuccess,
  isActionChangePermission,
  isActionEnumerateDevicesSuccess,
  isActionCaptureImage,
  isActionGetSupportedConstraintsSuccess,
} from './actions';

export * from './use-dispatch';
export * from './use-selector';

export interface RootReducerState {
  version: undefined | string;
  devices: null | MediaDeviceInfo[];
  videoInputDeviceCount: null | number;
  cameraPermission: null | 'denied' | 'granted' | 'prompt';
  supports: null | {
    [constraint: string]: true,
  };
  isRequestingCamera: boolean;
  requestCameraError: null | string;
  captures: string[];
}

export const DEFAULT_STATE: RootReducerState = {
  version: process.env.REACT_APP_VERSION,
  devices: null,
  videoInputDeviceCount: null,
  cameraPermission: null,
  supports: null,
  isRequestingCamera: false,
  requestCameraError: null,
  captures: [],
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

  if (isActionCaptureImage(action)) {
    const { imageSrc } = action.data;
    return {
      ...state,
      captures: [
        ...state.captures,
        imageSrc,
      ],
    };
  }

  if (isActionGetSupportedConstraintsSuccess(action)) {
    const { supports } = action.data;
    return {
      ...state,
      supports,
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
export const getCaptures = (state: RootReducerState) => state.captures;
