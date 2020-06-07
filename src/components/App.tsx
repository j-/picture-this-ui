import * as React from 'react';
import {
  getCameraError,
  getCameraPermission,
  getVideoInputDeviceCount,
  isRequestingCamera,
  useSelector,
} from '../store';
import Camera from './Camera';
import Capture from './ButtonCapture';
import RequestUserCamera from './ButtonRequestUserCamera';
import RequestEnvironmentCamera from './ButtonRequestEnvironmentCamera';
import CancelRequest from './ButtonCancelRequest';
import CancelOnPageHidden from './CancelOnPageHidden';
import Flash from './Flash';

const App: React.FC = () => {
  const videoInputDeviceCount = useSelector(getVideoInputDeviceCount);
  const cameraPermission = useSelector(getCameraPermission);
  const requestingCamera = useSelector(isRequestingCamera);
  const cameraError = useSelector(getCameraError);

  const flashRef = React.useRef<{ start: () => void }>();
  const handleClickCapture = () => {
    const flash = flashRef.current;
    if (!flash) return;
    flash.start();
  };

  return (
    <div className="App">
      <CancelOnPageHidden />

      <code>{videoInputDeviceCount} device(s). {cameraPermission || 'unknown'}. {String(requestingCamera)}. {cameraError || 'none'}.</code><br />

      <RequestUserCamera>
        Request user camera
      </RequestUserCamera>
      <RequestEnvironmentCamera>
        Request environment camera
      </RequestEnvironmentCamera>
      <CancelRequest>
        Close camera
      </CancelRequest>

      <Camera>
        <Flash ref={flashRef} />
        <Capture onTouchStart={handleClickCapture} />
      </Camera>
    </div>
  );
}

export default App;
