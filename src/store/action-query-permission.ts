import { ThunkAction } from 'redux-thunk';
import { RootReducerState } from '.';
import {
  ACTION_QUERY_PERMISSION_ERROR,
  ACTION_QUERY_PERMISSION_START,
  ACTION_QUERY_PERMISSION_SUCCESS,
  ActionQueryPermissionError,
  ActionQueryPermissionStart,
  ActionQueryPermissionSuccess,
} from './actions';

type R = Promise<PermissionStatus>
type S = RootReducerState
type E = void
type A = (
  ActionQueryPermissionError |
  ActionQueryPermissionStart |
  ActionQueryPermissionSuccess
)

export const queryPermission = (): ThunkAction<R, S, E, A> => async (dispatch) => {
  dispatch<ActionQueryPermissionStart>({
    type: ACTION_QUERY_PERMISSION_START,
  });
  try {
    const status = await navigator.permissions.query({ name: 'camera' });
    const state = status.state;
    if (
      // "Block"
      state !== 'denied' &&
      // "Allow"
      state !== 'granted' &&
      // "Ask (default)"
      state !== 'prompt'
    ) {
      throw new Error('Unrecognised permission state: ' + state);
    }
    dispatch<ActionQueryPermissionSuccess>({
      type: ACTION_QUERY_PERMISSION_SUCCESS,
      data: {
        state: status.state,
      },
    });
    return status;
  } catch (err) {
    dispatch<ActionQueryPermissionError>({
      type: ACTION_QUERY_PERMISSION_ERROR,
      data: {
        message: err.message,
      },
    });
    throw err;
  }
};
