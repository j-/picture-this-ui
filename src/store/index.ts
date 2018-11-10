import { combineReducers } from 'redux';
import * as camera from './reducer-camera';
import * as screen from './reducer-screen';

export interface RootReducerState {
	camera: camera.ReducerState;
	screen: screen.ReducerState;
}

const reducer = combineReducers<RootReducerState>({
	camera: camera.default,
	screen: screen.default,
});

export default reducer;

export const isCameraError = (state: RootReducerState) => (
	camera.isCameraError(state.camera)
);

export const getCameraError = (state: RootReducerState) => (
	camera.getCameraError(state.camera)
);

export const hasCameraUrl = (state: RootReducerState) => (
	camera.hasCameraUrl(state.camera)
);

export const getCameraUrl = (state: RootReducerState) => (
	camera.getCameraUrl(state.camera)
);

export const getScreenInnerWidth = (state: RootReducerState) => (
	screen.getScreenInnerWidth(state.screen)
);

export const getScreenInnerHeight = (state: RootReducerState) => (
	screen.getScreenInnerHeight(state.screen)
);
