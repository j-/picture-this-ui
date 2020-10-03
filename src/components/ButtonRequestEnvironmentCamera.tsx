import * as React from 'react';
import { useStream } from './Stream';
import { useDispatch } from '../store';
import { requestCameraEnvironment } from '../store/actions';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonRequestEnvironmentCamera: React.FC<Props> = ({ onClick, ...props }) => {
  const dispatch = useDispatch();
  const [, setStream] = useStream();

  const handleClick: React.MouseEventHandler = async (e) => {
    e.preventDefault();
    try {
      const stream = await dispatch(requestCameraEnvironment());
      setStream(stream);
    } catch (err) {}
  };

  return (
    <button onClick={handleClick} {...props} />
  );
};

export default ButtonRequestEnvironmentCamera;
