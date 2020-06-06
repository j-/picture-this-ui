import * as React from 'react';
import './ShutterButton.css';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const ShutterButton: React.FunctionComponent<Props> = (props) => (
  <button
    className="ShutterButton"
    type="button"
    {...props}
  />
);

export default ShutterButton;
