import * as React from 'react';
import MaybeCameraErrorMessage from '../containers/MaybeCameraErrorMessage';
import MaybeCameraStream from '../containers/MaybeCameraStream';

const App: React.StatelessComponent = () => (
	<div className="App">
		<MaybeCameraErrorMessage />
		<MaybeCameraStream />
	</div>
);

export default App;
