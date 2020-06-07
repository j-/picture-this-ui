import * as React from 'react';
import { useStream } from './Stream';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonCancelRequest: React.FC<Props> = ({ onClick, ...props }) => {
  const [stream] = useStream();

  const handleClick: React.MouseEventHandler = async (e) => {
    e.preventDefault();
    try {
      if (!stream) throw new Error('Expected stream');
      stream.getTracks().forEach((track) => track.stop());
    } catch (err) {}
  };

  return (
    <button onClick={handleClick} {...props} />
  );
};

export default ButtonCancelRequest;
