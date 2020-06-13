import { Store, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootReducerState } from './store';
import {
  queryPermission,
  changePermission,
  enumerateDevices,
  getSupportedConstraints,
} from './store/actions';

type AppStore = Store<RootReducerState, AnyAction> & {
  dispatch: ThunkDispatch<RootReducerState, void, AnyAction>
}

export const initialize = (store: AppStore) => {
  // Query the navigator for the camera permission
  // and update if the permission changes.
  (async () => {
    try {
      const status = await store.dispatch(queryPermission());
      status.addEventListener('change', () => {
        store.dispatch(changePermission(status.state));
      });
    } catch (err) {}
  })();

  // Enumerate the video input devices available.
  (async () => {
    try {
      await store.dispatch(enumerateDevices());
    } catch (err) {}
  })();

  // Request a list of supported constraints from
  // the navigator.
  (async () => {
    try {
      await store.dispatch(getSupportedConstraints());
    } catch (err) {}
  })();

  // Send a beacon with the store state when the
  // application is unloaded.
  window.addEventListener('unload', () => {
    const state = store.getState();
    const data = JSON.stringify(state);
    const blob = new Blob([data], {
      type: 'application/json; charset=UTF-8',
    });
    navigator.sendBeacon('/beacon', blob);
  });
};
