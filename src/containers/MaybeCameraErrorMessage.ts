import { connect, MapStateToProps } from 'react-redux';
import MaybeErrorMessage from '../components/MaybeErrorMessage';
import { RootReducerState, getCameraError } from '../store';

interface StateProps {
	children: string | null;
}

interface OwnProps {

}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootReducerState> = (state) => ({
	children: getCameraError(state),
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(MaybeErrorMessage);
