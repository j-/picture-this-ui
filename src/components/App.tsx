import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCameraURL, getCameraError } from '../store';
import { requestCamera } from '../store/action-request-camera';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const cameraURL = useSelector(getCameraURL);
  const cameraError = useSelector(getCameraError);
  return (
    <div className="App">
      <dl>
        <dt>Camera URL</dt>
        <dd><code>{cameraURL || <em>N/A</em>}</code></dd>
      </dl>
      <dl>
        <dt>Camera error</dt>
        <dd><code>{cameraError || <em>N/A</em>}</code></dd>
      </dl>
      <button type="button" onClick={() => dispatch(requestCamera())}>
        Request camera
      </button>
    </div>
  );
}

export default App;
