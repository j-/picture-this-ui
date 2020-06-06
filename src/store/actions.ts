import { Action } from 'redux';

/* Request camera start */

export const ACTION_REQUEST_CAMERA_START = 'REQUEST_CAMERA_START';

export interface ActionRequestCameraStart extends Action<typeof ACTION_REQUEST_CAMERA_START> {
}

export const isActionRequestCameraStart = (action: Action): action is ActionRequestCameraStart => (
  action.type === ACTION_REQUEST_CAMERA_START
);

/* Request camera success */

export const ACTION_REQUEST_CAMERA_SUCCESS = 'REQUEST_CAMERA_SUCCESS';

export interface ActionRequestCameraSuccess extends Action<typeof ACTION_REQUEST_CAMERA_SUCCESS> {
  data: {
    streamURL: string;
  };
}

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
