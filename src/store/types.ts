import { AnyAction, Store } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootReducerState } from '.';

export interface MutableState {
  stream?: MediaStream
}

export type StoreType = Store<RootReducerState, AnyAction> & {
  dispatch: ThunkDispatch<RootReducerState, MutableState, AnyAction>
}
