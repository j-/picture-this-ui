import { AnyAction } from 'redux';
import { useDispatch as useReactReduxDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootReducerState } from '.';

export const useDispatch: () => ThunkDispatch<RootReducerState, void, AnyAction> = useReactReduxDispatch;
