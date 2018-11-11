import * as React from 'react';
import MaybeCameraErrorMessage from '../containers/MaybeCameraErrorMessage';
import MaybeSendPhotoErrorMessage from '../containers/MaybeSendPhotoErrorMessage';
import MaybeCameraStream from '../containers/MaybeCameraStream';
import ShutterButton from '../containers/ShutterButton';
import './App.css';

const App: React.FunctionComponent = () => (
	<div className="App">
		<div className="App-error-message-container">
			<MaybeCameraErrorMessage />
			<MaybeSendPhotoErrorMessage />
		</div>
		<MaybeCameraStream />
		<div className="App-shutter-button">
			<ShutterButton />
		</div>
	</div>
);

export default App;
