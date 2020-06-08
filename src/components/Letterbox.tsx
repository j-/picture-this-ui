import * as React from 'react';
import './Letterbox.css';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Letterbox: React.FC<Props> = (props) => (
  <div className="Letterbox" {...props} />
);

export default Letterbox;
