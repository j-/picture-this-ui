import * as React from 'react';
import './BackgroundEmpty.css';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const BackgroundEmpty: React.FC<Props> = (props) => (
  <div className="BackgroundEmpty" {...props} />
);

export default BackgroundEmpty;
