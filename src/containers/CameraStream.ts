import { connect, MapStateToProps, MapDispatchToProps, MergeProps } from 'react-redux';
import Video, { Props as P } from '../components/Video';

import {
	RootReducerState,
	getScreenInnerWidth,
	getScreenInnerHeight,
	getCameraUrl,
} from '../store';

const mapStateToProps: MapStateToProps<P, P, RootReducerState> = (state) => ({
	width: getScreenInnerWidth(state),
	height: getScreenInnerHeight(state),
	src: getCameraUrl(state)!,
});

const mapDispatchToProps: MapDispatchToProps<P, P> = {};

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
