import { Action } from 'redux';

export * from './action-capture';
export * from './action-enumerate-devices';
export * from './action-get-supported-constraints';
export * from './action-query-permission';
export * from './action-request-camera';

/* Request camera start */

export const ACTION_REQUEST_CAMERA_START = 'REQUEST_CAMERA_START';

export interface ActionRequestCameraStart extends Action<typeof ACTION_REQUEST_CAMERA_START> {}

export const isActionRequestCameraStart = (action: Action): action is ActionRequestCameraStart => (
  action.type === ACTION_REQUEST_CAMERA_START
);

/* Request camera success */

export const ACTION_REQUEST_CAMERA_SUCCESS = 'REQUEST_CAMERA_SUCCESS';

export interface ActionRequestCameraSuccess extends Action<typeof ACTION_REQUEST_CAMERA_SUCCESS> {}

export const isActionRequestCameraSuccess = (action: Action): action is ActionRequestCameraSuccess => (
  action.type === ACTION_REQUEST_CAMERA_SUCCESS
);

/* Request camera error */

export const ACTION_REQUEST_CAMERA_ERROR = 'REQUEST_CAMERA_ERROR';

export interface ActionRequestCameraError extends Action<typeof ACTION_REQUEST_CAMERA_ERROR> {
  data: {
    message: string;
  };
}

export const isActionRequestCameraError = (action: Action): action is ActionRequestCameraError => (
  action.type === ACTION_REQUEST_CAMERA_ERROR
);

/* Query permission start */

export const ACTION_QUERY_PERMISSION_START = 'QUERY_PERMISSION_START';

export interface ActionQueryPermissionStart extends Action<typeof ACTION_QUERY_PERMISSION_START> {}

export const isActionQueryPermissionStart = (action: Action): action is ActionQueryPermissionStart => (
  action.type === ACTION_QUERY_PERMISSION_START
);

/* Query permission success */

export const ACTION_QUERY_PERMISSION_SUCCESS = 'QUERY_PERMISSION_SUCCESS';

export interface ActionQueryPermissionSuccess extends Action<typeof ACTION_QUERY_PERMISSION_SUCCESS> {
  data: {
    state: 'denied' | 'granted' | 'prompt';
  };
}

export const isActionQueryPermissionSuccess = (action: Action): action is ActionQueryPermissionSuccess => (
  action.type === ACTION_QUERY_PERMISSION_SUCCESS
);

/* Query permission error */

export const ACTION_QUERY_PERMISSION_ERROR = 'QUERY_PERMISSION_ERROR';

export interface ActionQueryPermissionError extends Action<typeof ACTION_QUERY_PERMISSION_ERROR> {
  data: {
    message: string;
  };
}

export const isActionQueryPermissionError = (action: Action): action is ActionQueryPermissionError => (
  action.type === ACTION_QUERY_PERMISSION_ERROR
);

/* Change permission */

export const ACTION_CHANGE_PERMISSION = 'CHANGE_PERMISSION';

export interface ActionChangePermission extends Action<typeof ACTION_CHANGE_PERMISSION> {
  data: {
    state: 'denied' | 'granted' | 'prompt';
  };
}

export const isActionChangePermission = (action: Action): action is ActionChangePermission => (
  action.type === ACTION_CHANGE_PERMISSION
);

export const changePermission = (state: 'denied' | 'granted' | 'prompt') => ({
  type: ACTION_CHANGE_PERMISSION,
  data: {
    state,
  },
});

/* Enumerate devices start */

export const ACTION_ENUMERATE_DEVICES_START = 'ENUMERATE_DEVICES_START';

export interface ActionEnumerateDevicesStart extends Action<typeof ACTION_ENUMERATE_DEVICES_START> {}

export const isActionEnumerateDevicesStart = (action: Action): action is ActionEnumerateDevicesStart => (
  action.type === ACTION_ENUMERATE_DEVICES_START
);

/* Enumerate devices success */

export const ACTION_ENUMERATE_DEVICES_SUCCESS = 'ENUMERATE_DEVICES_SUCCESS';

export interface ActionEnumerateDevicesSuccess extends Action<typeof ACTION_ENUMERATE_DEVICES_SUCCESS> {
  data: {
    devices: MediaDeviceInfo[];
  };
}

export const isActionEnumerateDevicesSuccess = (action: Action): action is ActionEnumerateDevicesSuccess => (
  action.type === ACTION_ENUMERATE_DEVICES_SUCCESS
);

/* Enumerate devices error */

export const ACTION_ENUMERATE_DEVICES_ERROR = 'ENUMERATE_DEVICES_ERROR';

export interface ActionEnumerateDevicesError extends Action<typeof ACTION_ENUMERATE_DEVICES_ERROR> {
  data: {
    message: string;
  };
}

export const isActionEnumerateDevicesError = (action: Action): action is ActionEnumerateDevicesError => (
  action.type === ACTION_ENUMERATE_DEVICES_ERROR
);

/* Capture image */

export const ACTION_CAPTURE_IMAGE = 'CAPTURE_IMAGE';

export interface ActionCaptureImage extends Action<typeof ACTION_CAPTURE_IMAGE> {
  data: {
    imageSrc: string;
  };
}

export const isActionCaptureImage = (action: Action): action is ActionCaptureImage => (
  action.type === ACTION_CAPTURE_IMAGE
);

export const captureImage = (imageSrc: string) => ({
  type: ACTION_CAPTURE_IMAGE,
  data: {
    imageSrc,
  },
});

/* Get supported constraints start */

export const ACTION_GET_SUPPORTED_CONSTRAINTS_START = 'GET_SUPPORTED_CONSTRAINTS_START';

export interface ActionGetSupportedConstraintsStart extends Action<typeof ACTION_GET_SUPPORTED_CONSTRAINTS_START> {}

export const isActionGetSupportedConstraintsStart = (action: Action): action is ActionGetSupportedConstraintsStart => (
  action.type === ACTION_GET_SUPPORTED_CONSTRAINTS_START
);

/* Get supported constraints success */

export const ACTION_GET_SUPPORTED_CONSTRAINTS_SUCCESS = 'GET_SUPPORTED_CONSTRAINTS_SUCCESS';

export interface ActionGetSupportedConstraintsSuccess extends Action<typeof ACTION_GET_SUPPORTED_CONSTRAINTS_SUCCESS> {
  data: {
    supports: MediaTrackSupportedConstraints;
  };
}

export const isActionGetSupportedConstraintsSuccess = (action: Action): action is ActionGetSupportedConstraintsSuccess => (
  action.type === ACTION_GET_SUPPORTED_CONSTRAINTS_SUCCESS
);

/* Get supported constraints error */

export const ACTION_GET_SUPPORTED_CONSTRAINTS_ERROR = 'GET_SUPPORTED_CONSTRAINTS_ERROR';

export interface ActionGetSupportedConstraintsError extends Action<typeof ACTION_GET_SUPPORTED_CONSTRAINTS_ERROR> {
  data: {
    message: string;
  };
}

export const isActionGetSupportedConstraintsError = (action: Action): action is ActionGetSupportedConstraintsError => (
  action.type === ACTION_GET_SUPPORTED_CONSTRAINTS_ERROR
);
