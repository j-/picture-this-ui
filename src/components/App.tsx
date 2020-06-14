import * as React from 'react';
import Modal from 'react-modal';
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

  const [captureSrc, setCaptureSrc] = React.useState<string | null>(null);
  const isModalOpen = captureSrc !== null;

  const handleClickCapture = async () => {
    try {
      if (!video) throw new Error('Expected video element');
      const img = await dispatch(capture(video));
      setCaptureSrc(img.src);
    } catch (err) {}
  };

  return (
    <div className="App">
      <CancelOnPageHidden />

      <Modal
        isOpen={isModalOpen}

      >
        {captureSrc && <img className="App-captured" src={captureSrc} alt="" />}
      </Modal>

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

      <Masking />

      <Camera />

      <BackgroundEmpty />
    </div>
  );
}

export default App;
