import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import Maybe from '../components/Maybe';
import ErrorMessage from '../components/ErrorMessage';
import { RootReducerState, isSendPhotoError, getSendPhotoError } from '../store';

interface StateProps {
  condition?: any;
}

interface OwnProps {

}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootReducerState> = (state) => ({
  condition: isSendPhotoError(state),
  children: (
    <ErrorMessage>
      {getSendPhotoError(state) as string}
    </ErrorMessage>
  ),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maybe);
