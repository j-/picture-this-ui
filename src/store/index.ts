import { Reducer } from 'redux';

export interface RootReducerState {

}

export const DEFAULT_STATE: RootReducerState = {

};

export const reducer: Reducer = (state = DEFAULT_STATE, _action) => {
  return state;
};

export default reducer;
