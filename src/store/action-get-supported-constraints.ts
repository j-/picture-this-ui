import { ThunkAction } from 'redux-thunk';
import { RootReducerState } from '.';
import {
  ACTION_GET_SUPPORTED_CONSTRAINTS_ERROR,
  ACTION_GET_SUPPORTED_CONSTRAINTS_START,
  ACTION_GET_SUPPORTED_CONSTRAINTS_SUCCESS,
  ActionGetSupportedConstraintsError,
  ActionGetSupportedConstraintsStart,
  ActionGetSupportedConstraintsSuccess,
} from './actions';
import { MutableState } from './types';

type R = Promise<MediaTrackSupportedConstraints>
type S = RootReducerState
type E = MutableState
type A = (
  ActionGetSupportedConstraintsError |
  ActionGetSupportedConstraintsStart |
  ActionGetSupportedConstraintsSuccess
)

export type ActionGetSupportedConstraints = ThunkAction<R, S, E, A>

export const getSupportedConstraints = (): ActionGetSupportedConstraints => async (dispatch) => {
  dispatch<ActionGetSupportedConstraintsStart>({
    type: ACTION_GET_SUPPORTED_CONSTRAINTS_START,
  });
  try {
    if (
      typeof navigator.mediaDevices === 'undefined' ||
      typeof navigator.mediaDevices.getSupportedConstraints !== 'function'
    ) {
      throw new Error('Navigator get supported constraints API not available');
    }
    const supports = await navigator.mediaDevices.getSupportedConstraints();
    dispatch<ActionGetSupportedConstraintsSuccess>({
      type: ACTION_GET_SUPPORTED_CONSTRAINTS_SUCCESS,
      data: {
        supports,
      },
    });
    return supports;
  } catch (err) {
    dispatch<ActionGetSupportedConstraintsError>({
      type: ACTION_GET_SUPPORTED_CONSTRAINTS_ERROR,
      data: {
        message: err.message,
      },
    });
    throw err;
  }
};
