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
import BackgroundEmpty from './BackgroundEmpty';
import Masking from './Masking';
import './App.css';

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

      <Capture onTouchStart={handleClickCapture} />

      <div className="App-controls">
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
      </div>

      <Flash ref={flashRef} />

      <Masking />

      <Camera />

      <BackgroundEmpty />
    </div>
  );
}

export default App;
