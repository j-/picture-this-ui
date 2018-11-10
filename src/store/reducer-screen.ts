import { Reducer } from 'redux';

export interface ReducerState {
	innerWidth: number;
	innerHeight: number;
}

export const DEFAULT_STATE: ReducerState = {
	innerWidth: window.innerWidth,
	innerHeight: window.innerHeight,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	return state;
};

export default reducer;

export const getScreenInnerWidth = (state: ReducerState) => state.innerWidth;
export const getScreenInnerHeight = (state: ReducerState) => state.innerHeight;
