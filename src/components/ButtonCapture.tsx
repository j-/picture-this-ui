import * as React from 'react';
import { useDispatch } from '../store';
import { useVideo } from './Stream';
import { capture } from '../store/actions';
import './ButtonCapture.css';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonCapture: React.FC<Props> = ({ onTouchStart, ...props }) => {
  const dispatch = useDispatch();
  const video = useVideo();
  const [disabled, setDisabled] = React.useState(false);

  const handleTouchStart = React.useCallback<React.TouchEventHandler<HTMLButtonElement>>(async (e) => {
    if (disabled) return;
    e.preventDefault();
    try {
      if (!video) throw new Error('Expected video element');
      await dispatch(capture(video));
    } catch (err) {}
    setDisabled(true);
    if (onTouchStart) onTouchStart(e);
  }, [disabled, dispatch, video, onTouchStart]);

  React.useEffect(() => {
    if (!disabled) return;
    const timeout = setTimeout(() => setDisabled(false), 200);
    return () => clearTimeout(timeout);
  }, [disabled]);

  return (
    <button
      className="ButtonCapture"
      onTouchStart={handleTouchStart}
      disabled={disabled}
      {...props}
    />
  );
};

export default ButtonCapture;
