import * as React from 'react';
import { useStream } from './Stream';
import { useDispatch } from '../store';
import { requestCameraUser } from '../store/actions';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonRequestUserCamera: React.FC<Props> = ({ onClick, ...props }) => {
  const dispatch = useDispatch();
  const [, setStream] = useStream();

  const handleClick: React.MouseEventHandler = async (e) => {
    e.preventDefault();
    try {
      const stream = await dispatch(requestCameraUser());
      setStream(stream);
    } catch (err) {}
  };

  return (
    <button onClick={handleClick} {...props} />
  );
};

export default ButtonRequestUserCamera;
