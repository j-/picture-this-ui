import * as React from 'react';
import './ErrorMessage.css';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {

}

const ErrorMessage: React.FunctionComponent<Props> = (props) => (
  <div className="ErrorMessage" {...props} />
);

export default ErrorMessage;
