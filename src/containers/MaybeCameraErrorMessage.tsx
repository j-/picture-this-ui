import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import Maybe from '../components/Maybe';
import ErrorMessage from '../components/ErrorMessage';
import { RootReducerState, isCameraError, getCameraError } from '../store';

interface StateProps {
	condition?: any;
}

interface OwnProps {

}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootReducerState> = (state) => ({
	condition: isCameraError(state),
	children: (
		<ErrorMessage>
			{getCameraError(state) as string}
		</ErrorMessage>
	),
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Maybe);
