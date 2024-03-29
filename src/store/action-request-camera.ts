import { ThunkAction } from 'redux-thunk';
import { RootReducerState } from '.';
import { setStream } from './action-set-stream';
import {
  ACTION_REQUEST_CAMERA_ERROR,
  ACTION_REQUEST_CAMERA_START,
  ACTION_REQUEST_CAMERA_SUCCESS,
  ActionRequestCameraError,
  ActionRequestCameraStart,
  ActionRequestCameraSuccess,
} from './actions';
import { MutableState } from './types';

type R = Promise<MediaStream>
type S = RootReducerState
type E = MutableState
type A = (
  ActionRequestCameraError |
  ActionRequestCameraStart |
  ActionRequestCameraSuccess
)

export type ActionRequestCamera = ThunkAction<R, S, E, A>

export const requestCamera = (facingMode: VideoFacingModeEnum = 'environment'): ActionRequestCamera => async (dispatch, _getState, mutable) => {
  dispatch<ActionRequestCameraStart>({
    type: ACTION_REQUEST_CAMERA_START,
  });
  try {
    if (
      typeof navigator.mediaDevices === 'undefined' ||
      typeof navigator.mediaDevices.getUserMedia !== 'function'
    ) {
      throw new Error('Navigator get user media API not available');
    }
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode,
      },
    });
    dispatch(setStream(stream));
    dispatch<ActionRequestCameraSuccess>({
      type: ACTION_REQUEST_CAMERA_SUCCESS,
    });
    return stream;
  } catch (err) {
    // "Requested device not found" (Chrome) Desktop with no camera
    // "Cannot read property 'getUserMedia' of undefined" (Chrome) Served over HTTP
    // "Permission dismissed" (Chrome Android) Pressed 'back' button when prompted
    dispatch<ActionRequestCameraError>({
      type: ACTION_REQUEST_CAMERA_ERROR,
      data: {
        message: err.message,
      },
    });
    throw err;
  }
};

export const requestCameraUser = () => requestCamera('user');
export const requestCameraEnvironment = () => requestCamera('environment');
