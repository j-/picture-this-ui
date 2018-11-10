import * as React from 'react';
import MaybeCameraErrorMessage from '../containers/MaybeCameraErrorMessage';
import MaybeCameraStream from '../containers/MaybeCameraStream';
import ShutterButton from '../containers/ShutterButton';
import './App.css';

const App: React.StatelessComponent = () => (
	<div className="App">
		<MaybeCameraErrorMessage />
		<MaybeCameraStream />
		<div className="App-shutter-button">
			<ShutterButton />
		</div>
	</div>
);

export default App;
