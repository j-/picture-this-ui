import { combineReducers } from 'redux';
import * as screen from './reducer-screen';

export interface RootReducerState {
	screen: screen.ReducerState;
}

const reducer = combineReducers<RootReducerState>({
	screen: screen.default,
});

export default reducer;

export const getScreenInnerWidth = (state: RootReducerState) => (
	screen.getScreenInnerWidth(state.screen)
);

export const getScreenInnerHeight = (state: RootReducerState) => (
	screen.getScreenInnerHeight(state.screen)
);
