import React from 'react';
import { AnyAction } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCameraError,
  getCameraPermission,
  getDevices,
  getVideoInputDeviceCount,
  isRequestingCamera,
  RootReducerState,
} from '../store';
import { requestCamera, capture } from '../store/actions';
import { ThunkDispatch } from 'redux-thunk';
import Devices from './Devices';
import { useStream, useVideo } from './Stream';
import Camera from './Camera';
import Gallery from './Gallery';

const App: React.FC = () => {
  const dispatch: ThunkDispatch<RootReducerState, void, AnyAction> = useDispatch();
  const devices = useSelector(getDevices);
  const videoInputDeviceCount = useSelector(getVideoInputDeviceCount);
  const cameraPermission = useSelector(getCameraPermission);
  const requestingCamera = useSelector(isRequestingCamera);
  const cameraError = useSelector(getCameraError);
  const [stream, setStream] = useStream();
  const video = useVideo();
  const handleClickRequestUser: React.MouseEventHandler = async (e) => {
    e.preventDefault();
    try {
      const stream = await dispatch(requestCamera('user'));
      setStream(stream);
    } catch (err) {}
  };
  const handleClickRequestEnvironment: React.MouseEventHandler = async (e) => {
    e.preventDefault();
    try {
      const stream = await dispatch(requestCamera('environment'));
      setStream(stream);
    } catch (err) {}
  };
  const handleClickCapture: React.MouseEventHandler = async (e) => {
    e.preventDefault();
    try {
      if (!video) throw new Error('Expected video element');
      await dispatch(capture(video));
    } catch (err) {}
  };
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
      <button type="button" onClick={handleClickRequestUser}>
        Request user camera
      </button>
      <button type="button" onClick={handleClickRequestEnvironment}>
        Request environment camera
      </button>
      <br />
      {stream && <Camera stream={stream} />}
      <br />
      <button type="button" onClick={handleClickCapture}>
        Capture
      </button>
      <Gallery />
    </div>
  );
}

export default App;
