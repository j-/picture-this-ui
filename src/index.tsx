import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer, { getScreenInnerWidth, getScreenInnerHeight, getCameraUrl } from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { requestCamera } from './store/action-request-camera';
import { Provider as StoreProvider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { setDimensions, setSource } from './video';

const store = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(thunk),
));

store.dispatch(requestCamera());

store.subscribe(() => {
	const state = store.getState();
	const width = getScreenInnerWidth(state);
	const height = getScreenInnerHeight(state);
	const url = getCameraUrl(state);
	setDimensions(width, height);
	if (url) {
		setSource(url);
	}
});

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
