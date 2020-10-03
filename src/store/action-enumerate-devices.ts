import { ThunkAction } from 'redux-thunk';
import { RootReducerState } from '.';
import {
  ACTION_ENUMERATE_DEVICES_ERROR,
  ACTION_ENUMERATE_DEVICES_START,
  ACTION_ENUMERATE_DEVICES_SUCCESS,
  ActionEnumerateDevicesError,
  ActionEnumerateDevicesStart,
  ActionEnumerateDevicesSuccess,
} from './actions';
import { MutableState } from './types';

type R = Promise<MediaDeviceInfo[]>
type S = RootReducerState
type E = MutableState
type A = (
  ActionEnumerateDevicesError |
  ActionEnumerateDevicesStart |
  ActionEnumerateDevicesSuccess
)

export type ActionEnumerateDevices = ThunkAction<R, S, E, A>

export const enumerateDevices = (): ActionEnumerateDevices => async (dispatch) => {
  dispatch<ActionEnumerateDevicesStart>({
    type: ACTION_ENUMERATE_DEVICES_START,
  });
  try {
    if (
      typeof navigator.mediaDevices === 'undefined' ||
      typeof navigator.mediaDevices.enumerateDevices !== 'function'
    ) {
      throw new Error('Navigator enumerate devices API not available');
    }
    const deviceInfo = await navigator.mediaDevices.enumerateDevices();
    dispatch<ActionEnumerateDevicesSuccess>({
      type: ACTION_ENUMERATE_DEVICES_SUCCESS,
      data: {
        devices: deviceInfo,
      },
    });
    return deviceInfo;
  } catch (err) {
    dispatch<ActionEnumerateDevicesError>({
      type: ACTION_ENUMERATE_DEVICES_ERROR,
      data: {
        message: err.message,
      },
    });
    throw err;
  }
};
