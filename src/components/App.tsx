import * as React from 'react';
import {
  getCameraError,
  getCameraPermission,
  getVideoInputDeviceCount,
  isRequestingCamera,
  useSelector,
  useDispatch,
} from '../store';
import { capture } from '../store/actions';
import Camera from './Camera';
import Capture from './ButtonCapture';
import RequestUserCamera from './ButtonRequestUserCamera';
import RequestEnvironmentCamera from './ButtonRequestEnvironmentCamera';
import CancelRequest from './ButtonCancelRequest';
import CancelOnPageHidden from './CancelOnPageHidden';
import Flash, { useFlash } from './Flash';
import BackgroundEmpty from './BackgroundEmpty';
import Masking from './Masking';
import { useVideo } from './Stream';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const videoInputDeviceCount = useSelector(getVideoInputDeviceCount);
  const cameraPermission = useSelector(getCameraPermission);
  const requestingCamera = useSelector(isRequestingCamera);
  const cameraError = useSelector(getCameraError);

  const video = useVideo();
  const [flashRef, flash] = useFlash();

  const handleClickCapture = async () => {
    flash();
    try {
      if (!video) throw new Error('Expected video element');
      await dispatch(capture(video));
    } catch (err) {}
  };

  return (
    <div className="App">
      <CancelOnPageHidden />

      <Capture onTouchStart={handleClickCapture} />

      <div className="App-controls">
        <div className="btn-group m-2">
          <RequestUserCamera className="btn btn-light">
            User
          </RequestUserCamera>
          <RequestEnvironmentCamera className="btn btn-light">
            Environment
          </RequestEnvironmentCamera>
          <CancelRequest className="btn btn-danger">
            Close
          </CancelRequest>
        </div>
        <br />
        <code className="App-debug m-2">
          {videoInputDeviceCount} device(s). {cameraPermission || 'unknown'}. {String(requestingCamera)}. {cameraError || 'none'}.
        </code>
      </div>

      <Flash ref={flashRef} />

      <Masking />

      <Camera />

      <BackgroundEmpty />
    </div>
  );
}

export default App;
