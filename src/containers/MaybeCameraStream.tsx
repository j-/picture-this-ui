import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import Maybe from '../components/Maybe';
import CameraStream from './CameraStream';
import { RootReducerState, hasCameraUrl } from '../store';

interface StateProps {
	condition?: any;
}

interface OwnProps {

}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootReducerState> = (state) => ({
	condition: hasCameraUrl(state),
	children: <CameraStream />,
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Maybe);
