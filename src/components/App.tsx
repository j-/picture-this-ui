import React from 'react';
import { AnyAction } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { getCameraPermission, isRequestingCamera, getCameraURL, getCameraError, RootReducerState } from '../store';
import { requestCamera } from '../store/action-request-camera';
import { ThunkDispatch } from 'redux-thunk';

const App: React.FC = () => {
  const dispatch: ThunkDispatch<RootReducerState, void, AnyAction> = useDispatch();
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const cameraPermission = useSelector(getCameraPermission);
  const requestingCamera = useSelector(isRequestingCamera);
  const cameraURL = useSelector(getCameraURL);
  const cameraError = useSelector(getCameraError);
  const handleClickRequest: React.MouseEventHandler = async (e) => {
    e.preventDefault();
    try {
      const stream = await dispatch(requestCamera());
      const video = videoRef.current;
      if (!video) throw new Error('No video object');
      video.autoplay = true;
      video.srcObject = stream;
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
        <dt>Camera URL</dt>
        <dd><code>{cameraURL || <em>N/A</em>}</code></dd>
      </dl>
      <dl>
        <dt>Camera error</dt>
        <dd><code>{cameraError || <em>N/A</em>}</code></dd>
      </dl>
      <button type="button" onClick={handleClickRequest}>
        Request camera
      </button>
      <br />
      <video width={300} height={300} ref={videoRef} />
    </div>
  );
}

export default App;
