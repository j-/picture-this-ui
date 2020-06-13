import * as React from 'react';
import './ButtonCapture.css';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonCapture: React.FC<Props> = ({ onTouchStart, ...props }) => {
  const [disabled, setDisabled] = React.useState(false);

  const handleTouchStart = React.useCallback<React.TouchEventHandler<HTMLButtonElement>>(async (e) => {
    e.preventDefault();
    if (disabled) return;
    setDisabled(true);
    if (onTouchStart) onTouchStart(e);
  }, [disabled, onTouchStart]);

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
