import * as React from 'react';

export interface Props {
  devices: MediaDeviceInfo[];
}

const Devices: React.FC<Props> = ({ devices }) => {
  return (
    <ul>
      {devices.map((device, i) => (
        <li key={i}>
          <pre>{JSON.stringify(device)}</pre>
        </li>
      ))}
    </ul>
  );
};

export default Devices;
