import { ThunkAction } from 'redux-thunk';
import { RootReducerState } from './index';

import {
  ActionRequestCamera,
  ActionRequestCameraSuccess,
  ActionRequestCameraError,
} from './actions';

type RequestCameraActions = (
  ActionRequestCamera |
  ActionRequestCameraError |
  ActionRequestCameraSuccess
)

export const requestCamera = (): ThunkAction<void, RootReducerState, void, RequestCameraActions> => async (dispatch) => {
  dispatch<ActionRequestCamera>({
    type: 'RequestCamera',
  });
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    dispatch<ActionRequestCameraSuccess>({
      type: 'RequestCameraSuccess',
      data: {
        stream,
      },
    });
  } catch (err) {
    dispatch<ActionRequestCameraError>({
      type: 'RequestCameraError',
      data: {
        message: err.message,
      },
    });
  }
};
