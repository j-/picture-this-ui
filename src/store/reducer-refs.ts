import { Reducer } from 'redux';
import { isActionSetVideoRef } from './actions';

export interface ReducerState {
	video: HTMLVideoElement | null;
}

export const DEFAULT_STATE: ReducerState = {
	video: null,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSetVideoRef(action)) {
		return {
			...state,
			video: action.data.element,
		};
	}

	return state;
};

export default reducer;

export const getVideoRef = (state: ReducerState) => state.video;
