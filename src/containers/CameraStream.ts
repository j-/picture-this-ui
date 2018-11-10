import { connect, MapStateToProps, MapDispatchToProps, MergeProps } from 'react-redux';
import Video, { Props as P } from '../components/Video';
import { setVideoRef } from '../store/actions';

import {
	RootReducerState,
	getScreenInnerWidth,
	getScreenInnerHeight,
	getCameraUrl,
} from '../store';

interface DispatchProps extends P {
	ref: (el: HTMLVideoElement) => void;
}

const mapStateToProps: MapStateToProps<P, P, RootReducerState> = (state) => ({
	width: getScreenInnerWidth(state),
	height: getScreenInnerHeight(state),
	src: getCameraUrl(state)!,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, P> = (dispatch) => ({
	ref: (el) => {
		dispatch(setVideoRef(el));
	},
});

const mergeProps: MergeProps<P, P, P, P> = (state, dispatch, own) => ({
	...state,
	...dispatch,
	...own,
	autoPlay: true,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps,
)(Video);
