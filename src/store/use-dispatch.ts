import { AnyAction } from 'redux';
import { useDispatch as useReactReduxDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootReducerState } from '.';
import { MutableState } from './types';

export const useDispatch: () => ThunkDispatch<RootReducerState, MutableState, AnyAction> = useReactReduxDispatch;
