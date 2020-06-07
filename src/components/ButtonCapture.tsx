import * as React from 'react';
import { useDispatch } from '../store';
import { useVideo } from './Stream';
import { capture } from '../store/actions';
import './ButtonCapture.css';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonCapture: React.FC<Props> = ({ onTouchStart, ...props }) => {
  const dispatch = useDispatch();
  const video = useVideo();

  const handleTouchStart: React.TouchEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    try {
      if (!video) throw new Error('Expected video element');
      await dispatch(capture(video));
    } catch (err) {}
    if (onTouchStart) onTouchStart(e);
  };

  return (
    <button className="ButtonCapture" onTouchStart={handleTouchStart} {...props} />
  );
};

export default ButtonCapture;
