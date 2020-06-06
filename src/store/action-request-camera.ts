import { ThunkAction } from 'redux-thunk';
import { RootReducerState } from '.';
import {
  ACTION_REQUEST_CAMERA_ERROR,
  ACTION_REQUEST_CAMERA_START,
  ACTION_REQUEST_CAMERA_SUCCESS,
  ActionRequestCameraError,
  ActionRequestCameraStart,
  ActionRequestCameraSuccess,
} from './actions';

type R = Promise<void>
type S = RootReducerState
type E = void
type A = (
  ActionRequestCameraError |
  ActionRequestCameraStart |
  ActionRequestCameraSuccess
)

export const requestCamera = (): ThunkAction<R, S, E, A> => async (dispatch) => {
  dispatch<ActionRequestCameraStart>({
    type: ACTION_REQUEST_CAMERA_START,
  });
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const streamURL = URL.createObjectURL(stream);
    dispatch<ActionRequestCameraSuccess>({
      type: ACTION_REQUEST_CAMERA_SUCCESS,
      data: {
        streamURL,
      },
    });
  } catch (err) {
    dispatch<ActionRequestCameraError>({
      type: ACTION_REQUEST_CAMERA_ERROR,
      data: {
        message: err.message,
      },
    });
  }
};
