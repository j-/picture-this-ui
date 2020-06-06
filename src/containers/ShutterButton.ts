import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import ShutterButton, { Props as P } from '../components/ShutterButton';
import { RootReducerState, isCameraError } from '../store';
import { sendPhoto } from '../store/action-send-photo';

const mapStateToProps: MapStateToProps<P, P, RootReducerState> = (state) => ({
  disabled: isCameraError(state),
});

const mapDispatchToProps: MapDispatchToProps<P, P> = {
  onClick: sendPhoto,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShutterButton);
