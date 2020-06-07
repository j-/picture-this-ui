import React from 'react';
import { useSelector } from 'react-redux';
import {
  getCameraError,
  getCameraPermission,
  getDevices,
  getVideoInputDeviceCount,
  isRequestingCamera,
} from '../store';
import Devices from './Devices';
import Camera from './Camera';
import Gallery from './Gallery';
import Capture from './ButtonCapture';
import RequestUserCamera from './ButtonRequestUserCamera';
import RequestEnvironmentCamera from './ButtonRequestEnvironmentCamera';
import CancelRequest from './ButtonCancelRequest';

const App: React.FC = () => {
  const devices = useSelector(getDevices);
  const videoInputDeviceCount = useSelector(getVideoInputDeviceCount);
  const cameraPermission = useSelector(getCameraPermission);
  const requestingCamera = useSelector(isRequestingCamera);
  const cameraError = useSelector(getCameraError);
  return (
    <div className="App">
      <dl>
        <dt>Camera permission</dt>
        <dd><code>{cameraPermission || <em>N/A</em>}</code></dd>
      </dl>
      <dl>
        <dt>Requesting camera</dt>
        <dd><code>{String(requestingCamera)}</code></dd>
      </dl>
      <dl>
        <dt>Camera error</dt>
        <dd><code>{cameraError || <em>N/A</em>}</code></dd>
      </dl>
      <dl>
        <dt>Video input devices</dt>
        <dd>{videoInputDeviceCount} device(s)</dd>
        {devices ? <Devices devices={devices} /> : <dd><em>N/A</em></dd>}
      </dl>
      <RequestUserCamera>
        Request user camera
      </RequestUserCamera>
      <RequestEnvironmentCamera>
        Request environment camera
      </RequestEnvironmentCamera>
      <CancelRequest>
        Close camera
      </CancelRequest>
      <br />
      <Camera />
      <br />
      <Capture>
        Capture
      </Capture>
      <Gallery />
    </div>
  );
}

export default App;
