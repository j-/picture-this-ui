import { useSelector as useReactReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { RootReducerState } from '.';

export const useSelector: TypedUseSelectorHook<RootReducerState> = useReactReduxSelector;
