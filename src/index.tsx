import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer, { RootReducerState, getCaptures } from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { Provider as StoreProvider } from 'react-redux';
import { queryPermission, changePermission, enumerateDevices } from './store/actions';
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

window.addEventListener('unload', () => {
  const state = store.getState();
  const blob = new Blob([JSON.stringify(state)], {
    type: 'application/json; charset=UTF-8',
  });
  navigator.sendBeacon('/beacon', blob);
});

(() => {
  const known = new Set();
  store.subscribe(() => {
    const state = store.getState();
    const captures = getCaptures(state);
    for (const capture of captures) {
      if (known.has(capture)) continue;
      known.add(capture);
      fetch(capture)
        .then((res) => res.blob())
        .then((blob) => {
          const body = new FormData();
          body.set('file', blob);
          return fetch('/upload', {
            method: 'POST',
            body: body,
          });
        });
    }
  });
})();

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
serviceWorker.unregister();
