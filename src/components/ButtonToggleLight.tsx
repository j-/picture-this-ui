import * as React from 'react';
import { useDispatch } from '../store';
import { toggleLight } from '../store/action-toggle-light';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonToggleLight: React.FC<Props> = ({ onClick, ...props }) => {
  const dispatch = useDispatch();
  const [isOn, setOn] = React.useState(false);

  const handleClick: React.MouseEventHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(toggleLight(!isOn));
      setOn(!isOn);
    } catch (err) {}
  };

  return (
    <button onClick={handleClick} {...props} />
  );
};

export default ButtonToggleLight;
