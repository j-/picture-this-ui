import * as React from 'react';

export interface Props {
  devices: MediaDeviceInfo[];
}

const Devices: React.FC<Props> = ({ devices }) => {
  return (
    <ul>
      <li>
        <strong>{devices.length} device(s).</strong>{' '}
        <strong>{devices.filter((device) => device.kind === 'videoinput').length} video device(s).</strong>
      </li>
      {devices.map((device, i) => (
        <li key={i}>
          <pre>{JSON.stringify(device)}</pre>
        </li>
      ))}
    </ul>
  );
};

export default Devices;
