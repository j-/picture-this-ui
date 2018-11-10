import { Reducer } from 'redux';

import {
	isActionRequestCameraSuccess,
	isActionRequestCameraError,
} from './actions';

export interface ReducerState {
	error: string | null;
	url: string | null;
}

export const DEFAULT_STATE: ReducerState = {
	error: null,
	url: null,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionRequestCameraSuccess(action)) {
		const { stream } = action.data;
		const url = URL.createObjectURL(stream);
		return {
			...state,
			url,
		};
	}

	if (isActionRequestCameraError(action)) {
		const { message } = action.data;
		return {
			...state,
			error: message,
		};
	}

	return state;
};

export default reducer;

export const isCameraError = (state: ReducerState) => state.error !== null;
export const getCameraError = (state: ReducerState) => state.error;
export const hasCameraUrl = (state: ReducerState) => state.url !== null;
export const getCameraUrl = (state: ReducerState) => state.url;
