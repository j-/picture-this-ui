import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer, { RootReducerState } from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { Provider as StoreProvider } from 'react-redux';
import { queryPermission, changePermission, enumerateDevices, getSupportedConstraints } from './store/actions';
import StreamProvider from './components/Stream';
import './update-vh';
import './styles.css';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    thunk as ThunkMiddleware<RootReducerState>,
  ),
));

(async () => {
  try {
    const status = await store.dispatch(queryPermission());
    status.addEventListener('change', () => {
      store.dispatch(changePermission(status.state));
    });
  } catch (err) {}
})();

(async () => {
  try {
    await store.dispatch(enumerateDevices());
  } catch (err) {}
})();

(async () => {
  try {
    await store.dispatch(getSupportedConstraints());
  } catch (err) {}
})();

window.addEventListener('unload', () => {
  const state = store.getState();
  const blob = new Blob([JSON.stringify(state)], {
    type: 'application/json; charset=UTF-8',
  });
  navigator.sendBeacon('/beacon', blob);
});

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <StreamProvider>
        <App />
      </StreamProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
