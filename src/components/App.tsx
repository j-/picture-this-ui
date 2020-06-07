import * as React from 'react';
import {
  getCameraError,
  getCameraPermission,
  getVideoInputDeviceCount,
  isRequestingCamera,
  useSelector,
} from '../store';
import Camera from './Camera';
import Gallery from './Gallery';
import Capture from './ButtonCapture';
import RequestUserCamera from './ButtonRequestUserCamera';
import RequestEnvironmentCamera from './ButtonRequestEnvironmentCamera';
import CancelRequest from './ButtonCancelRequest';
import CancelOnPageHidden from './CancelOnPageHidden';

const App: React.FC = () => {
  const videoInputDeviceCount = useSelector(getVideoInputDeviceCount);
  const cameraPermission = useSelector(getCameraPermission);
  const requestingCamera = useSelector(isRequestingCamera);
  const cameraError = useSelector(getCameraError);
  return (
    <div className="App">
      <CancelOnPageHidden />

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
      </dl>
      <input type="file" accept="image/*;capture=camera" />
      <br />
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
