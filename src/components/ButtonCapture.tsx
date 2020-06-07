import * as React from 'react';
import { useDispatch } from '../store';
import { useVideo } from './Stream';
import { capture } from '../store/actions';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonCapture: React.FC<Props> = ({ onClick, ...props }) => {
  const dispatch = useDispatch();
  const video = useVideo();

  const handleClick: React.MouseEventHandler = async (e) => {
    e.preventDefault();
    try {
      if (!video) throw new Error('Expected video element');
      await dispatch(capture(video));
    } catch (err) {}
  };

  return (
    <button onClick={handleClick} {...props} />
  );
};

export default ButtonCapture;
