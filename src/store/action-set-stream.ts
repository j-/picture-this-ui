import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootReducerState } from '.';
import { MutableState } from './types';

type R = void
type S = RootReducerState
type E = MutableState
type A = AnyAction

export type ActionSetStream = ThunkAction<R, S, E, A>

export const setStream = (stream: MediaStream): ActionSetStream => async (_dispatch, _getState, mutable) => {
  mutable.stream = stream;
};
