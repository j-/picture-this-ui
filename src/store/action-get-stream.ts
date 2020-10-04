import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootReducerState } from '.';
import { MutableState } from './types';

type R = MediaStream | undefined
type S = RootReducerState
type E = MutableState
type A = AnyAction

export type ActionGetStream = ThunkAction<R, S, E, A>

export const getStream = (): ActionGetStream => (_dispatch, _getState, mutable) => {
  return mutable.stream;
};
