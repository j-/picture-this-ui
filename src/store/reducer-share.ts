import { Reducer } from 'redux';
import { isActionSendPhotoError } from './actions';

export interface ReducerState {
  sendPhotoError: string | null;
}

export const DEFAULT_STATE: ReducerState = {
  sendPhotoError: null,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
  if (isActionSendPhotoError(action)) {
    return {
      ...state,
      sendPhotoError: action.data.message,
    };
  }

  return state;
};

export default reducer;

export const isSendPhotoError = (state: ReducerState) => (
  state.sendPhotoError !== null
);

export const getSendPhotoError = (state: ReducerState) => (
  state.sendPhotoError
);
