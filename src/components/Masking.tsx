import * as React from 'react';
import './Masking.css';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Masking: React.FC<Props> = (props) => (
  <div className="Masking" {...props} />
);

export default Masking;
