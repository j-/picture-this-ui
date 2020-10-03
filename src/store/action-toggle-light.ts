import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootReducerState } from '.';
import { MutableState } from './types';

declare global {
  interface MediaTrackConstraintSet {
    torch?: boolean;
  }
}

type R = boolean
type S = RootReducerState
type E = MutableState
type A = AnyAction

export type ActionToggleLight = ThunkAction<R, S, E, A>

export const toggleLight = (on: boolean): ActionToggleLight => (_dispatch, _getState, { stream }) => {
  if (!stream) return false;
  const tracks = stream.getVideoTracks();
  if (!tracks) return false;
  try {
    for (const track of tracks) {
      track.applyConstraints({
        advanced: [
          { torch: on },
        ],
      });
    }
    return true;
  } catch (err) {
    return false;
  }
};
