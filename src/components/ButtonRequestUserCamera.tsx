import * as React from 'react';
import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { useStream } from './Stream';
import { RootReducerState } from '../store';
import { requestCamera } from '../store/actions';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonRequestUserCamera: React.FC<Props> = ({ onClick, ...props }) => {
  const dispatch: ThunkDispatch<RootReducerState, void, AnyAction> = useDispatch();
  const [, setStream] = useStream();

  const handleClick: React.MouseEventHandler = async (e) => {
    e.preventDefault();
    try {
      const stream = await dispatch(requestCamera('user'));
      setStream(stream);
    } catch (err) {}
  };

  return (
    <button onClick={handleClick} {...props} />
  );
};

export default ButtonRequestUserCamera;
